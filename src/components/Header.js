import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../assets/Abu Sani Faysal-frontend-developer-resume.pdf'
const Header = () => {
    const menu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='#skill'>Skill</Link></li>
        <li><Link to='#projects'>Projects</Link></li>
        <li><Link to='#contact'>Contact</Link></li>
    </>


    return (
        <div>
            <div class="navbar lg:w-[90%] xl:w-[90%] mx-auto ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-700 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link to='/' class="btn btn-ghost normal-case text-xl">Faysal<span className='text-success'>Ahmed</span></Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                <div class="navbar-end">
                    <a href={resume} download="Abu Sani Faysal-frontend-developer-resume.pdf" class="text-white btn btn-sm">Download Resume</a>
                    {/* <Link to={resume} download >Download Resume</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Header;