import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import StorageIcon from "@mui/icons-material/Storage";
import CodeIcon from "@mui/icons-material/Code";

import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Title from "../Shared/Title";
import { Link, useParams } from "react-router-dom";
import projectsData from "../../data/projectsData";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState();

  useEffect(() => {
    const findProject = projectsData?.find(
      (project) => project?.id === id && project
    );
    setProject(findProject);
  }, [id]);

  return (
    <div
      className="w-[100%] h-[100%]
      relative overflow-x-hidden lg:px-16 md:px-16 px-4 "
    >
      <Title title="PROJECT DETAILS" upTitle="Project Details" />
      <div className=" my-8 z-[99] text-white grid lg:grid-cols-2 ">
        <div>
          <div className="">
            <h1 className=" flex gap-3 items-center text-4xl">
              {project?.title}
              <span className=" text-2xl mt-1 text-yellow-500">
                ( {project?.subTitle})
              </span>
            </h1>
          </div>
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
                  <button className="badge badge-sm bg-sky-600  m-1 ">
                    {tech}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex ">
              <h2 className="mr-2 font-semibold text-sky-500">Backend </h2>
              <div className="">
                {project?.backendTechnology?.map((tech) => (
                  <button className="badge badge-sm bg-sky-600  m-1 ">
                    {tech}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex ">
              <h2 className="mr-2 font-semibold text-sky-500">Database </h2>
              <div className="">
                {project?.database?.map((tech) => (
                  <button className="badge badge-sm bg-sky-600  m-1 ">
                    {tech}
                  </button>
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
        </div>
        <div>
          <img src={project?.img} className="w-full h-full rounded" />
        </div>
      </div>
      <div className=" my-8 z-[99] text-white  ">
        <h3 className="text-xl font-semibold my-3"></h3>
        <div>{project?.keyFeatures} </div>
        <div className="mt-5">{project?.details} </div>
      </div>
      <div className="flex justify-center mb-12 mt-8">
        <Link to="/projects">
          <button
            className=" hover:border-white duration-500 border-[1.5px] text-xl hover:text-sky-500  hover:translate-x-[-8px] motion-reduce:transition-none motion-reduce:hover:transform-none  text-white border-sky-500 mt-8 px-4  py-1 flex items-center rounded-pill"
            style={{ borderRadius: "30px" }}
          >
            <KeyboardDoubleArrowLeftIcon size="large" />
            <span className="mr-2">Go Back</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
