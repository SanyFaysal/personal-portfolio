import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import clipt from '../assets/faysal.png';
import fb from '../assets/fb.png';
import github from '../assets/github_PNG53-removebg-preview.png';
import linkedin from '../assets/linkedin.png';
const Banner = () => {
  return (
    <div className="hero min-h-screen   lg:w-[90%] xl:w-[90%] mx-auto ">
      <div className="hero-content flex-col lg:flex-row-reverse mt-0 ">
        <div className="flex w-full justify-center items-center mt-0 ">
          <img
            src={clipt}
            className="max-w-screen-md mx-auto mt-[-60px] "
            alt=""
          />
        </div>
        <div className="w-full text-justify pt-5">
          <p className="text-2xl">Hi , This is</p>
          <h1 className="text-5xl font-bold text-green-500"> Faysal Ahmed </h1>
          <p className="py-6 lg:text-4xl text-2xl">
            I love to visualize ideas and make them live into websites
          </p>
          <div className="mx-auto">
            <a
              href="https://www.facebook.com/profile.php?id=100064072804665"
              className="btn btn-link text-red-500"
            >
              <img
                src={fb}
                className="w-8 bg-success rounded-full p-0"
                alt=""
              />
            </a>
            <a
              href="https://github.com/SanyFaysal"
              className="btn btn-link text-red-500"
            >
              <img
                src={github}
                className="w-8 bg-success rounded-full p-0"
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/in/foysal-ahmed-2b7ab0239/"
              className="btn btn-link text-red-500"
            >
              <img
                src={linkedin}
                className="w-8 bg-success rounded-full p-0"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
