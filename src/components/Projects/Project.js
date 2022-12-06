import { IconButton } from '@mui/material';
import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const Project = ({ project, setSelectedProject }) => {
  return (
    <>
      <div className="grid  lg:grid-cols-2 sm:grid-cols-1 mid:grid-cols-2 my-5 py-5 text-white">
        <div className="lg:order-1 order-2 ">
          <h1 className="text-white text-2xl mt-5">
            Project Name :{' '}
            <span className="text-green-500 font-bold">{project.title}</span>
          </h1>
          <div className="flex ">
            <button className="mr-3">
              Live site
              <IconButton aria-label="delete" size="medium">
                <OpenInNewIcon fontSize="small" className="text-white" />
              </IconButton>
            </button>
            <button className="mr-3">
              Client Site Code
              <IconButton aria-label="delete" size="medium">
                <CodeIcon fontSize="medium" className="text-white" />
              </IconButton>
            </button>

            <button className="">
              Server Site Code
              <IconButton aria-label="delete" size="medium">
                <StorageIcon fontSize="medium" className="text-white" />
              </IconButton>
            </button>
          </div>
          <div className="mt-3">
            <h2 className="text-white block text-xl mb-2">Technologies </h2>
            <div className="flex ">
              <h2 className="mr-2 font-semibold">Frontend </h2>
              <div className="">
                <button className="badge badge-sm  m-1 ">React Js</button>
                <button className="badge badge-sm m-1 ">
                  React Router Dom
                </button>

                <button className="badge badge-sm m-1 ">Tailwind CSS</button>
                <button className="badge badge-sm m-1">Daisy UI</button>
                <button className="badge badge-sm m-1">React Toastify</button>
              </div>
            </div>
            <div className="flex ">
              <h2 className="mr-2 font-semibold">Backend </h2>
              <div className="">
                <button className="badge badge-sm m-1 ">Node Js</button>
                <button className="badge badge-smm-1 ">Express JS</button>
                <button className="badge badge-sm m-1 ">MongoDB</button>
                <button className="badge badge-sm m-1 ">Mongoose</button>
              </div>
            </div>
            <div className="flex mt-3">
              <h2 className="mr-2 font-semibold">Others </h2>
              <div className="">
                <button className="badge badge-sm m-1 ">Stripe Js</button>
              </div>
            </div>
          </div>
          <label
            htmlFor="my-modal-6"
            className="text-magenta-400 font-semibold inline-block  text-white rounded  my-5 hover:translate-x-1 hover:border-green-500 hover:text-green-500 motion-reduce:transition-none motion-reduce:hover:transform-none  duration-500"
            onClick={() => setSelectedProject(project)}
          >
            <span className="mr"> Read More</span>
            <KeyboardDoubleArrowRightIcon size="large" />
          </label>
        </div>

        <img
          src={project?.img}
          alt=""
          className="h-[35vh] lg:order-2 order-1 w-[65vh] m-auto rounded-lg shadow shadow-base-500"
        />
      </div>
      <div className="py-[0.5px] bg-[#24365a]" />
    </>
  );
};

export default Project;
