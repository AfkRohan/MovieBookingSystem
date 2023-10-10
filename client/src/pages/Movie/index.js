import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImageSlider2 from '../../components/ImageSlider2';


function Movies() {

  const movie = [
  
    {
      title: 'THE WOLVERINE',
      imageUrl: 'https://wallpapercave.com/wp/wp2162761.jpg',
      description: 'ACTION BASED HOLLYWOOD MOVIE',
      rating: '4/5',
      language: 'ENGLISH',
    },
    {
      title: 'ROBIN HOOD',
      imageUrl: 'https://www.moviehdwallpapers.com/wp-content/uploads/Hollywood-Movies-HD-Wallpapers-1037.jpg',
      description: 'FIGHT BASED HOLLYWOOD MOVIE',
      rating: '4/5',
      language: 'ENGLISH',
    },
    {
      title: 'GADAR 2',
      imageUrl: 'https://i.ytimg.com/vi/SHB3PL9UeVA/maxresdefault.jpg',
      description: 'LOVE BASED BOLLYWOOD MOVIE',
      rating: '4/5',
      language: 'HINDI',
    },
    {
      title: 'BRAVE',
      imageUrl: 'http://cdn.wallpapersafari.com/37/0/Gb6ZxX.jpg',
      description: 'FIGHTER HOLLYWOOD MOVIE',
      rating: '4.2/5',
      language: 'ENGLISH',
    },
    {
      title: 'JAI HO',
      imageUrl: 'https://wallpaperaccess.com/full/1494470.jpg',
      description: 'BOLLYWOOD NATION RELATED MOVIE',
      rating: '4.8/5',
      language: 'HINDI',
    },
   
   
    {
      title: 'SINGHAM RETURN',
      imageUrl: 'https://wallpapercave.com/wp/wp8807422.jpg',
      description: 'BOLLYWOOD ACTION MOVIE',
      rating: '4.4/5',
      language: 'HINDI',
    },
];  
  return (
    <>
      <Header />
      <ImageSlider2></ImageSlider2>

      <div className='centerDivStyle'>
      <div className="movie-list">
          {movie.map((movie, index) => (
            <div className="movie-page" key={index}>
              <img src={movie.imageUrl} alt={movie.title} />
              <div className="movie-details">
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <p>Rating: {movie.rating}</p>
                <p>Language: {movie.language}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      
      <Footer />
    </>
  );
}

export default Movies;
