import React from "react";
import "../../style/style.css";

const Skill = () => {
  return (
    <div className="mt-14">
      <h1 className="text-3xl text-center font-bold text-white">
        My Skill Sets{" "}
      </h1>
      <div className="flex justify-center items-center">
        <div className=" border-2 border-sky-500  rounded-xl w-20   inline-block"></div>
      </div>
      <div className=" w-full my-6">
        <p className="py-2 ml-2 text-xl  lg:text-center md:text-center text-white">
          I enjoy diving into and learning new things. Here's a list of
          technologies I've worked with :
        </p>
      </div>
      <div className="">
        <div className=" mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className=" lg:mt-10 md:mt-10 mb-[-1px]">
            <span className="inline-block mt-[-16px]    px-3 py-1  border-[1px] rounded-t-lg  border-sky-900 border-dotted border-b-0 text-xl text-gray-300 ">
              Frontend Development
            </span>
          </div>
          <div className="w-full  grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-10 px-4  border-[1px] rounded-lg  border-sky-900 border-dotted">
            <div className="shadow-md rounded-lg  shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-[white]">NextJs</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-success">React Js</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-secondary">Redux Toolkit</p>
            </div>

            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-[mediumslateblue]">
                UI Libraries
              </p>
            </div>

            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-[yellow]">Javascript</p>
            </div>

            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-purple-500">Typescript</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-sky-500">Tailwind</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-orange-500">Bootstrap</p>
            </div>
          </div>
          <div className=" lg:mt-10 md:mt-10 mt-7 mb-[-1px]">
            <span className="inline-block mt-[-16px] text-white  px-3 py-1  border-[1px] rounded-t-lg  border-sky-900 border-dotted border-b-0 text-xl text-gray-300 ">
              Backend Development
            </span>
          </div>
          <div className="w-full  grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-10 px-4  border-[1px] rounded-lg  border-sky-900 border-dotted">
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold text-green-400 ">Node Js</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold text-secondary">Express Js</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-green-600">MongoDB</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-orange-500">Mongoose</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold text-white ">Prisma</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold text-sky-500">TypeScript</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-red-400">SQL</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-purple-500">PostgreSQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
