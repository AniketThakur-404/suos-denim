import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Men from './pages/Men.jsx'
import Women from './pages/Women.jsx'
import NewArrivals from './pages/NewArrivals.jsx'
import Sale from './pages/Sale.jsx'
import LookbookPage from './pages/LookbookPage.jsx'
import SustainabilityPage from './pages/SustainabilityPage.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
const router = createBrowserRouter([{element:<App/>,children:[
  {path:"/",element:<Home/>},{path:"/men",element:<Men/>},{path:"/women",element:<Women/>},
  {path:"/new",element:<NewArrivals/>},{path:"/sale",element:<Sale/>},{path:"/lookbook",element:<LookbookPage/>},
  {path:"/sustainability",element:<SustainabilityPage/>},{path:"/about",element:<About/>},{path:"/contact",element:<Contact/>}
]}])
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><RouterProvider router={router}/></React.StrictMode>)
