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


// Why a functino expression and not the functino itself?
export const MovieProvider = ({children}) => {



    return <MovieContext.Provider>
        {children}
    </MovieContext.Provider>
}


