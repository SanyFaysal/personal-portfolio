import { useState } from "react";
import Title from "../Shared/Title";
import Modal from "./Modal";
import Project from "./Project";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link } from "react-router-dom";
import projectsData from "../../data/projectsData";

const Projects = () => {
  const projects = projectsData;

  return (
    <div className="w-[100%] h-[100%] relative overflow-x-hidden lg:px-16 md:px-16 px-4">
      <Title title="PORTFOLIO" upTitle="My Projects"></Title>
      <div className="">
        {projects.map((project) => (
          <Project project={project} key={project?.id} />
        ))}
      </div>

      <div className="flex justify-center mb-12 mt-8">
        <Link to="/contact">
          <button
            className=" hover:border-white duration-500 border-[1.5px] text-xl hover:text-sky-500  hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none  text-white border-sky-500 mt-8 px-4  py-1 flex items-center rounded-pill"
            style={{ borderRadius: "30px" }}
          >
            <span className="mr-2"> Contact With Me</span>
            <KeyboardDoubleArrowRightIcon size="large" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
