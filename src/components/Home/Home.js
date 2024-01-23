import React from "react";

import faysal from "../../assets/faysal.png";
import "../../style/style.css";
import AnimatedPage from "./AnimatedPage";
import Typewriter from "typewriter-effect";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link } from "react-router-dom";
const Home = ({ light }) => {
  return (
    <div className="w-[100%] h-[100%] flex justify-center items-center">
      <AnimatedPage>
        <div className="lg:w-[900px]  my-auto  grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <div
            className={`rounded-full lg:h-[318px]  md:h-[308px] md:w-[290px] lg:w-[300px] h-[283px] w-[265px] mx-auto  border-[20px] ${
              !light ? "border-white" : "border-[#2a3f68]"
            } `}
          >
            <img
              src={faysal}
              alt=""
              className=" h-full w-full rounded-full bg-none "
            />
          </div>

          <div className="my-auto mx-auto lg:w-[450px] md:w-[450px]">
            <h3 className="text-2xl text-white font-bold"> I'm </h3>
            <h1 className="lg:text-[3rem] text-[2rem]   font-bold outline-success text-white">
              Abu Sani Faysal
            </h1>
            <h2 className="lg:text-4xl md:text-3xl sm:text-2x text-[20px] font-bold text-sky-500 mt-[5px] w-full  h-[30px] designation  ">
              <Typewriter
                options={{
                  strings: [
                    "MERN stack Developer",
                    "Full Stack developer",
                    "Web Developer",
                    "Frontend Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>

            <Link to="/about">
              <button
                className="hover:text-sky-500  hover:border-white duration-500 border-[1.5px]  text-xl   hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none  text-white border-sky-500 mt-10 px-4  py-1 flex items-center rounded-pill"
                style={{ borderRadius: "30px" }}
              >
                <span className="mr-2"> More About Me</span>
                <KeyboardDoubleArrowRightIcon size="large" />
              </button>
            </Link>
          </div>
        </div>
      </AnimatedPage>
    </div>
  );
};

export default Home;
