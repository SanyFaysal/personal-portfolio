import React from 'react';
import Typewriter from 'typewriter-effect';

const Intro = () => {
  return (
    <div className="h-full lg:flex justify-between items-center ">
      <div className="lg:w-[60%] md:w-[60%] text-justify my-auto">
        <h2 className="text-3xl font-bold text-white">Abu Sani Faysal</h2>
        <h4 className=" text-green-500 font-bold text-2xl lg:h-auto md:h-auto h-[10vh]">
          <Typewriter
            options={{
              strings: [
                'MERN stack Web Developer',
                'Full Stack developer',
                'Web Developer',
                'Frontend Developer',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h4>
        <p className="py-3 text-white text-xl">
          I'm a passionate
          <span className="text-lg font-bold mx-1 text-green-400">
            Full Stack MERN developer.
          </span>
          My core skills are based on JavaScript and I love to do most of the
          programme using JavaScript. I love to make the web more open to the
          world.
        </p>

        {/* <div className="w-full h-full">
          <div className="flex justify-start items-center mt-3 sticky top-5 ">
            <a
              href={resume}
              download="Abu Sani Faysal-frontend-developer-resume.pdf"
            >
              <button className="btn btn-md btn-ghost border-green-500 bg-none hover:border-green-500  ml-1 text-white text-sm">
                <DownloadIcon /> <span className="ml-1 ">Download Resume</span>
              </button>
            </a>
          </div>
        </div> */}
      </div>
      <div className="my-auto lg:pr-5 md:pr-5 lg:mt-0 md:mt-0 mt-4">
        <div>
          <h3 className="text-xl  text-white  border-b border-gray-700 shadow-lg   pb-2">
            <span className="font-bold"> Name</span> :{' '}
            <span className="font-semibold">Abu Sani Faysal</span>
          </h3>

          <h3 className="text-xl  text-white  border-b border-gray-700 mt-2 pb-2">
            <span className="font-bold">Email </span> :{' '}
            <span className="font-semibold text-green-500">
              abu.faysal002@gmail.com
            </span>
          </h3>

          <h3 className="text-xl  text-white  border-b border-gray-700 mt-2 pb-2 my-1">
            <span className="font-semibold"> Age </span> :{' '}
            <span className="font-semibold">22</span>
          </h3>

          <h3 className="text-xl  text-white  pb-2">
            <span className="font-bold">From </span> :{' '}
            <span className="font-semibold">Gazipur, Dhaka - Bangladesh</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Intro;
