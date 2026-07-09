- components
    - What kind of Props we can pass:  vairables, states, functions, refs, components
    - Using Typescript 
    - what is JSX? Function that returns JSX elements
- CLousre used in setFunctions through prop drilling
- Hooks: useEffect(depenedency array differences), useMemo(dependency array affects the given elements and their changes), useRef(reference an element), useState
- Rendering and Re-remderoing COncepts:
    - a ***component*** Renders only when the 'Local State' (useState or useReducer) changes
    - when the the parent components rerenders, then all the child component renders (when the Props change, they trigger the child COmponent)
    - Custom hook changes its own internal State somehow.

- ContextApi:
    - createContext
    - Context Provider
    - Value
    - useContext

- Custom Hooks

- React Router:
    - createBrowserRouter
    - nested Routings
    - Outlets
    - Link, NavLink
    - programmatic Navigation
    - Loader functions added to path
    - useParam: URL parameter
    - useParamSearch: Query Param

- ReactHookForms (project implementation left)
- HOC Pattern (project implementation left)
- Render Props Pattern (project implementation left)

- Error Boundaries (project implementation left)

- API Integration (project implementation left)




- HOC vs Render Props vs Custom hooks. (didnt understood it well.)

- Suspense: Load component while the main component is getting rendered and return a promise

- Lazy loading: react.lazy to import the (default jsx functions return only) component only when they are required.




-------
Scenarios:
- Render Component based on Authentiaion: Children Pattern, send the component as a part of another component and Render them based on the Authentication process.

- For a fetch scenario: Loading a specific component but based on the Time it takes to load, we want to show another data = Use Suspense
    - Fallback Components

- Error Handling: Using Error Boundaries along with Suspense, in situation where the Component fails to Finally Load the data and throws an error, the Whole DOM Shouldnt Crash. To restrict the Crashign Behaviour and to show a specific View, we need to show a Fallback Component, thats where Error Boundaries comes into picture.
