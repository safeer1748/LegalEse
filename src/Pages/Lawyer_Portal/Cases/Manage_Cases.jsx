import axios from "axios";
import React, { useState, useEffect } from "react";
import Lawyer_Bars from "../Lawyer_Bars";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { RiExpandUpDownFill } from "react-icons/ri";
const Manage_Cases = () => {
  let username = localStorage.getItem("username");
  const [statusDropdown, setStatusDropdown] = useState(false);
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/cases?userId=${username}`)
      .then((res) => {
        let array = res.data;
        array.reverse();
        setData(array);
        setRecords(array);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleStatusDropdown = () => {
    setStatusDropdown(!statusDropdown);
  };

  const showOpenStatus = () => {
    setRecords(data.filter((f) => f.status === "open"));
  };

  const showClosedStatus = () => {
    setRecords(data.filter((f) => f.status === "closed"));
  };
  const showBoth = () => {
    setRecords(data);
  };

  const searchFilter = (event) => {
    setRecords(
      data.filter((f) =>
        f.client_name.toLowerCase().includes(event.target.value)
      )
    );
  };

  const handleStatus = async (id) => {
    let selected = records.find((f) => f.id === id);
    console.log(selected);
    if (selected.status === "open") {
      selected.status = "closed";
    } else if (selected.status === "closed") {
      selected.status = "open";
    }
    await axios
      .put("http://localhost:8000/cases/" + id, selected)
      .then((res) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Click OK to Delete");
    if (confirm) {
      axios
        .delete("http://localhost:8000/cases/" + id)
        .then((res) => {
          location.reload();
        })
        .catch((err) => console.log(err));
    }
  };


  const handleDeleteAll = () => {
    const confirm = window.confirm("Click OK to Delete All");
    if (confirm) {
      records.map((d, i) =>
        axios
          .delete("http://localhost:8000/cases/" + d.id)
          .then((res) => {
            location.reload();
          })
          .catch((err) => console.log(err))
      );
    }
  };
  return (
    <div>
      <Lawyer_Bars />
      <div className="p-4 pt-24 xl:ml-64 bg-white">
        <div className="border-2 border-gray-300 border-dashed rounded-lg dark:border-gray-700">
          <section className="bg-gray-50 shadow-md dark:bg-gray-900 m-4">
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
                          onChange={searchFilter}
                        />
                      </div>
                    </form>
                  </div>
                  <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <Link
                      to={`/Lawyer/${username}/Add_Case`}
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
                      Add Case
                    </Link>
                    <div className="flex flex-row-reverse items-center  gap-3  w-full md:w-auto relative">
                      <button
                        onClick={handleDeleteAll}
                        className="w-full md:w-auto flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 py-2 px-4 text-sm font-medium focus:outline-none rounded-lg focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        type="button"
                      >
                        delete all
                      </button>
                      <div className="flex flex-col space-y-12">
                        <button
                          onClick={handleStatusDropdown}
                          id="dropdownDelayButton"
                          data-dropdown-toggle="dropdownDelay"
                          data-dropdown-delay="500"
                          data-dropdown-trigger="hover"
                          className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                          type="button"
                        >
                          Status
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

                        {/* <!-- Status Dropdown menu --> */}
                        <div
                          id="dropdownDelay"
                          className={`${
                            !statusDropdown ? "hidden" : ""
                          } fixed right-30  md:right-48  z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownDelayButton"
                          >
                            <li className="cursor-pointer">
                              <a
                                onClick={() => {
                                  showOpenStatus();
                                  handleStatusDropdown();
                                }}
                                className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Open
                              </a>
                            </li>
                            <li className="cursor-pointer">
                              <a
                                onClick={() => {
                                  showClosedStatus();
                                  handleStatusDropdown();
                                }}
                                className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Closed
                              </a>
                            </li>
                            <li className="cursor-pointer">
                              <a
                                onClick={() => {
                                  showBoth();
                                  handleStatusDropdown();
                                }}
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
                  {records.length === 0 ? (
                    <div className="flex justify-center my-6 font-semibold">
                      <span>You have no case</span>
                    </div>
                  ) : (
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                        <tr>
                          <th scope="col" className="px-4 py-3">
                            Case Detail
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Court Detail
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Date Time
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3 flex items-center justify-end"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {records.map((d, i) => (
                          <tr
                            key={i}
                            className="border-b  border-gray-300 align-top"
                          >
                            <th
                              scope="row"
                              className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {d.client_name}
                              <span className="pl-1 text-gray-500 font-normal">
                                {d.client_role}
                              </span>
                              <div className="font-normal text-gray-500">
                                <p>{d.client_email}</p>
                                <p>
                                  case no:{" "}
                                  <span className="font-medium">
                                    {d.case_number}
                                  </span>
                                </p>
                                <p>
                                  case type :{" "}
                                  <span className="font-medium">
                                    {d.case_type}
                                  </span>
                                </p>
                              </div>
                            </th>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="font-normal text-gray-500">
                                <p>
                                  court:{" "}
                                  <span className="font-medium">
                                    {d.court_branch}
                                  </span>
                                </p>
                                <p>
                                  court no :{" "}
                                  <span className="font-medium">
                                    {d.court_number}
                                  </span>
                                </p>
                                <p>
                                  judge:{" "}
                                  <span className="font-medium">
                                    {d.judge_name}
                                  </span>
                                </p>
                              </div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <p>{d.date}</p>
                              <p>{d.time}</p>
                            </td>
                            <td
                              className="px-4 py-3 cursor-pointer whitespace-nowrap"
                              onClick={() => handleStatus(d.id)}
                            >
                              {d.status}{" "}
                              <RiExpandUpDownFill className="inline" />
                            </td>
                            <td className="px-4 py-3 flex items-center justify-end space-x-3 whitespace-nowrap">
                            <Link
                                to={`/Lawyer/${username}/View_Case/${d.id}`}
                              >
                                <button>
                                  <FaRegEye
                                    size={16}
                                    className="hover:text-blue-600"
                                  />
                                </button>
                              </Link>
                              <Link
                                to={`/Lawyer/${username}/Edit_Case/${d.id}`}
                              >
                                <button>
                                  <FaRegEdit
                                    size={16}
                                    className="hover:text-green-600"
                                  />
                                </button>
                              </Link>
                              <Link>
                                <button onClick={() => handleDelete(d.id)}>
                                  <FaRegTrashAlt
                                    size={16}
                                    className="hover:text-red-600"
                                  />
                                </button>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Manage_Cases;
