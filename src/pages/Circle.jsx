import React, { useRef, useEffect, useState } from 'react';
import {  Power3 } from 'gsap';
import { Tween } from 'gsap/gsap-core';

function Circle() {
    const circleRedRef = useRef(null);
    const circleBlueRef=useRef(null)
    const [isHovered, setIsHovered] = useState(false);
    const [inner,setInnerhtml]=useState('')

    useEffect(() => {
        if (isHovered) {
            Tween.to(circleRedRef.current, 1, { scale: 7, ease: Power3.easeOut,rotate:360 });

            setInnerhtml(<div><p style={{color:'black', fontFamily:'-moz-initial'}}>WELCOME</p>
            <p style={{color:'gray', fontFamily:'-moz-initial'}}>To</p></div>);

        } else {
            Tween.to(circleRedRef.current, 1, { scale: 1, ease: Power3.easeInOut,rotate:-160});
        }
    }, [isHovered]);
    const handleClick = () => {
        // Handle click event
       
        // Tween.to(circleRedRef.current, 0.5, { scale: 10, ease: Power3.easeInOut });
    };

    const handleMouseEnter = () => {
        // Handle mouse enter event
        setIsHovered(true);
    };
    const handleMouseEnter2=()=>{
        Tween.to(
            circleBlueRef.current,
            2,
            {
              opacity:1,
              x:-550,
              ease:Power3.easeInOut,
              rotate:360,
              delay:1
            }
           )

    }

    const handleMouseLeave = () => {
        // Handle mouse leave event
        setIsHovered(false);
        setInnerhtml('')
    };

    return (
        <>
        <div onMouseEnter={handleMouseEnter2} style={{display:'flex',height:'1/2',margin:'150px'}}>
        <h1 style={{textAlign:'center'}}>Website</h1>
        <div
        ref={circleRedRef}
        style={{
            width: '100px',
            height: '100px',
            opacity: 1,
            background: 'white',
            borderRadius: '100%',
            cursor: 'pointer',
            display:'flex',
            justifyContent:'center',
            textAlign:'center'
        }}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {inner}
    </div>
    </div>
    <div  style={{background:'white',height:'1500px',width:'100vw', margin:'0'}}>
    <div
  ref={circleBlueRef}
    style={{
        width: '100px',
        height: '100px',
        opacity: 1,
        background: 'gray',
        borderRadius: '100%',
        cursor: 'pointer',
        display:'flex',
        justifyContent:'center'
        ,position:'absolute',
        top:'50%',
        left:'50%'
    }}
    
    >
    <div style={{width:'100%',background:'gray'}}>
    
    </div>
  
</div>
    
    </div>


    </>
    );
}

export default Circle;
