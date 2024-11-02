import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Dried from './components/catagory/Dried'
import Live from './components/catagory/Live'
import FreshFlowers from './components/catagory/FreshFlowers'
import Aroma from './components/catagory/Aroma'
import Fresheners from './components/catagory/Fresheners'
import About from './components/AboutUs'
import Category from './components/Category'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignIn from './Auth/SignIn'
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/freshflowers' element={<FreshFlowers />} />
        <Route path='/dried' element={<Dried />} />
        <Route path='/live' element={<Live></Live>} />
        <Route path='/aroma' element={<Aroma />} />
        <Route path='/fresheners' element={<Fresheners />} />
        <Route path='/about' element={<About />} />
        <Route path='/category' element={<Category />} />
        <Route path='/SignIn' element={<SignIn />} />
      </Routes>
      <Footer></Footer>
    </>

  )
}

export default App
