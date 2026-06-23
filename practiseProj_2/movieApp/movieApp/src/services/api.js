const API_KEY = '99d24be1'
const BASE_URL = 'http://www.omdbapi.com'


export const getPopularMovies = async () => {
    const movieKeywords = ['man', 'a', 'night', 'the']

    // Promise.all give back an array. And each array contains an array of json
    const response = await Promise.all(
        movieKeywords.map(movieKeyword => (fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${movieKeyword}`))
            .then(res => res.json())
        )
    )
    // console.log(response);

    // [{search}, {response}, {search}, {search}]
    const structureResponse = response.filter(
        movieRes => movieRes.Response === 'True'
        // FlatMap requires an Array to Flatten it. If it doesnt gets an Array, it throws error. And an Empty array can be Flattened to nothing in the final Array
    ).flatMap(finalMovie => finalMovie.Search || []) 

    return structureResponse
}


export const getSearchResult = async (searchQuery) => {


    try {
        const response = await (fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${searchQuery}`))
    
        if (!response.ok) {
            // response.json itseld should give the error object now. BUT there is a possiblility that we dont get a JSON body, in that situation we need the error handling through catch
          const errorDetails = await response.json().catch(() => null);
          
          throw new Error(
            `HTTP error! Status: ${response.status}. Message: ${errorDetails?.message || 'Unknown Error'}`
          );
        }
    
        const resonseBody = await response.json()

        if(resonseBody.Response === 'False'){
            throw new Error(`Error Occured: ${resonseBody.Error}`)
        }
        return resonseBody.Search
    } catch (error) {
        throw error.message
    }
}