import React from 'react';
import Logo from './Assets/Logo.png';
import Radio from './Assets/info-cards/radio.png';
import Maximize from './Assets/info-cards/maximize.png';
import Letter from './Assets/info-cards/1.png';
import './Hero.css';
const Hero = () => {
    return(
        <>
            <header>
                <div className='navigation'>
                    <img src={Logo} alt='Logo'/>
                    <nav>
                        <ul>
                            <li>AI Cover Letter Generator</li>
                            <li>Resume Template</li>
                            <li>Pricing</li>
                        </ul>
                    </nav>
                </div>
                <div className='header-button'>
                    <button className='sign-button'>Sign In</button>
                    <button className='get-button'>Get Started</button>
                </div>
            </header>
            <section className='hero'>
                <div className='main-hero'>
                    <h1> <span style={{ color: '#6DE754' }}>Win your dream job</span> with PostJob</h1>
                    <p className='hero-p'>Submit better job app — 10x faster. AI cover letter generator, resume keyword checker, outreach message writer, and more. Powered by GPT</p>
                    <div className='email-section'>
                        <input placeholder='Your Email'></input>
                        <button>Start For Free</button>
                    </div>
                </div>
                <div className='info-cards'>
                    <div className='info'>
                        <img src={Letter}/>
                        <h2>AI Cover Letter Generator</h2>
                        <p>The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants.</p>
                    </div>
                    <div className='info'>
                        <img src={Radio} alt='Radio'/>
                        <h2>Smart Personalization</h2>
                        <p>Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users.</p>
                    </div>
                    <div className='info'>
                        <img src={Maximize} alt='maximize'/>
                        <h2>Resume Scanner</h2>
                        <p>A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data from resumes.</p>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Hero;