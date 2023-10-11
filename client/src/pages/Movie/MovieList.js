import React from 'react'
import Button from '../../components/Button';
import MovieForm from './MovieForm';

function MovieList() {
    const[movies,setMovies] = React.useState([]);
    const [showMovieFormModal,setShowMovieFormModal] = React.useState(false);
    const [selectedMovie,setSelectedMovie] = React.useState(null);
    const [formType,setformType] = React.useState("add");
    
    return (
        <div>
    <div className="flex justify-center pt1">
        <Button
        title="Add Movie"
        variant="outlined"
        onClick={() => {
            setShowMovieFormModal(true);
            setformType("add");
        }}
        />
    </div>
    
        {showMovieFormModal && (
            <MovieForm
            showMovieFormModal ={showMovieFormModal}
            setShowMovieFormModal={setShowMovieFormModal}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            formType={formType}
            
            />
            )}

    </div>
  )
}

export default MovieList