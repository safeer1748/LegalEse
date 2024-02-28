import React, { useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
const Lawyer_Navbar = ({ handleToggleSidebar }) => {
  let username = localStorage.getItem("username");
  const [toggleProfileDropdown, setToggleProfileDropdown] = useState(true);
  const handleToggleProfileDropdown = () => {
    setToggleProfileDropdown(!toggleProfileDropdown);
  };
  const handleLogout=()=>{
    localStorage.removeItem('username')
    localStorage.removeItem('role')
    localStorage.removeItem('login')
  }
  return (
    <div>
      <div className="flex justify-end w-full">
        {/* Navbar */}
        <nav className="fixed top-0 z-40 w-full bg-white border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end self-start">
                <button
                  onClick={handleToggleSidebar}
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                  to="#"
                  className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                onClick={handleToggleProfileDropdown}
                  to={`/Lawyer/${username}/Dashbord`}
                  className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                onClick={handleToggleProfileDropdown}
                  to="#"
                  className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Change Password
                </Link>
              </li>
              <li>
                <Link
                onClick={()=>{handleToggleProfileDropdown(); handleLogout();}}
                to='/login'
                  className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lawyer_Navbar;
