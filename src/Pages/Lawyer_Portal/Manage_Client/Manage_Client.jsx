import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegEye, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Manage_Client = () => {
  let username = localStorage.getItem("username");
  const [genderDropdown, setGenderDropdown] = useState(false);
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const handleGenderDropdown = () => {
    setGenderDropdown(!genderDropdown);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/clients?userId=${username}`)
      .then((res) => {
        setData(res.data);
        setRecords(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const searchFilter = (event) => {
    setRecords(
      data.filter((f) => f.name.toLowerCase().includes(event.target.value))
    );
  };
  const showMale=()=>{
    setRecords(data.filter((f)=>f.gender==='male'))
  }
  const showFemale=()=>{
    setRecords(data.filter((f)=>f.gender==='female'))
  }
  const showBoth=()=>{
    setRecords(data)
  }
  return (
    <div>
      <div className="p-4 pt-24 xl:ml-64 bg-white">
        <div className="p-4 border-2 border-gray-300 border-dashed rounded-lg dark:border-gray-700">
          <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
              <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                  <div className="w-full md:w-1/1">
                    <form className="flex items-center">
                      <label htmlFor="simple-search" className="sr-only">
                        Search
                      </label>
                      <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="simple-search"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Search"
                          required=""
                          onChange={searchFilter}
                        />
                      </div>
                    </form>
                  </div>
                  <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <Link
                      to={`/Lawyer/${username}/Add_Client`}
                      type="button"
                      className="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                    >
                      <svg
                        className="h-3.5 w-3.5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        />
                      </svg>
                      Add Client
                    </Link>
                    <div className="flex flex-row-reverse items-center  gap-3  w-full md:w-auto relative">
                      <button
                        className="w-full md:w-auto flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 py-2 px-4 text-sm font-medium focus:outline-none rounded-lg focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        type="button"
                      >
                        delete all
                      </button>
                      <div className="flex flex-col space-y-12">
                        <button
                          onClick={handleGenderDropdown}
                          id="dropdownDelayButton"
                          data-dropdown-toggle="dropdownDelay"
                          data-dropdown-delay="500"
                          data-dropdown-trigger="hover"
                          className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                          type="button"
                        >
                          Gender
                          <svg
                            className="w-2.5 h-2.5 ms-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>

                        {/* <!-- Gender Dropdown menu --> */}
                        <div
                          id="dropdownDelay"
                          className={`${
                            !genderDropdown ? "hidden" : ""
                          } fixed right-30  md:right-56  z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownDelayButton"
                          >
                            <li className="cursor-pointer">
                              <a
                              onClick={()=>{showMale(); handleGenderDropdown();}}
                                className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Male
                              </a>
                            </li>
                            <li  className="cursor-pointer">
                              <a
                              onClick={()=>{showFemale(); handleGenderDropdown();}}
                                className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Female
                              </a>
                            </li>
                            <li  className="cursor-pointer">
                              <a
                              onClick={()=>{showBoth(); handleGenderDropdown();}}
                                className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Both
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  {records.length===0 ? (
                    <div className="flex justify-center my-6 font-semibold"><span>you have no client</span></div>
                  ) : (
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                        <tr>
                          <th scope="col" className="px-4 py-3">
                            Client Name
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Mobile
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Email
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Gender
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3 flex items-center justify-end"
                          >
                            <span className="">Actions</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {records.map((d, i) => (
                          <tr key={i} className="border-b dark:border-gray-700 ">
                            <th
                              scope="row"
                              className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {d.name}
                            </th>
                            <td className="px-4 py-3">{d.mobile}</td>
                            <td className="px-4 py-3">{d.email}</td>
                            <td className="px-4 py-3">{d.gender}</td>
                            <td className="px-4 py-3 flex items-center justify-end space-x-3">
                              <button>
                                <FaRegEye
                                  size={16}
                                  className="hover:text-blue-600"
                                />
                              </button>
                              <button>
                                <FaRegEdit
                                  size={16}
                                  className="hover:text-green-600"
                                />
                              </button>
                              <button>
                                <FaRegTrashAlt
                                  size={16}
                                  className="hover:text-red-600"
                                />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Manage_Client;
