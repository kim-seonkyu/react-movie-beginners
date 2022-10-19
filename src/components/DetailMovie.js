import PropTypes from "prop-types";

function Movie({ id, backImg, title, summary, genres, rating, runtime }) {
  return (
    <div id={id}>
      <h2>{title}</h2>
      <img src={backImg} alt={title} />
      <p>
        <strong>{summary}</strong>
      </p>
      <p>{rating}</p>
      <p>{runtime} minute</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  backImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
