import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../movieState';


const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies,setMovies] = useState(MovieState);
    const [movie,setMovie] = useState(null);
    //useEffect
    useEffect(() => {
       const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
       setMovie(currentMovie[0]);
    }, [movies, url]);
   
    return (
    <>
        {movie && (
    <div classNmae="details">
        <div className="headline">
        <h2>{movie.title}</h2>
        <img src={movie.mainImg} alt="movie" />
        </div>
        <div className="awards">
           {movie.awards.map((award) => (
            <Award title={award.title} 
            description={award.description}
            key={award.title}
            />
           ))} 
        </div>
        <div className="ImageDisplay">
            <img src={movie.secondaryImg} alt="movie"/>
        </div>
    </div>
    )}
    </>
  );  
};

//award component
const Award = ({ title, description}) => {
    return(
        <div className="award">
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </div>
    );
};

export default MovieDetail;