import React, { useEffect, useState } from "react";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
const AboutNav = ({ scrolled, setScrolled }) => {
  const [active, setActive] = useState("introduction");

  const scroller = document?.getElementById("about_page");
  useEffect(() => {
    scroller?.addEventListener("scroll", (event) => {
      const offset = scroller.scrollTop;
      if (offset > 150) {
        setScrolled(true);
        console.log("scroller");
      } else {
        setScrolled(false);
        console.log("no scrolled");
      }
    });
  });
  const items = (
    <>
      {" "}
      <li className="">
        <a
          href="#introduction"
          className={`${
            active === "introduction" && "text-green-500"
          } mx-4 text-white`}
          onClick={() => setActive("introduction")}
        >
          Introduction
        </a>
      </li>
      <li>
        <a
          href="#skill"
          className={`${
            active === "skill" && "text-green-500"
          } mx-4 text-white`}
          onClick={() => setActive("skill")}
        >
          My Skill
        </a>
      </li>
      <li>
        <a
          href="#experience_achievement"
          className={`${
            active === "experience_achievement" && "text-green-500"
          } mx-4 text-white`}
          onClick={() => setActive("experience_achievement")}
        >
          Experience and Achievement
        </a>
      </li>
      <li>
        <a
          href="#education"
          className={`${
            active === "education" && "text-green-500"
          } mx-4 text-white`}
          onClick={() => setActive("education")}
        >
          Education
        </a>
      </li>
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
      className={`${
        scrolled ? "bg-slate-800 " : "bg-slate-900"
      } navbar my-[-10px]  sticky top-0 lg:pr-48 md:pr-48 pr-5 duration-400 rounded absolute`}
    >
      <div className="navbar flex justify-end">
        <div className="dropdown  dropdown-end">
          <label tabIndex={0} className="btn btn-ghost  lg:hidden">
            <MenuTwoToneIcon />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content  shadow bg-base-100 rounded-box "
          >
            {items}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex mx-auto">
        <ul className="menu menu-horizontal p-0">{items}</ul>
      </div>
    </div>
  );
};

export default AboutNav;
