import experience from "../../assets/experience.png";
import certificate from "../../assets/certificate.png";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export default function ExperienceCard({ experience }) {
  return (
    <div className="lg:flex md:flex justify-between items-center mt-5">
      <div className=" lg:w-[55%] md:w-[55%]  my-8 text-justify ">
        <h1 className="text-2xl  text-white ">
          <span className="text-sky-500 block font-bold ">
            {experience?.title}
          </span>

          <span className="text-bold"> {experience?.designation}</span>
        </h1>
        <p className="text-thin text-italic  text-white">
          {experience?.company}
        </p>
        <p className=" text-sm  italic text-white">{experience?.duration}</p>
        <div className="mt-4 text-white">
          {experience?.points?.map((point) => (
            <p>
              <span className="text-sky-500">
                {" "}
                <CheckCircleIcon />
              </span>{" "}
              {point}
            </p>
          ))}

          <div className=" ">
            <span className="font-bold text-sky-500 mr-1">
              {" "}
              <CheckCircleIcon />
            </span>
            <span className="font-bold text-lg mr-1">Used Technologies :</span>
            {experience?.technologies?.map((tech) => (
              <button className="badge badge-sm bg-sky-600  m-1 ">
                {tech}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className=" mx-auto">
        <img
          src={experience}
          className="h-[40vh] w-[210px] mx-auto  border-sky-500 border rounded"
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
