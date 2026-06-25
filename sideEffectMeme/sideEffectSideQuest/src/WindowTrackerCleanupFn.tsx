import React from "react"

export default function WindowTrackerCleanupFn() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {
        function watchWindowWidth () {
            console.log("Resized")
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWindowWidth)
        // Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
        // We do this by including a return function at the end of the useEffect Hook.
        // we return a callback function which is ceaning the CONNECTION. 
        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWindowWidth)
        }
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
