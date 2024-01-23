import { IconButton } from "@mui/material";
import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import StorageIcon from "@mui/icons-material/Storage";
import CodeIcon from "@mui/icons-material/Code";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const Project = ({ project, setSelectedProject }) => {
  return (
    <>
      <div className="grid  lg:grid-cols-2 sm:grid-cols-1 mid:grid-cols-2 my-5 py-5 text-white">
        <div className="lg:order-1 order-2 ">
          <h1 className="text-white text-2xl mt-5">
            Project Name :{" "}
            <span className="text-sky-500 font-bold">{project.title}</span>
            <span className="text-sm font-bold ml-2 text-yellow-500">
              {project.subTitle}
            </span>
          </h1>
          <div className="flex ">
            <a href={project?.liveSite} className="mr-3">
              Live site
              <IconButton aria-label="delete" size="medium">
                <OpenInNewIcon fontSize="small" className="text-white" />
              </IconButton>
            </a>
            <a href={project?.clientSiteCode} className="mr-3">
              Client Site Code
              <IconButton aria-label="delete" size="medium">
                <CodeIcon fontSize="medium" className="text-white" />
              </IconButton>
            </a>

            <a href={project?.serverSiteCode} className="">
              Server Site Code
              <IconButton aria-label="delete" size="medium">
                <StorageIcon fontSize="medium" className="text-white" />
              </IconButton>
            </a>
          </div>
          <div className="mt-3">
            <h2 className="text-white block text-xl mb-2">Technologies </h2>
            <div className="flex ">
              <h2 className="mr-2 font-semibold text-sky-500">Frontend </h2>
              <div className="">
                {project?.frontendTechnology?.map((tech) => (
                  <button className="badge badge-sm  m-1 ">{tech}</button>
                ))}
              </div>
            </div>
            <div className="flex ">
              <h2 className="mr-2 font-semibold text-sky-500">Backend </h2>
              <div className="">
                {project?.backendTechnology?.map((tech) => (
                  <button className="badge badge-sm  m-1 ">{tech}</button>
                ))}
              </div>
            </div>
            {project?.others?.length && (
              <div className="flex mt-3">
                <h2 className="mr-2 font-semibold">Others </h2>
                <div className="">
                  <button className="badge badge-sm m-1 ">Stripe Js</button>
                </div>
              </div>
            )}
          </div>
          <label
            htmlFor="my-modal-6"
            className="text-magenta-400 font-semibold inline-block  text-white rounded  my-5 hover:translate-x-1 hover:border-sky-500 hover:text-sky-500 motion-reduce:transition-none motion-reduce:hover:transform-none  duration-500"
            onClick={() => setSelectedProject(project)}
          >
            <span className="mr"> Read Details</span>
            <KeyboardDoubleArrowRightIcon size="large" />
          </label>
        </div>

        <a
          href={project?.liveSite}
          className="h-[35vh] lg:order-2 order-1 w-[65vh]  m-auto "
        >
          <img
            src={project?.img}
            alt=""
            className=" rounded-lg shadow border border-white shadow-base-500"
          />
        </a>
      </div>
      <div className="py-[0.5px] bg-[#24365a]" />
    </>
  );
};

export default Project;
