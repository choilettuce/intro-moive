import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './movie.css';

function Movie({ id, coverImg, title, summary, genres = [], year }) {
  return (
    <div className="movie">
      <img src={coverImg} alt={title} className="movieImg" />
      <h2 className="movieTitle">
        <Link
          to={{
            pathname: `/movie/${id}`,
            state: {
              id,
              coverImg,
              title,
              summary,
              genres,
            },
          }}
        >
          {title}
        </Link>
      </h2>
      <h3 className="movieYear">{year}</h3>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul className="movieGenre">
        {genres.length > 0 ? (
          genres.map((g) => <li key={g}>{g}</li>)
        ) : (
          <li>No genres available</li>
        )}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  year: PropTypes.number.isRequired,
};

export default Movie;
