import React, { useState } from "react"

export default function WindowTracker() {
    /**
     * Challenge:
     * 1. Create state called `windowWidth`, default to 
     *    `window.innerWidth`
     * 2. When the window width changes, update the state
     * 3. Display the window width in the h1 so it updates
     *    every time it changes
     */

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
     
    
    React.useEffect(() => {
        // So instead of using the useEffects inside feature to direclty rerender, we are suing the event handling to call this useEffect
        window.addEventListener("resize", function() {
            console.log("Resized!")
            setWindowWidth(window.innerWidth)
        })
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}

// Think of switching back on and off the event listenerr multiple of times
// it creates MULTIPLE EVENT LISTENERSSSSSS

// THerefore a similar Use Case would be: If we had started a WebSockert connection, but then we toggled off the component, That doesnt means the Connection was Cleaned up!!!! We woild be stuck with multiple OCnnections in that case.




// While this code successfully tracks the window width, it is missing a cleanup function. If this WindowTracker component is ever removed from the screen (unmounted), the event listener will stay attached to the window object in the background forever.


// And if we added WindowWidth as the dependency, like below:
    // React.useEffect(() => {
    //     window.addEventListener("resize", function() {
    //         console.log("Resized!")
    //         setWindowWidth(window.innerWidth)
    //     })
    // }, [windowWidth])

// We would face these issues:
// . Because windowWidth changed, useEffect triggers again and adds a second event listener.
// 4. You resize the window by another pixel. Now, both listeners fire and update the state.
// 5. The useEffect triggers again, adding more event listeners.