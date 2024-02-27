import React from "react";
import { Link } from "react-router-dom";

const Signup_Modal = ({ handleSignupModal, toggleSignupModal}) => {
  return (
    <div
      className={
        !toggleSignupModal ? "hidden" : "bg-black/75 h-screen w-full fixed"
      }
    >
      <div className="h-screen w-full flex items-center justify-center ">
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden flex z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-3 md:p-4 border-b rounded-t dark:border-gray-600">
                <Link
                  to="/"
                  className="flex items-center space-x-2 rtl:space-x-reverse"
                >
                  <img
                    src="src\assets\logo.svg"
                    className="h-8"
                    alt="LegalEse Logo"
                  />
                  <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
                    LegalEse
                  </span>
                </Link>
                <button
                  onClick={handleSignupModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <h1 className="text-xl text-center font-medium leading-tight tracking-tight text-black mt-3">
                Signup as a
              </h1>
              <div className="flex gap-5 items-center justify-center p-4 md:p-5 dark:border-gray-600">
                <Link to="/Signup"  >
                  <button
                  onClick={()=>localStorage.setItem("userRole","lawyer")}
                    data-modal-hide="default-modal"
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Lawyer
                  </button>
                </Link>
                <Link to="/Signup" >
                  <button
                  onClick={()=>localStorage.setItem("userRole","client")}
                    data-modal-hide="default-modal"
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Client
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup_Modal;
