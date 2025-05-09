import React from 'react';
import './optimize.css';
import AI from './Assets/Ai.png';
import Opt from './Assets/Optimize.png';

const Optimize = () => {

    return(
        <>
            <section className='optimize'>
                <div className='ai-content'>
                    <div className='ai-text'>
                        <h1>Free AI cover letter generator powered by GPT</h1>
                        <p>A free AI cover letter generator powered by GPT is a tool that uses artificial intelligence and natural language processing to help job seekers create customized and effective cover letters.</p>
                        <button>Try For free Now</button>
                    </div>
                    <img src={AI} alt='ai'/>
                </div>
                <div className='optimize-content'>
                    <div className='optimize-text'>
                        <h1>Optimize the keywords in your resume</h1>
                        <p>By optimizing keywords in your resume, you can increase your chances of getting noticed by recruiters and landing interviews for the jobs you want.</p>
                        <button className='optimize-btn'>Optimize your Resume</button>
                    </div>
                    <img src={Opt} alt='opt' className='opt'/>
                </div>
            </section>
        </>
    );
};

export default Optimize;