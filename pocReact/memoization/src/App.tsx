
import './App.css'
import { useState } from 'react'
import Child from './Child'

// function Child({name}) {
//   // this gets called on each rerending of the Count State at the Counter. Which IS very unnecesary.
//   // so child components gets called due to change in the PArent Compoent
// console.log("Skinny Jack")
//   return (
//     <div>{name}</div>
//   )
// }


function Counter() {

    const [count, setCount] = useState(0)

    const handleIncrement = () => setCount(count+1)
    const handleDecrement = () => setCount(count-1)

    return (
        <div className="App">
            <button onClick={() => handleIncrement()}>Increment</button>
            <button onClick={() => handleDecrement()}>Decrement</button>

            <h2>{count}</h2>

            <Child name={"Skinny Jack"} />
        </div>                    
    )
}

function App() {

  return (
   <>
   <Counter />
   </>
  )
}

export default App
