import React from "react"
import padsData from './pads.js' 
import Pad from "./Pad"

export default function App() {
    const [pads, setPads] = React.useState(padsData)
    
    // Works as a closure in the Pad component
    function toggle(id) {
      // Understand how the useState function has the access to the previous elements
        setPads(prev => 
          // previous version of the Array
          prev.map(item => 
            { return item.id === id ? {...item, on: !item.on} : item }
          ))
        // console.log(id);
    }
    
    // toggle function sent as Props in Pad Component
    const buttonElements = pads.map(pad => (
        <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on}/>
    )) 
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
             {/* {pads.length>0 && <p>Hey</p>} */}
        </main>
    )
}
