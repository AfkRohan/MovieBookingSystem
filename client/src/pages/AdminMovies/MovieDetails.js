import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Image, List, Divider, Tag, Button } from 'antd';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const tagStyle =(colorbg) =>{
    return { fontSize: '1.5em', background:`${colorbg}`, color: "black", padding: '0.5em 1em' }
  }
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`http://localhost:4000/api/movie/${id}`);
      setMovie(response.data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div></div>;
  }

  return (
    <div className="movie-details-container">
      <Header />
        <div  >
          <Card className="movie-card"  style={{ background: `url(${movie.image})` }}>
            <List className="movie-details-list">
              <List.Item className="movie-details-title">
                <h1 className='moviename' style={{ fontSize: '2.5em' }}>{movie.name}</h1>
              </List.Item>

              <List.Item className="movie-details-video">
            <iframe
              width="560"
              height="315"
              src={movie.trailerLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </List.Item>

              <List.Item className="movie-tags" style={{ fontSize: '0.7em' }}>
                <Tag  style={tagStyle('#bca0dc')}>{movie.languages}</Tag>
                <Tag color="green" style={tagStyle('#66d78b')}>{movie.genre}</Tag>
                <Tag color="orange" style={tagStyle('#ff7f50')}>Age: {movie.ageGroups}</Tag>
                <Tag color="purple" style={tagStyle('pink')}>Rating: {movie.rating}</Tag>
                <Tag color="red" style={tagStyle('#b1f2ff')}>Duration: {movie.duration} min</Tag>
              </List.Item>
            
<<<<<<< HEAD
              <List.Item className="movie-details-seats">
                <Link to={`/seatselection/${id}/${movie.name}`}>
                  <Button className="btnSeatselection">Book Now</Button>
=======
              <List.Item className="movie-details-seats centerDivStyle m3" style={{background:'none'}}>
                <Link to={`/tickets/${id}`}>
                  <Button block style={{width:'15rem'}}>Book Now</Button>
>>>>>>> 7bc13d46713de723e3ec4e4ed96bfc522529635d
                </Link>
              </List.Item>
            </List>
          <Card style={{ background: 'rgba(255, 255, 255, 0.7)'}}>
          <List.Item>
              <p className='descfont' style={{ fontSize: '1.4em' }}>{movie.description}</p>
            </List.Item>
          </Card>
          </Card>
        </div>
      <Footer />
    </div>
  );
};

export default MovieDetails;
