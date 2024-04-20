import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import axios from "axios";
const Client_Navbar = () => {
  let username = localStorage.getItem("username");
  const [toggleProfileDropdown, setToggleProfileDropdown] = useState(true);
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const [userImg, setUserImg] = useState("");
  const handleToggleHamburger = () => {
    setToggleHamburger(!toggleHamburger);
  };
  const handleToggleProfileDropdown = () => {
    setToggleProfileDropdown(!toggleProfileDropdown);
  };
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    localStorage.removeItem("login");
  };
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex ms-2 md:me-24">
          <img
            src="\src\assets\logo.svg"
            className="h-8 me-3"
            alt="FlowBite Logo"
          />
          <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
            LegalEse
          </span>
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={handleToggleProfileDropdown}
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            {userImg ? (
              <img
                className="w-8 h-8 object-cover object-top rounded-full"
                src={userImg}
                alt="user photo"
              />
            ) : (
              <img
                className="w-8 h-8 object-cover object-top rounded-full"
                src="/src/assets/profile_img.jpg"
                alt="user photo"
              />
            )}
          </button>
          {/* Profile Dropdown */}
          <div
            id="dropdown"
            className={`${
              toggleProfileDropdown ? "hidden" : "block"
            } z-50 mt-16 mr-4 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 fixed top-0 right-0`}
          >
            <div className="flex justify-center">
              <ul
                className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <Link
                    onClick={handleToggleProfileDropdown}
                    to={`/Lawyer/${username}/Profile`}
                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Profile Settings
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={handleToggleProfileDropdown}
                    to="/ChangePassword"
                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Change Password
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      handleToggleProfileDropdown();
                      handleLogout();
                    }}
                    to="/login"
                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <button
          onClick={handleToggleHamburger}
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {/* <div
          className={`${!toggleHamburger ? "hidden" : ""} items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Client_Navbar;
