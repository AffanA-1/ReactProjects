import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import About from './components/About.tsx'
import Home from './components/Home.tsx'
import Contact from './components/Contact.tsx'
import { User } from './components/User.tsx'
import { Query } from './components/Query.tsx'
import { LoaderCompt, type fetchedData } from './components/LoaderComp.tsx'
import { LoaderCompTwo } from './components/LoaderCompTwo.tsx'

// Decide on the router, and give it the sepcific COmponent Access
// const router = createBrowserRouter([
//   {
//     path: '/',
//     Component: App,
//     children: [
//       {
//         path: '',
//       Component: Home,
//     },
//     {
//       path: 'about',
//       Component: About,
//     }
//   ]
//   }
// ])

export const githubInfoLoader = async (): Promise<fetchedData> => {
  const response = await fetch('https://api.github.com/users/affanaslam24')

  return response.json() as Promise<fetchedData>
}

// ANother way of writing
const router = createBrowserRouter(
  createRoutesFromElements(
    // One Parent route and multiple child routes
    <Route path='/' Component={App}>
        {/* child */}
        <Route path='' Component={Home} />
        <Route path='about' Component={About} />
        <Route path='contact' Component={Contact} />
        <Route path='user/:userId' Component={User} />
        <Route path='query' Component={Query}/>
        {/* check the dofference between both the Implementation */}
        <Route path='loader' Component={LoaderCompt}/>
        <Route path='workingLoader' Component={LoaderCompTwo} loader={githubInfoLoader} />
    </Route>
  )
)



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Now, instead of calling the App component directly, we will call any componrny through the router */}
    {/* <App /> */}

    <RouterProvider router={router}/>
  </StrictMode>,
)
