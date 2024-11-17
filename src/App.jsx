import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/landingPage/LandinPage'
import Login from './pages/loginPage/Login'
import Register from './pages/loginPage/Register'
import Dashboard from './pages/dashboardPage/Dashboard'
import Search from './pages/searchPage/Search'
import ReportIncident from './pages/reportIncidentPage/ReportIncident'
import { useState } from 'react'


function App() {
  const [register, setRegister] = useState(false)
  
  function handleRegister(){
    setRegister((register) => !register);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: "/login",
      element: <Login register={register} handleRegister={handleRegister}/>
    },
    {
      path: "/register",
      element: <Register register={register} handleRegister={handleRegister}/>
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
    {
      path: "/search",
      element: <Search />
    },
    {
      path: "/report",
      element: <ReportIncident />
    }
  ])


  return (
    <>      
      <RouterProvider router={router}/>
    </>
  )
}

export default App
