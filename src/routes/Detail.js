import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/DetailMovie";
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
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Movie
            key={movie.id}
            id={movie.id}
            backImg={movie.medium_cover_image}
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
