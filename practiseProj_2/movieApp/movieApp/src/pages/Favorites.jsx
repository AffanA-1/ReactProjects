import MovieCard from '../components/MovieCard'
import { useMovieContext } from '../context/MovieContext'
import '../css/Favorites.css'

function Favorites(){

    const { favorites } = useMovieContext()

    if(favorites && favorites.length>0){
        return (
            <div className="favorites">

                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (<MovieCard movie={movie} key={movie.imdbID}></MovieCard>))}
                </div>
            </div>
        )
    } 
    else{
    return <div className="favorites-empty">
        <h2>No Favcorite movies yet</h2>
        <p>Start adding now</p>
    </div>}
}


export default Favorites