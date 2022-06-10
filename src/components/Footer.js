import React from 'react';
import fb from '../assets/fb.png'
import github from '../assets/github_PNG53-removebg-preview.png'
import linkedin from '../assets/linkedin.png'
const Footer = () => {
    return (
        <footer class="footer footer-center p-10 bg-slate-800 text-primary-content">
            <div>

                <p class="font-bold">
                    Faysal Ahmed
                    <span className='block text-success'>
                        Frontend Developer
                    </span>
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
            <div>
                <div class="grid grid-flow-col ">
                    <a href='https://www.facebook.com/profile.php?id=100064072804665' className='btn btn-link text-red-500'>
                        <img src={fb} className='w-8 bg-success rounded-full p-0' alt="" />
                    </a>
                    <a href='https://github.com/SanyFaysal' className='btn btn-link text-red-500'>
                        <img src={github} className='w-8 bg-success rounded-full p-0 ' alt="" />
                    </a>
                    <a href='https://www.linkedin.com/in/foysal-ahmed-2b7ab0239/' className='btn btn-link text-red-500'>
                        <img src={linkedin} className='w-8 bg-success rounded-full p-0' alt="" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;