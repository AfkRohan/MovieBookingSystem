import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Image} from "antd";
import Title from 'antd/es/skeleton/Title';


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
    <Card>
    <Image src={movie.image } />
    <Title> 
      <h1>This is a poster</h1>
      <p>This is the poster text.</p>
    </Title>
  </Card>
  );
};

export default MovieDetails;
