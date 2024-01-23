import React from "react";
import "../../style/style.css";
const Modal = ({ selectedProject }) => {
  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal = modal-bottom bg-[#182238c4] opacity-0 sm:modal-middle">
        <div
          layout
          className="modal-box w-11/12 max-w-5xl relative  bg-slate-800  "
        >
          <div className="">
            <label
              htmlFor="my-modal-6"
              className="btn btn-sm btn-circle text-white  absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold mb-3 text-3xl text-sky-500 text-center">
              {selectedProject?.title}
            </h3>
            <div className=" text-white ">
              <h1 className="text-blue-500 font-bold mb-1 text-xl">
                Project Details
              </h1>
              <p className="text-justify">{selectedProject?.projectDetails}</p>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn btn-sm btn-warning">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
