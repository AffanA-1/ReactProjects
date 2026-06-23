import '../css/Home.css'
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from 'react';
import { getPopularMovies, getSearchResult } from '../services/api';

function Home(){

    const [searchQuery,setSearchQuery] = useState("")

    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [originalState, setOriginalState] = useState([])

    // const movies = [
    //     {id: 1, title: "John Wick", release_date: '2020'},
    //     {id: 1, title: "sdsc Wick", release_date: '2020'},
    //     {id: 1, title: "John Wick", release_date: '2020'},
    //     {id: 1, title: "John Wick", release_date: '2020'}
    // ]

    useEffect(() => {
        const fetchedMovies = async () => {
            try {
                const movies = await getPopularMovies()
                setMovies(movies)
                setOriginalState(movies)
            } catch (error) {
                console.log(error);
                setError('failed to load movies')
            } finally {
                setLoading(false)
            }
        }

        fetchedMovies()
    }, [])


    const handleSearch = async (e) => {
        e.preventDefault()

        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true)
        try {
            setMovies(await getSearchResult(searchQuery))
            setError(null)
        } catch (error) {
            console.log(error);
            setError('Failed to load the movies')
        } finally {
            setLoading(false)
        }


    }

    const handleOnChange = (event) => {
       const value = event.target.value;
        setSearchQuery(value);

        if (value.trim() === '') {
            setMovies(originalState);
            setError(null)
        }
    }


    return (
        <div className="home">

        <form onSubmit={handleSearch} className='search-form'>
            <input type="text" placeholder='Search for movies' className='search-input'
                onChange={handleOnChange}
                value={searchQuery}
            />
            <button type='submit' className='search-button'>Search</button>
        </form>

        {error && <div className='error-message'>{error}</div>}

        {loading ? 
            <div className='loading'>Loading...</div> :
            <div className="movies-grid">
                {movies.map(movie => movie.Title.toLowerCase().includes(searchQuery) && (
                                <MovieCard movie={movie}></MovieCard>)
                    )}
            </div>
        }
        </div>
        )
}

export default Home