import PropTypes from "prop-types";
import styles from "./DetailMovie.module.css";

function Movie({ id, backImg, title, year, summary, genres, rating, runtime }) {
  return (
    <div id={id} className={styles.movie}>
      <img src={backImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>{title}</h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary}</p>
        <p className={styles.movie__rating}>{rating} ★</p>
        <p className={styles.movie__runtime}>{runtime} minute</p>
        <ul className={styles.movie__genres}>
          {genres && genres.map((g) => <li key={g}>{g}</li>)}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  backImg: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
