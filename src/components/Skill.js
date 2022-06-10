import React from 'react';
import html from '../assets/html5.jpg'
import css from '../assets/css3.png'
const Skill = () => {
    return (
        <div className='lg:w-[90%] xl:w-[90%] mx-auto'>
            <h2 className='text-center font-bold text-4xl mt-[-10px]'>My Skill</h2>
            <h4 className='text-center text-xl mb-8'>I have experienced in-</h4>
            <div className='grid grid-cols-5 lg:gap-5 gap-2'>
                <div class="card  bg-slate-800 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title lg:text-xl text-sm ">JavaScript</h2>
                    </div>
                </div>
                <div class="card  bg-slate-800 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title lg:text-xl text-sm ">React.js</h2>
                    </div>
                </div>
                <div class="card  bg-slate-800 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title lg:text-xl text-sm ">Express.js</h2>
                    </div>
                </div>
                <div class="card  bg-slate-800 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title lg:text-xl text-sm ">Node.js</h2>
                    </div>
                </div>
                <div class="card  bg-slate-800 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title lg:text-xl text-sm ">MongoDB</h2>
                    </div>
                </div>
                <div class="card  bg-slate-800 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title lg:text-xl text-sm ">Firebase</h2>
                    </div>
                </div>
                <div class="card  bg-slate-800 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title lg:text-xl text-sm ">HTML5</h2>
                    </div>
                </div>
                <div class="card  bg-slate-800 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title lg:text-xl text-sm ">CSS3</h2>
                    </div>
                </div>
                <div class="card  bg-slate-800 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title lg:text-xl text-sm ">Bootstrap</h2>
                    </div>
                </div>
                <div class="card  bg-slate-800 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title lg:text-xl text-sm ">Tailwind</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skill;