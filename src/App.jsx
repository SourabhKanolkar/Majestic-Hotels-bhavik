
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Route,Routes } from 'react-router-dom'
import Hotels from './components/Hotels'
import  About  from './components/About'
import TermsofService from './components/TermsofService'
import Allhotels from './components/Allhotels'
import Login from './components/Login'
import AdminLogin from './components/AdminLogin'
import { useState } from 'react'

function App() {
  // implement this  later
  const [logedIn,setLogedin]=useState(false);


  return (
    <>
      <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
       <Route path="/hotels/:city" element={<Hotels />} />
        <Route path="/about" element={<About/>} />
        <Route path='/TermsofService' element={<TermsofService />} />
        <Route path='/allhotels' element={<Allhotels />} />
        <Route path='/login' element={<Login />} />
        <Route path='/adminlogin' element={<AdminLogin />} />

    </Routes>
      <Footer />
    </>
  )
}

export default App
