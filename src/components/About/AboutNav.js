import React, { useEffect, useState } from "react";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
const AboutNav = ({}) => {
  const [active, setActive] = useState("introduction");
  const [scrolled, setScrolled] = useState(0);

  const items = (
    <>
      {" "}
      <a
        href="#introduction"
        className={`${active === "introduction" && "text-sky-500"} mx-4`}
        onClick={() => setActive("introduction")}
      >
        Introduction
      </a>
      <a
        href="#skill"
        className={`${active === "skill" && "text-sky-500"} mx-4`}
        onClick={() => setActive("skill")}
      >
        My Skill
      </a>
      <a
        href="#experience_achievement"
        className={`${
          active === "experience_achievement" && "text-sky-500"
        } mx-4 `}
        onClick={() => setActive("experience_achievement")}
      >
        Experience and Achievement
      </a>
      <a
        href="#education"
        className={`${active === "education" && "text-sky-500"} mx-4 `}
        onClick={() => setActive("education")}
      >
        Education
      </a>
    </>
    // <div
    //   className={`${
    //     scrolled ? 'bg-slate-800' : 'bg-transparent'
    //   } sticky top-0  px-5 duration-400 rounded absolute bg-transparent`}
    //   id="about_nav"
    // >
    //   <ul className="flex justify-center py-6">

    //   </ul>
    // </div>
  );
  return (
    <div
      className={`navbar my-[-10px] h-2 sticky top-0 backdrop-blur-md 	 duration-400 rounded `}
    >
      <div className="navbar ml-12 mr-16">
        <div className="dropdown  dropdown-end text-white">
          <label tabIndex={0} className="btn btn-ghost text-white  lg:hidden">
            <MenuTwoToneIcon />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content flex flex-col gap-2 w-[200px]  shadow bg-base-100 text-black p-5 rounded-box  "
          >
            {items}
          </ul>
        </div>

        <div className="navbar-start hidden  lg:flex ">
          <p className="text-white ml-3">Who am I ..?</p>
        </div>
      </div>
      <div className="navbar-end hidden  lg:flex mr-28 ">
        <ul className="menu menu-horizontal text-white ">{items}</ul>
      </div>
    </div>
  );
};

export default AboutNav;
