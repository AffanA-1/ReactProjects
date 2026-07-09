function withLogging(fn){
    return function(...args){
        console.log("Calling function with args", args);
        const result = fn(...args);
        console.log("Result ", result);
        return result
    }
}


// So we have a function which takes in a function and returns a function - Higher order function

// But how does the inside function execute?
// SImple, Furst run the Outside FUnction and fetch the Inside function Body

function add(a,b){
    return a+b;
}
// this is the inside function


const loggedAdd = withLogging(add)
// loggedAdd has the Returned Functino now

// Run the Within function now
loggedAdd(2,3)
// this is show the result and all