import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Image, List, Divider, Tag, Button } from 'antd';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

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
      <div className="movie-background-image">
        <Image src={movie.image} alt={movie.name} />
        <div className="movie-overlay" >
          <Card className="movie-card"  style={{ background: 'transparent' }}>
            <List className="movie-details-list">
              <List.Item className="movie-details-title">
                <h1 className='moviename' style={{ fontSize: '5em' }}>{movie.name}</h1>
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
                <Tag color="blue" style={{ fontSize: '1.5em' }}>{movie.languages}</Tag>
                <Tag color="green" style={{ fontSize: '1.5em' }}>{movie.genre}</Tag>
                <Tag color="orange" style={{ fontSize: '1.5em' }}>Age: {movie.ageGroups}</Tag>
                <Tag color="purple" style={{ fontSize: '1.5em' }}>Rating: {movie.rating}</Tag>
                <Tag color="red" style={{ fontSize: '1.5em' }}>Duration: {movie.duration} min</Tag>
              </List.Item>
              <p className='descfont' style={{ fontSize: '1.5em' }}>{movie.description}</p>


              <List.Item className="movie-details-seats">
                <Link to={`/seat-selection/${id}`}>
                  <Button className="btn-seat-selection">Book Now</Button>
                </Link>
              </List.Item>
            </List>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetails;
