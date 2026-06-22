import '../css/MovieCard.css'

function MovieCard({movie}){
    // movie data in map format
    // return <>
    //     <img src={movie.img} alt="somesource" />
    //     <p>{movie.name}</p>
    // </>

    function onFavouriteClick(){
        alert("click clic")
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overlay">
                <button className='favorite-btn' onClick={onFavouriteClick}> LIKE </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>

}

export default MovieCard


//  Conditional rendering
// In JSX, {cond ? <A /> : <B />} means “if cond, render <A />, otherwise <B />”.
// In JSX, {cond && <A />} means “if cond, render <A />, otherwise nothing”.