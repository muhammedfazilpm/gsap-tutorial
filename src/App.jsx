import { useState } from 'react'
import './App.css'
import Basic from './pages/Basic'
import Circle from './pages/Circle'
import Test from './pages/Windows'
import Colour from './pages/Colour'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
   <BrowserRouter>
  <Routes>
  <Route path='/' element={<Basic/>}/>
  <Route path='/circle' element={<Circle/>}/>
  <Route path='/test' element={<Test/>}/>
  <Route path='/color' element={<Colour/>}/>

  
  </Routes>
   
   
   </BrowserRouter>
    </>
  )
}

export default App
