import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Settings from './pages/Settings'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import BooksAvailable from "./pages/BooksAvailable"
import Booksinreturn from "./pages/Booksinreturn"
import Contactus from "./pages/Contactus"
import Faq from "./pages/Faq"
import Reservebooks from "./pages/Reservebooks"
import TermsConditions from "./pages/TermsConditions"
import Footer from "../src/components/Footer"

function App() {
  return (
   <>
   <Routes>
    <Route exact path='/' element={<Login/>}/>
    <Route exact path='/Register' element={<Register/>}/>
    <Route exact path='/Home'element={<Home/>} />
    <Route exact path='/Dashboard'element={<Dashboard/>} />
    <Route exact path='/Users' element={<Users/>}/>
    <Route exact path='/Settings' element={<Settings/>}/>
    <Route exact path='/about' element={<Aboutus/>}/>
    <Route exact path='/available' element={<BooksAvailable/>}/>
    <Route exact path='/return' element={<Booksinreturn/>}/>
    <Route exact path='/contact' element={<Contactus/>}/>
    <Route exact path='/faq' element={<Faq/>}/>
    <Route exact path='/reserve' element={<Reservebooks/>}/>
    <Route exact path='/terms' element={<TermsConditions/>}/>
    <Route exact path='/footer' element={<Footer/>}/>
 </Routes>
   
   </>
  )
}

export default App


// const navigate = useNavigate();

// <button onclick={()=>{navigate("/about")}}></button>