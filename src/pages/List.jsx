import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const sections = [
    {
        title: 'title 1',
        subtitle: 'subtitle 1'
    },
    {
        title: 'title 2',
        subtitle: 'subtitle 2'

    },
    {
        title: 'title 1',
        subtitle: 'subtitle 3'
    }
];

function List() {
    const revielRef = useRef([]);

    useEffect(() => {
        revielRef.current.forEach((el, index) => {
            gsap.fromTo(el, { autoAlpha: 0 }, {
                duration: 1,
                autoAlpha: 2,
                ease: 'none',
                scrollTrigger: {
                    id: `section-${index + 1}`,
                    trigger: el,
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse'
                }
            });
        });

    }, []);

    const addToRef = (el) => {
        if (el && !revielRef.current.includes(el)) {
            revielRef.current.push(el);
        }
    };

    return (
        <div>
            <div style={{ background: 'white', height: '900px', width: '100vw' }}></div>
            {sections.map((section, index) => (
                <div ref={addToRef} key={index} style={{ backgroundColor: 'gray', height: '200px', margin: '100px', textAlign: 'center' }}>
                    <h2>{section.title}</h2>
                    <h3>{section.subtitle}</h3>
                </div>
            ))}
        </div>
    );
}

export default List;
