import { motion } from 'framer-motion';
import React from 'react';
import '../../style/style.css';
const Modal = ({ selectedProject }) => {
  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-xl  modal-bottom bg-[#182238c4] opacity-0 sm:modal-middle">
        <div layout className="modal-box w-[100%] relative  bg-slate-800  ">
          <div className="">
            <label
              htmlFor="my-modal-6"
              className="btn btn-sm btn-circle text-white  absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold mb-3 text-3xl text-green-500 text-center">
              {selectedProject?.title}
            </h3>
            <div className="  ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                consequuntur quod sint ea enim maiores reprehenderit esse
                corporis atque temporibus!
              </p>
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
