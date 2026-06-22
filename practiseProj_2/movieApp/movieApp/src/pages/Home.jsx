import '../css/Home.css'
import MovieCard from "../components/MovieCard";
import { useState } from 'react';

function Home(){

    const [searchQuery,setSearchQuery] = useState("")

    const movies = [
        {id: 1, title: "John Wick", release_date: '2020'},
        {id: 1, title: "John Wick", release_date: '2020'},
        {id: 1, title: "John Wick", release_date: '2020'},
        {id: 1, title: "John Wick", release_date: '2020'}
    ]


    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }


    return (<div className="home">

        <form onSubmit={handleSearch} className='search-form'>
            <input type="text" placeholder='Search for movies' className='search-input'
                onChange={(e)=>setSearchQuery(e.target.value)}
                value={searchQuery}
            />
            <button type='submit' className='search-button'>Search</button>
        </form>

        <div className="movies-grid">
          {movies.map(movie => <MovieCard movie={movie}></MovieCard>)}
        </div>
        </div>)
}

export default Home