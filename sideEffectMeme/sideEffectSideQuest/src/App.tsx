import React from "react"
import WindowTracker from "./WindowTracker"
import WindowTrackerCleanupFn from "./WindowTrackerCleanupFn"

export default function App() {

    const [show, setShow] = React.useState(true)
    
    function toggle() {
        setShow(prevShow => !prevShow)
    }

    return (
        <main className="container">
            <button onClick={toggle}>
                Toggle WindowTracker
            </button>
            {/* {show && <WindowTracker />} */}
            {show && <WindowTrackerCleanupFn />}
        </main>
    )
}