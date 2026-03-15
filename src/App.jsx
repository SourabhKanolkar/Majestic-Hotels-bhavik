
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Route,Routes } from 'react-router-dom'
import Hotels from './components/Hotels'

function App() {


  return (
    <>
      <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
       <Route path="/hotels/:city" element={<Hotels />} />
    </Routes>
      <Footer />
    </>
  )
}

export default App
