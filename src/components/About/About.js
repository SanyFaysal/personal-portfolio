import React, { useEffect, useState } from "react";

import AnimatedPage from "../Home/AnimatedPage";
import Intro from "./Intro";
import Title from "../Shared/Title";

import "../../style/style.css";
import Skill from "./Skill";
import Experience from "./Experience";
import Education from "./Education";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

import DownloadIcon from "@mui/icons-material/Download";
import resume from "../../assets/Abu Sani Faysal-fullstack-developer-resume.pdf";
import { IconButton } from "@mui/material";
import AboutNav from "./AboutNav";

const About = () => {
  const [scrolled, setScrolled] = useState(false);

  return (
    <div
      className="about_page w-[100%] h-[100%] relative overflow-x-hidden "
      id="about_page"
    >
      <AnimatedPage>
        <AboutNav scrolled={scrolled} setScrolled={setScrolled} />

        <div className="lg:px-16 md:px-16 px-5 w-full h-full mx-auto mt-8">
          {/* title  */}
          <p id="introduction" className=""></p>

          <Title title="ABOUT" upTitle="About Me" />
          {/*introduction of details  info */}
          <Intro />
          <a
            href={resume}
            download="Abu Sani Faysal-fullstack-developer-resume.pdf"
            className="sticky mt-2  top-0  inline-block"
          >
            <button className="btn  lg:btn-md md:btn-md btn-sm my-auto btn-ghost border-sky-500 bg-gray-800 hover:border-sky-500 hover:bg-gray-900 ml-1 text-white text-sm">
              <DownloadIcon />{" "}
              <span className="ml-1 ">
                <span className="hidden md:inline lg:inline ">Download</span>{" "}
                Resume
              </span>
            </button>
          </a>
          <p id="skill" className="lg:mb-28 md:mb-28"></p>
          <Skill />
          <p id="experience_achievement" className="lg:mb-28 md:mb-28"></p>
          <Experience />
          <p id="education" className="lg:mb-28 md:mb-28"></p>
          <Education />
          <div className="flex justify-center mb-10">
            <Link to="/projects">
              <button
                className="hover:text-sky-500 hover:border-white duration-500 border-[1.5px] text-xl hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none  text-white border-sky-500 mt-8 px-4  py-1 flex items-center rounded-pill"
                style={{ borderRadius: "30px" }}
              >
                <span className="mr-2"> See My Projects</span>
                <KeyboardDoubleArrowRightIcon size="large" />
              </button>
            </Link>
          </div>
        </div>
        <div className="sticky bottom-5  flex justify-center ">
          {scrolled && (
            <a href="#introduction" className="cursor-pointer">
              <IconButton aria-label="delete" size="medium">
                <KeyboardDoubleArrowUpIcon
                  size="large"
                  className="text-2xl text-sky-500"
                />
              </IconButton>
            </a>
          )}
        </div>
      </AnimatedPage>
    </div>
  );
};

export default About;
