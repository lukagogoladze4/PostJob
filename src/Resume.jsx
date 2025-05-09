import React from 'react';
import Res from './Assets/resume.png';
import './Resume.css';

const Resume = () => {
    return (
        <>
           <section className='resume'>
                <div className='resume-text'>
                    <h1>Free resume design templates</h1>
                    <p>By following these design tips, you can create a professional and effective resume that will help you stand out to recruiters and hiring managers.</p>
                    <button className='resume-btn'>Create an Account</button>
                </div>
                <img src={Res} alt='Resume' className='resume-image'/>
            </section>
        </>
    );
};

export default Resume;