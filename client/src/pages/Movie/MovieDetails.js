import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Image, List, Typography, Row, Col } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MovieDetails = ({ movies }) => {
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
    return <div>Movie not found</div>;
  }

  return (
    <> <Header/>
    <div className='bootstrap'>
      <Row>
        <Col xs={12} md={6}>
          <Card>
            <Image className='imgsize img-fluid' src={movie.image} />
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <List>
              <List.Item className='list-group-item'>
                <h1>{movie.name}</h1>
              </List.Item>
              <List.Item className='list-group-item'>
                <p>{movie.description}</p>
              </List.Item>
              <List.Item className='list-group-item'>
                <Typography.Text>Language:</Typography.Text> {movie.language}
              </List.Item>
              <List.Item className='list-group-item'>
                <Typography.Text>Genre:</Typography.Text> {movie.genre}
              </List.Item>
              <List.Item className='list-group-item'>
                <Typography.Text>Age Groups:</Typography.Text> {movie.ageGroups}
              </List.Item>
              <List.Item className='list-group-item'>
                <Typography.Text>Rating:</Typography.Text> {movie.rating}
              </List.Item>
            </List>
          </Card>
        </Col>
      </Row>
    </div>
    <Footer/>
    </>
  );
};

export default MovieDetails;
