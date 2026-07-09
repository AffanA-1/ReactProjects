- Store
- Reduces
- Dispatches
- selector
- Slicing

----

###Steps:
- Setup the Store: COnfigure store(rootReducer) -- For Root Reducer you need to provide a combined Reducer or a SIngle Reducer
- In SLice:
    - First create the initial State
    - Add Reducers
    - Expose the Reducers 
    - Expose the slice.Reducer
- Use the Reducer inside the ConfigureStore(RootReducer)
    - Reducer is just the logic to manipulate the State of the Store, For One state there can be various Storesi
- MAKE SURE YOURE USING THE PROVIDER TO ENCAPSULATE FIRST. Its like when you use the COntext APi
    - Fetch the provider from the React-redux
    - Fetch the store from where you crearted it
    - check out the Main.tsx

---

###Heed:
- JS App: Subscribe to the Store in UseEffect
- Unsubscribe to the Store in CleanupFucntion of the useEffect
- Can Add Middleware for Async, logging, crash Report in the Middleware between the Reducer and the Action
- Dispatch an Action for the Reducer
- A reducer uses the Current state and the Action it recieved for performing changes to the state and create a new State
- Action is an object that can contain data

###Three Principals:
- use state and action to deduce new value for state
- dont modify the existing state. immutable update, copy the existing state, make changes to the copied values
- do not perform async tasks or side efffects


----

###General Notification:
- Root Reducer defines the type of the Store by inference
- Slice is also Infered Type
- Action - Reducers inside the Slice will need to have their types written
- useDispatch and useSelector needs to use .withType created Types
- returnType of store.getState gives the Selectors Type
- store.dispatch gives the useDispatch's type


##Questions:
- Whats a Slice?
- Whats a reducers?
- Whats an Action?
- Whats a store and how does RootReducer works?


----


- useSelector For Fetching the State Current State
- useDispach for sending data(actions) to the Reducers. Basically dispatching an action and invoking a reducer.
