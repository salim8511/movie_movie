import React from "react"
import PropTypes from "prop-types"
import "./Movie.css";
import { Link } from "react-router-dom";


function Movie({id, year, title, summary, poster, genres}) {
    return (
    <Link to={{
        pathname: `/movie/${id}`,
        state: {
            year,
            title,
            summary,
            poster,
            genres
        }}
    }>
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <p className="movie_summary">{summary.slice(0, 140)}...</p>
            <ul className="movie_genres">{genres.map((genre, index) => <li className="genre_genre" key={index}>{genre}</li>)}</ul>
            </div>
        </div>
    </Link>)
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
} 

export default Movie;