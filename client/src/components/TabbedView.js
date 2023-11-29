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
    return <div>Loading...</div>; 
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
        className=' p3'
        tabBarStyle={{background:"#F8A602", padding:"5px"}}
        tabBarGutter={50}
        items={(dates).map((date) => {
          const tarikh = new Date(date).toDateString();
          return {
            label: ` ${tarikh}`,
            key: tarikh,
            children: 
            <div className='p2'> {shows.map((show)=>{
                if(new Date(show.showDate.toString()).toDateString() == tarikh)
                    return  ( 
                    <Link to={`/seatselection/${show._id}/${props.movies}/${show.screen}/${show.price}`} key={show.showTime}>
                    <Button className='btnSeatselection' style={{ margin: '5px' , color:'black' }}>{show.showTime}</Button>
                  </Link>); 
            }) } </div>,
          };
        })}
      />
    </>
  );
};
export default TabbedView;