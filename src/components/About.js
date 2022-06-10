import React from 'react';
import clipt from '../assets/about.png'
const About = () => {
    return (
        <>
            <h1 class="text-4xl font-bold text-center mt-[-30px]">About Me</h1>
            <div class="divider">Who I am !</div>
            <div class="hero min-h-screen   lg:w-[90%] xl:w-[90%] mx-auto  mt-[-50px] ">
                <div class="hero-content flex-col lg:flex-row justify-between">
                    <img src={clipt} alt='' />
                    <div className='text-justify '>
                        <h2 className='text-3xl font-bold '>Faysal Ahmed</h2>
                        <h4 className=' text-green-500 font-bold'> Frontend Developer</h4>
                        <p class="py-6"> I loved designing things, so I started designing websites to improve my skills. This meant that I had to create something new every week, which was a little better for each project.
                            I've heard of WordPress before, but I haven't really looked into it. It all changed when we decided it was time to expand our skill set to realize our website design project.</p>
                        <button class="btn btn-success text-white font-bold">Hire Me</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;