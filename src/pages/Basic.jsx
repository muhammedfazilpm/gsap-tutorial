import React from 'react'
import { useEffect,useRef } from 'react'
import { Tween } from 'gsap/gsap-core'
import { Power3 } from 'gsap'

function Basic() {
  let item=useRef(null)
  useEffect(()=>{
   Tween.to(
    item,
    2,
    {
      opacity:1,
      y:-200,
      ease:Power3.easeInOut,
      delay:1
    }
   )

  },[])
  return (
    <>
      <h1 ref={el=>item=el}
      
      > WELCOME </h1>
    </>
  )
}

export default Basic
