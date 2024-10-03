import React, { useEffect, useState } from 'react';
import Movie from '../Movie/movie';
import './Home.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`
      );
      const json = await response.json();

      // 데이터가 존재하는지 확인 후 상태 업데이트
      if (json.data && json.data.movies) {
        setMovies(json.data.movies);
      } else {
        console.error("No movies found in response.");
        setMovies([]); // movies가 undefined가 되지 않도록 빈 배열로 설정
      }
    } catch (error) {
      console.error("Failed to fetch movies:", error);
      setMovies([]); // 오류 발생 시에도 movies가 빈 배열로 남도록 처리
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div className="container">
      <div className="loader">
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <div className="movies">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  year={movie.year}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              ))
            ) : (
              <h1>No movies found</h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
