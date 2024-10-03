import React from 'react';
import propTypes from 'prop-types';
import {Link} from "react-router-dom";
import './movie.css'; 

function Movie({id,coverImg, title, summary, genres, year}) {

    return (
    <div className='movie'>
        <img src={coverImg} alt={title} className="movieImg"/>
        <h2 className='movieTitle'><Link to={{
              pathname: `/movie/${id}`,
              state: {
                id,
                coverImg,
                title,
                summary,
                genres,
              },
            }}>{title}</Link></h2>
        <h3 className="movieYear">{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0,235)}` : summary}</p>
        <ul className='movieGenre'>
          {genres.map((g) => (<li key={g}>{g}</li>))}
        </ul>
    </div>

)};

 Movie.propTypes = {
    id : propTypes.number.isRequired,
    coverImg : propTypes.string.isRequired,
    title :  propTypes.string.isRequired,
    summary :  propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired
 };

export default Movie;