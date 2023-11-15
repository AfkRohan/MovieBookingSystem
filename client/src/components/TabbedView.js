import axios from 'axios';
import React, { useEffect , useState } from 'react';
import { Link  , useParams} from 'react-router-dom';


import { Button, Tabs } from 'antd';
const TabbedView = (props) => {
  const shows = props.shows;
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/movie/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>; // You can show a loading spinner or a message while the data is being fetched
  }

  console.log("tabs");
  const removeDuplicateDates = (dates) => {
    const uniqueDates = [];
    const seenDates = new Set();
    for (const date of dates) {
      const dateString = new Date(date).toDateString();
      if (!seenDates.has(dateString)) {
        uniqueDates.push(date);
        seenDates.add(dateString);
      }
    }
    return uniqueDates;
  };
  const dates = removeDuplicateDates(props.dates);
  return (
    <>
      <Tabs
        tabPosition={"top"}
        centered={true}
        className='centerDivStyle p3'
        tabBarStyle={{background:"white", padding:"5px"}}
        tabBarGutter={50}
        items={(dates).map((date) => {
          const tarikh = new Date(date).toDateString();
          return {
            label: ` ${tarikh}`,
            key: tarikh,
            children: 
            <div className='p2'> {shows.map((show)=>{
                if(new Date(show.showDate.toString()).toDateString() == tarikh)
                    return  ( <Link to={`/seatselection/${id}/${movie.name}`} key={show.showTime}>
                    <Button style={{ margin: '5px' }}>{show.showTime}</Button>
                  </Link>); 
            }) } </div>,
          };
        })}
      />
    </>
  );
};
export default TabbedView;