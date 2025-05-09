import React from 'react';
import './About1.css';
import Overlay from './Assets/Overlay.png';
const About1 = () => {
    return(
        <>
            <section className='About1'>
                <h2>Submit Better job applications</h2>
                <h1>10x faster</h1>
                <p>AI cover letter generator, resume keyword checker, outreach message writer, and more. Powered by GPT</p>
                <img src={Overlay} alt='overlay'/>
            </section>
        </>
    );
};

export default About1;