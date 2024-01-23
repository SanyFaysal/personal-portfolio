import React from "react";

const Title = ({ title, upTitle }) => {
  return (
    <div className="mb-16">
      <h1 className="lg:text-[100px] md:text-[80px] text-[65px] text-white font-bold text-center opacity-[0.1]">
        {title}
      </h1>
      <h1 className="lg:text-4xl md:text-4xl text-3xl text-center font-bold lg:mt-[-95px] md:mt-[-85px] sm:mt-[-70px] mt-[-70px] text-white">
        {upTitle}
      </h1>
      <div className="flex justify-center items-center">
        <div className=" border-2 border-sky-500  rounded-xl w-20   inline-block"></div>
      </div>
    </div>
  );
};

export default Title;
