import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/landingPage/LandinPage'
import Login from './pages/loginPage/Login'
import Register from './pages/loginPage/Register'
import Dashboard from './pages/dashboardPage/Dashboard'
import Search from './pages/searchPage/Search'
import ReportIncident from './pages/reportIncidentPage/ReportIncident'
import UserProfile from './pages/userProfilePage/UserProfile'
import BrokerProfile from './pages/brokerProfilePage/brokerProfile'
import { useState } from 'react'


function App() {
 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
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
    },
    {
      path: "/account",
      element: <UserProfile />
    },
    {
      path: "/broker",
      element: <BrokerProfile />
    }
  ])


  return (
    <>      
      <RouterProvider router={router}/>
    </>
  )
}

export default App
