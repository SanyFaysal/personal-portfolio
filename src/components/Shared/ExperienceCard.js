import React from "react";

export default function ExperienceCard() {
  return (
    <div className="lg:flex md:flex justify-between items-center mt-5">
      <div className=" lg:w-[55%] md:w-[55%] text-start my-8 text-justify ">
        <h1 className="text-2xl font-bold text-white">
          <span className="text-sky-500 block">
            Successfully Completed Internship{" "}
          </span>
          Full stack Web Development
        </h1>
        <p className="text-thin text-italic  text-white">
          Brain Quest Consultancy and Training - UAE
        </p>
        <p className=" text-sm  italic text-white">
          11 August, 2022 - 16 November, 2022{" "}
        </p>
        <div className="mt-4 text-white">
          <p>
            <span className="text-blue-500">
              {" "}
              <CheckCircleIcon />
            </span>{" "}
            Worked with a team to implement the Frontend functions and pixel
            perfect UI from figma design
          </p>{" "}
          <br />
          <p className="">
            <span className="text-blue-500">
              <CheckCircleIcon />
            </span>{" "}
            Worked with another team of MERN to implement the Frontend functions
            and API integrations in ExpressJs, Authentication, Authorizations ,
            MongoDB Database with Mongoose .
          </p>{" "}
          <br />{" "}
          <p className=" ">
            <span className="font-bold text-blue-500 mr-1">
              {" "}
              <CheckCircleIcon />
            </span>
            <span className="font-bold text-lg mr-1">Used Technologies :</span>
            <span>
              Vue Js, Vuex, Vuexy Component , React Js, Node Js, Express JS,
              MongoDB, Mongoose
            </span>
          </p>
        </div>
      </div>
      <div className=" mx-auto">
        <img
          src={experience}
          className="h-[40vh] w-[210px] mx-auto w-full border-sky-500 border rounded"
          alt=""
        />
        <a
          href="https://drive.google.com/file/d/1VWqoDEfelkAaFyydWKQ2NUjtSW5Syteh/view?usp=sharing"
          className=" border-gray-600  flex justify-center px-1 text-white rounded  mt-3 hover:translate-x-1 hover:border-sky-500 hover:text-sky-500 motion-reduce:transition-none motion-reduce:hover:transform-none  duration-500 mx-auto "
        >
          <span className="mr-1 "> View Experience Letter</span>
          <KeyboardDoubleArrowRightIcon size="large" />
        </a>
      </div>
    </div>
  );
}
