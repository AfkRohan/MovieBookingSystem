import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Image, List, Typography, Row, Col } from 'antd';
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
    return <div>Movie not found</div>;
  }

  return (
    <div className='bootstrap'>
      <Header />
      <Row align="middle" gutter={[16, 16]}>
        <Col xs={24} md={8} className="text-center" style={{paddingLeft:'30px'}}>
          <div style={{ border: '4px solid black', padding: '10px',paddingLeft:'10px' }}>
            <Image className='imgsize img-fluid' src={movie.image} />
          </div>
        </Col>
        <Col xs={24} md={16}>
          <Card>
            <List className='listpadding'>
              <List.Item className='list-group-item'>
                <h1 style={{paddingLeft:'30px'}}>{movie.name}</h1>
              </List.Item>
              <List.Item className='list-group-item'>
                <p style={{paddingLeft:'30px',paddingRight:'30px'}}>{movie.description}</p>
              </List.Item>
              <List.Item className='list-group-item'>
                <Typography.Text style={{paddingLeft:'30px'}}>Language:</Typography.Text> {movie.languages}
              </List.Item>
              <List.Item className='list-group-item'>
                <Typography.Text style={{paddingLeft:'30px'}}>Genre:</Typography.Text> {movie.genre}
              </List.Item>
              <List.Item className='list-group-item'>
                <Typography.Text style={{paddingLeft:'30px'}}>Age Groups:</Typography.Text> {movie.ageGroups}
              </List.Item>
              <List.Item className='list-group-item'>
                <Typography.Text style={{paddingLeft:'30px'}}>Rating:</Typography.Text> {movie.rating}
              </List.Item>
            </List>
          </Card>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default MovieDetails;
