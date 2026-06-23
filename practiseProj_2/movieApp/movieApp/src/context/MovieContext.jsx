//useContext
// CreeateContext
// Create the state, function, local storage setup, etc
// Set the Value
// Set provider for the children
// Use the Context in HTML through Enclosing the Element body
// Call the Context values through useContext on the different Components 

import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext()


export const useMovieContext = () => useContext(MovieContext);

// All of this below is Step 1

// Why a functino expression and not the functino itself?
export const MovieProvider = ({children}) => {

    // set State for Favorite
    // USe LocalStorage to Persist the Data
    // useEffect to Fetch the LocalStorage and for Rerendering whenever Favorite State changes

    const [favorites, setFavorites] = useState([])

    // Fetch Data from the LocalStorage and set it to the LocalStorage
    useEffect(()=> {
        const storedFavs = localStorage.getItem("favorites")

        const settingFavs = async () => {
            if(storedFavs) setFavorites(JSON.parse(storedFavs))
        }

        settingFavs()
    }, [])

    // Set data to localStorage whenever a new data is visible on the Facorites State
    useEffect(()=>{

        localStorage.setItem('favorites', JSON.stringify(favorites))

        //Runs on the first render
        //And any time any dependency value changes
    }, [favorites])


    // FUnctions for adding, remvoing and Viewing the favorites 
    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.imdbID !== movieId))
    }

    //  .find() will return the first value 
    // .some will return True or False
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.imdbID === movieId)
    }


    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }


    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}


