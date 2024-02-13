import React from 'react'
import gsap from 'gsap'
import { useState,useEffect,useRef } from 'react'

function Colour() {
    const headerRef=useRef(null)
    const [background,setBackground]=useState('white')
    const toggleBackground=()=>{
        const color=background !=='white'?'white':'green'
        setBackground(color)
    }
    useEffect(()=>{
gsap.to(headerRef.current,{
   duration:2,
   backgroundColor:background,
   ease:'none'
})
    },[background])
  return (
    <div style={{width:'100vw',height:'100vh',color:'black',textAlign:'center',marginTop:'20px'}} ref={headerRef}>
    
      <button onClick={()=>{
        toggleBackground()
      }}>Toggle color</button>
    </div>
  )
}

export default Colour
