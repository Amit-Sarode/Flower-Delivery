import React from 'react'
import Home from './components/Home'
<<<<<<< HEAD
import Freshners from './components/Shop/Freshners'
function App() {
  return (
    <div className='font-serif'>
      <Home></Home>
      <Freshners></Freshners>
    </div>
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FreshFlowers from './components/FreshFlowers'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/fresh-flowers' element={<FreshFlowers />} />
        </Routes>
      </BrowserRouter>
    </>
    
>>>>>>> a2147ecd648ae033c4e85962b491e0e9341befbb
  )
}

export default App
