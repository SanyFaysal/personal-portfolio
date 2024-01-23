import React from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import AnimatedPage from "./Home/AnimatedPage";
import Title from "./Shared/Title";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import "../style/style.css";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    if (!name || !email || !message) {
      return toast.error("Please fill up the required fields");
    }
    emailjs
      .sendForm(
        "service_quexl4i",
        "template_law2mte",
        e.target,
        "ABeQVmFkzyPo0SWB5"
      )
      .then((res) => {
        if (res.text === "OK") {
          toast.success("Successfully Sent message");
        }
      })
      .catch((err) => {
        if (err) {
          toast.error("Something went wrong, Please try again later");
        }
      });
    e.target.reset();
  };
  return (
    <div className=" w-[100%] h-[100%] text-white relative overflow-x-hidden overflow-y-auto lg:px-28 md:px-16 px-5 pb-10">
      <AnimatedPage>
        <div>
          <Title title="CONTACT" upTitle="Get In Touch" />
          <div className="lg:grid grid-cols-2 mx-auto  ">
            <div className=" lg:mr-12 md:mr-10">
              <h1 className="lg:text-4xl  md:text-3xl text-3xl font-bold text-sky-500  ">
                DON'T BE SHY !
              </h1>
              <p className="py-4">
                Feel free to get in touch with me. If you have any query to me
                or any kind of work you can send me a message from here. It will
                be my please to have your message
              </p>
              <div className=" text-white">
                <div className="flex  items-center">
                  <IconButton aria-label="delete" size="large">
                    <LocationCityIcon
                      fontSize="medium"
                      className=" text-white"
                    />{" "}
                  </IconButton>
                  <div>
                    <h1 className="font-semibold">Address </h1>
                    <h3>Sreepur, Gazipur , Dhaka - Bangladesh</h3>
                  </div>
                </div>
              </div>
              <div className=" text-white mt-2">
                <div className="flex">
                  <IconButton aria-label="delete" size="large">
                    <MailOutlineIcon
                      fontSize="medium"
                      className=" text-white"
                    />{" "}
                  </IconButton>
                  <div className="my-auto">
                    <h1 className=" font-semibold">Mail Me </h1>
                    <h3 className="text-thin text-sky-500">
                      abu.faysal002@gmail.com
                    </h3>
                  </div>
                </div>
              </div>
              <div className=" text-white mt-2">
                <div className="flex  items-center">
                  <IconButton aria-label="delete" size="large">
                    <PhoneIcon fontSize="medium" className=" text-white" />{" "}
                  </IconButton>
                  <div>
                    <h1 className=" font-semibold">Call Me</h1>
                    <h3 className="text-thin">+8801634319696</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className=" my-auto lg:mt-0 md:mt-0 sm:mt-5 mt-8">
              <form onSubmit={handleSubmit} className=" ">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 mb-2">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="off"
                    required={true}
                    className="input  lg:mr-2 md:mr-2 mb-2 lg:mb-0 md:mb-0 bg-transparent text-white border-dotted border-sky-700"
                  />
                  <input
                    name="email"
                    type="text"
                    required={true}
                    placeholder="Your email"
                    autoComplete="off"
                    className="input  bg-transparent text-white border-dotted border-sky-700"
                  />
                </div>
                <div className="form-control mb-3 flex ">
                  <input
                    name="subject"
                    type="text"
                    autoComplete="off"
                    placeholder="Subject"
                    className="input  border-dotted border-sky-700 w-full bg-transparent text-white"
                  />
                </div>
                <div className="form-control mb-3">
                  <textarea
                    name="message"
                    type="text"
                    required={true}
                    placeholder="Your message"
                    className="textarea text-white textarea-bordered w-full border-dotted border-sky-700  bg-transparent h-24 text-white"
                  />
                </div>

                <div className=" ">
                  <button
                    type="submit"
                    value="Send Message"
                    className="btn border block mt-5 mb-3 my-auto send_button  w-full z-100 mr-auto  border-sky-700 hover:border-sky-700"
                  >
                    <span className="mr-1"> Send Message </span>
                    <IconButton aria-label="delete" size="large">
                      <SendIcon fontSize="small" className=" text-white" />{" "}
                    </IconButton>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* </div> */}
      </AnimatedPage>
    </div>
  );
};

export default Contact;
