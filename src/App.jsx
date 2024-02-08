import { useState } from 'react'
import './App.css'
import Basic from './pages/Basic'
import Circle from './pages/Circle'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {

  return (
    <>
   <BrowserRouter>
  <Routes>
  <Route path='/' element={<Basic/>}/>
  <Route path='/circle' element={<Circle/>}/>
  
  </Routes>
   
   
   </BrowserRouter>
    </>
  )
}

export default App
