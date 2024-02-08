import React, { useRef, useEffect, useState } from 'react';
import {  Power3 } from 'gsap';
import { Tween } from 'gsap/gsap-core';

function Circle() {
    const circleRedRef = useRef(null);
    const circleBlueRef=useRef()
    const [isHovered, setIsHovered] = useState(false);
    const [inner,setInnerhtml]=useState('')

    useEffect(() => {
        if (isHovered) {
            Tween.to(circleRedRef.current, 0.8, { scale: 7, ease: Power3.easeOut });

            setInnerhtml(<p style={{color:'white', fontFamily:'-moz-initial'}}>WELCOME</p>);

        } else {
            Tween.to(circleRedRef.current, 0.5, { scale: 1, ease: Power3.easeInOut });
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


    }

    const handleMouseLeave = () => {
        // Handle mouse leave event
        setIsHovered(false);
        setInnerhtml('')
    };

    return (
        <>
        <div
        ref={circleRedRef}
        style={{
            width: '100px',
            height: '100px',
            opacity: 1,
            background: 'red',
            borderRadius: '100%',
            cursor: 'pointer',
            display:'flex',
            justifyContent:'center'
        }}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {inner}
    </div>
    <div
   ref={circleBlueRef}
    style={{
        width: '100px',
        height: '100px',
        opacity: 1,
        background: 'blue',
        borderRadius: '100%',
        cursor: 'pointer'
    }}
    onMouseEnter={handleMouseEnter2}
   >
</div>

        </>
      
    );
}

export default Circle;
