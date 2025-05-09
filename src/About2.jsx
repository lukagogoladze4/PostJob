import React from 'react';
import './About2.css';
import Letter from './Assets/info-cards/1.png';

const About2 = () => {
    return(
        <>
            <section className='About2'>
                <div className='about2-text'>
                    <h1>Spend less time looking for work</h1>
                    <p>We'll help you through the hardest part of your job search.</p>
                    <button>Create an Account</button>
                </div>
                <div className='info-cards1'>

                    <div className='info'>
                        <img src={Letter} alt='letter'/>
                        <h2>AI Cover Letter Generator</h2>
                        <p>The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants.</p>
                    </div>
                    <div className='info'>
                        <img src={Letter} alt='letter1'/>
                        <h2>AI Cover Letter Generator</h2>
                        <p>The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants.</p>
                    </div>
                    <div className='info'>
                        <img src={Letter} alt='letter2'/>
                        <h2>AI Cover Letter Generator</h2>
                        <p>The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants.</p>
                    </div>
                    <div className='info'>
                        <img src={Letter} alt='letter3'/>
                        <h2>AI Cover Letter Generator</h2>
                        <p>The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants.</p>
                    </div>
                    <div className='info'>
                        <img src={Letter} alt='letter4'/>
                        <h2>AI Cover Letter Generator</h2>
                        <p>The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants.</p>
                    </div>
                    <div className='info'>
                        <img src={Letter} alt='letter5'/>
                        <h2>AI Cover Letter Generator</h2>
                        <p>The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About2;