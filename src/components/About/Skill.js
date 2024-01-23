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
            <span className="inline-block mt-[-16px]   text-white px-3 py-1  border-[1px] rounded-t-lg  border-sky-900 border-dotted border-b-0 text-xl text-gray-300 ">
              Frontend Development
            </span>
          </div>
          <div className="w-full  grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-10 px-4  border-[1px] rounded-lg  border-sky-900 border-dotted">
            <div className="shadow-md rounded-lg  shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-[lightcoral]">HTML</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-success">CSS</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-secondary">Bootstrap</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-[rosybrown]">Tailwind</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-[mediumslateblue]">
                Material UI
              </p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-[darkturquoise]">Daisy UI</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-[yellowsky]">Javascript</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-blue-500">React Js</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-purple-500">Typescript</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-slate-300">Next Js</p>
            </div>

            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-[khaki]">Vue Js</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-[hotpink]">Vuex</p>
            </div>
          </div>
          <div className=" lg:mt-10 md:mt-10 mt-7 mb-[-1px]">
            <span className="inline-block mt-[-16px] text-white  px-3 py-1  border-[1px] rounded-t-lg  border-sky-900 border-dotted border-b-0 text-xl text-gray-300 ">
              Backend Development
            </span>
          </div>
          <div className="w-full  grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-10 px-4  border-[1px] rounded-lg  border-sky-900 border-dotted">
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold text-sky-500 ">Node Js</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold text-secondary">Express Js</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-blue-300">MongoDB</p>
            </div>
            <div className="shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500">
              <p className="my-4 font-bold  text-orange-300">Mongoose</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
