import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/DetailMovie";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          <Movie
            key={movie.id}
            id={movie.id}
            backImg={movie.medium_cover_image}
            year={movie.year}
            title={movie.title}
            summary={movie.description_full}
            rating={movie.rating}
            runtime={movie.runtime}
            genres={movie.genres}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
