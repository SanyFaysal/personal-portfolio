import React from "react";

const Education = () => {
  return (
    <div className="lg:my-14 my-10 mx-auto ">
      <h1 className="text-3xl text-center font-bold text-white">
        Educational Background
      </h1>
      <div className="flex justify-center items-center">
        <div className=" border-2 border-sky-500  rounded-xl w-20   inline-block"></div>
      </div>
      <div className="mt-14 mr-auto lg:w-[45%] md:w-[45%] border-l border-sky-500 border-l-4 pl-2 rounded">
        <h1 className="text-2xl font-semibold text-white">
          <span className="">BSc. in Mathematics</span>
          <br />
        </h1>
        <p className="text-thin  text-white">
          Bhawal Bodre Alam Govt. College University - Gazipur, Dhaka
        </p>
        <p className="text-thin  text-white italic">From 2022 - Present</p>
      </div>
      <div className="mt-14 mx-auto lg:w-[45%] md:w-[45%] border-l border-sky-500 border-l-4 pl-2  rounded">
        <h1 className="text-2xl font-semibold text-white">
          <span className="">HSC - Science</span>
          <br />
        </h1>
        <p className="text-thin  text-white">
          Bhawal Bodre Alam Govt. College - Gazipur, Dhaka
        </p>
        <p className=" text-white italic">From July, 2019 - December, 2021 </p>
      </div>
      <div className="mt-14 ml-auto lg:w-[45%] md:w-[45%] border-l border-sky-500 border-l-4 pl-2  rounded">
        <h1 className="text-2xl font-semibold text-white">
          <span className="">SSC - Science</span>
          <br />
        </h1>
        <p className="text-thin  text-white">
          Potabari Adarsho High School - Sreepur, Gazipur
        </p>
        <p className=" text-sm text-white  italic">
          January, 2007 - March, 2019{" "}
        </p>
      </div>
    </div>
  );
};

export default Education;
