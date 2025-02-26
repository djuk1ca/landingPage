import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/landingPage/LandinPage'
import Login from './pages/loginPage/Login'
import Register from './pages/loginPage/Register'
import EmailVerification from './pages/loginPage/EmailVerification'
import Dashboard from './pages/dashboardPage/Dashboard'
import AdminDashboard from './pages/adminPage/AdminDashboard'
import Search from './pages/searchPage/Search'
import ReportIncident from './pages/reportIncidentPage/ReportIncident'
import UserProfile from './pages/userProfilePage/UserProfile'
import BrokerProfile from "./pages/brokerProfilePage/brokerProfile.jsx";
import BrokerReviews from './pages/brokerReviewsPage/BrokerReviews'
import SubscriptionPage from './pages/subscriptionPage/SubscriptionPage'
//import { useState } from 'react'


function App() {
 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: "/plans",
      element: <SubscriptionPage />
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
      path: "/verify",
      element: <EmailVerification />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
    {
      path: "/admin",
      element: <AdminDashboard />
    },
    {
      path: "/search",
      element: <Search />
    },
    {
      path: "/reportincident",
      element: <ReportIncident editing={false}/>
    },
    {
      path: "/editreport",
      element: <ReportIncident editing={true}/>
    },
    {
      path: "/account",
      element: <UserProfile />
    },
    {
      path: "/broker",
      element: <BrokerProfile />
    },
    {
      path: "/reviews",
      element: <BrokerReviews />
    }
  ])


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
