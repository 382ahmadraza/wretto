import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
           <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
