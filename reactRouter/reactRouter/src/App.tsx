import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"


function App() {
  // We cant just use Link and NavLinks without the Router being set in place. We need to use them within encapsulate Router Provider
  

  return (
    // Through Outlet, allow which Components of the Children can be visible
   <>
  <Header></Header>
    <Outlet/>
   <Footer></Footer>
   
   </>
  )
}

export default App
