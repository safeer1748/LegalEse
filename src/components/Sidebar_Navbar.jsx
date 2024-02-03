import React, { useState } from "react";
import { MdHome } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { ImHammer2 } from "react-icons/im";
import { LuCalendarDays } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { IoNotifications } from "react-icons/io5";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
const Sidebar_Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [toggleProfileDropdown, setToggleProfileDropdown] = useState(true);
  const [toggleAppoinmentDropdown, setToggleAppoinmentDropdown] =
    useState(true);
  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  const handleToggleProfileDropdown = () => {
    setToggleProfileDropdown(!toggleProfileDropdown);
  };
  const handleToggleAppoinmentDropdown = () => {
    setToggleAppoinmentDropdown(!toggleAppoinmentDropdown);
  };
  return (
    <div>
      <div className="flex justify-end w-full">
        {/* Navbar */}
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end self-start">
                <button
                  onClick={handleToggleSidebar}
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <HiOutlineMenuAlt2 size={25} />
                </button>
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
              </div>
              <div className="flex items-end flex-col">
                <div className="flex items-center ms-3 gap-3">
                  <IoNotifications
                    size={25}
                    className="text-gray-500 transition duration-75 hover:text-black cursor-pointer"
                  />
                  <div>
                    <button
                    onClick={handleToggleProfileDropdown}
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                      aria-expanded="false"
                      data-dropdown-toggle="dropdown-user"
                    >
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="user photo"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Profile Dropdown */}
        <div
                  id="dropdown"
                  className={`${toggleProfileDropdown?'hidden':'block'} z-10 mt-16 mr-6 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 flex justify-end`}
                >
                  <ul
                    className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Change Password
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
      </div>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 ${
          toggleSidebar ? "ttranslate-x-[-100%]" : "translate-x-0"
        } `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdHome
                  size={25}
                  className="text-gray-500 transition duration-75 group-hover:text-black"
                />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <Link
                to="/Lawyer/:username/Manage_Client"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaHandshake
                  size={25}
                  className="text-gray-500 transition duration-75 group-hover:text-black"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Clients</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <ImHammer2
                  size={25}
                  className="text-gray-500 transition duration-75 group-hover:text-black"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Cases</span>
              </a>
            </li>
            <li>
              <button
                onClick={handleToggleAppoinmentDropdown}
                type="button"
                className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-pages"
                data-collapse-toggle="dropdown-pages"
              >
                <LuCalendarDays
                  size={25}
                  className="text-gray-500 transition duration-75 group-hover:text-black"
                />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Appoinments
                </span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul
                id="dropdown-pages"
                className={`${
                  toggleAppoinmentDropdown ? "hidden" : "block"
                } py-2 space-y-2`}
              >
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Record List
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Request
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <HiOutlineMail
                  size={25}
                  className="text-gray-500 transition duration-75 group-hover:text-black"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar_Navbar;
