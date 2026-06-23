import { useMovieContext } from '../context/MovieContext'
import '../css/MovieCard.css'

function MovieCard({movie}){
    // movie data in map format
    // return <>
    //     <img src={movie.img} alt="somesource" />
    //     <p>{movie.name}</p>
    // </>


    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()
    const favorite = isFavorite(movie.imdbID)

    function onFavouriteClick(e){

        e.preventDefault()

        // if its already marked as favorite, then remove it from the Favorite List
        if(favorite) removeFromFavorites(movie.imdbID)
        else addToFavorites(movie)

    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavouriteClick}> LIKE </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
    </div>

}

export default MovieCard


//  Conditional rendering
// In JSX, {cond ? <A /> : <B />} means “if cond, render <A />, otherwise <B />”.
// In JSX, {cond && <A />} means “if cond, render <A />, otherwise nothing”.