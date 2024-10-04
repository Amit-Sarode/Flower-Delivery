import React from 'react'
import Home from './components/Home'
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
    
  )
}

export default App
