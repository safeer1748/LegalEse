import Lawyer_Bars from "../Lawyer_Bars";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firestore";
import Remarks_modal from "./Remarks_modal";
import Client_Navbar from "../../Client_portal/Client_Navbar";
import Admin_Navbar from "../../Admin/Admin_Navbar";
const View_Case = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  let username = localStorage.getItem("username");
  let role = localStorage.getItem("role");
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const getCase = async () => {
    try {
      const docRef = doc(db, "cases", id);
      const docSnap = await getDoc(docRef);
      setData({ id: docSnap.id, ...docSnap.data() });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCase();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    const confirm = window.confirm("Would you like to Delete?");
    if (confirm) {
      try {
        await deleteDoc(doc(db, "cases", id));
        navigate(`/Lawyer/${username}/Manage_Cases`);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <div
        className={`${
          !showModal ? "hidden" : ""
        } w-full h-screen fixed z-50 bg-black/75`}
      >
        <Remarks_modal handleModal={handleModal} data={data} />
      </div>

      {role==='lawyer'?<Lawyer_Bars />:''}
      {role==='client'?<Client_Navbar/>:''}
      {role==='admin'?<Admin_Navbar/>:''}
      <div className={`${role==='lawyer'?'h-screen':''}  my-10 sm:my-0 pt-8 w-full flex items-center justify-center`}>
        {/* <!-- Main modal --> */}
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Case Detail
                </h3>
                <Link
                  to={`/Lawyer/${username}/Manage_Cases`}
                  className={`${role === "lawyer" ? "" : "hidden"} `}
                >
                  <button
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
                </Link>

                <Link
                  to={`/Client/${username}/Cases`}
                  className={`${role === "client" ? "" : "hidden"} `}
                >
                  <button
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
                </Link>

                <Link
                  to={`/Lawyer_Profile/${data.userId}`}
                  className={`${role === "admin" ? "" : "hidden"} `}
                >
                  <button
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
                </Link>
              </div>
              {/* <!-- Modal body --> */}
              <div className=" grid md:grid-cols-2">
                <div className="p-4 md:p-5 space-y-4">
                  {role === "client" ? (
                    <p className="text-base leading-relaxed font-medium text-gray-800 dark:text-gray-400">
                      Lawyer UserName :
                      <span className="ml-3">{data.userId}</span>
                    </p>
                  ) : (
                    <p className="text-base leading-relaxed font-medium text-gray-800 dark:text-gray-400">
                      Client Role :
                      <span className="ml-3">{data.client_role}</span>
                    </p>
                  )}

                  <p className={`${role==='client'?'hidden':''} text-base leading-relaxed font-medium text-gray-800 dark:text-gray-400`}>
                    Client Name :
                    <span className="ml-3">{data.client_name}</span>
                  </p>
                  <p className={`${role==='client'?'hidden':''} text-base leading-relaxed font-medium text-gray-800 dark:text-gray-400`}>
                    Client Email :
                    <span className="ml-3">{data.client_email}</span>
                  </p>
                  <p className="text-base leading-relaxed font-medium text-gray-800 dark:text-gray-400">
                    Case Number :
                    <span className="ml-3">{data.case_number}</span>
                  </p>
                  <p className="text-base leading-relaxed font-medium text-gray-800 dark:text-gray-400">
                    Case Type :<span className="ml-3">{data.case_type}</span>
                  </p>
                  <p className="text-base leading-relaxed font-medium text-gray-800 dark:text-gray-400">
                    Court Branch :
                    <span className="ml-3">{data.court_branch}</span>
                  </p>
                </div>
                <div className="px-4 sm:py-4 md:p-5 space-y-4">
                  <p className="text-base leading-relaxed font-medium text-gray-800 dark:text-gray-400">
                    Court Number :
                    <span className="ml-3">{data.court_number}</span>
                  </p>
                  <p className="text-base leading-relaxed font-medium text-gray-800 dark:text-gray-400">
                    Judge Name :<span className="ml-3">{data.judge_name}</span>
                  </p>
                  <p className="text-base leading-relaxed font-medium text-gray-800 dark:text-gray-400">
                    Date :<span className="ml-3">{data.date}</span>
                  </p>
                  <p className="text-base leading-relaxed font-medium text-gray-800 dark:text-gray-400">
                    Time :<span className="ml-3">{data.time}</span>
                  </p>
                  <p className="text-base leading-relaxed font-medium text-gray-800 dark:text-gray-400">
                    Status :<span className="ml-3">{data.status}</span>
                  </p>
                </div>
              </div>
              {/* <!-- Modal footer --> */}
              <div className="flex items-center justify-between p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 gap-3">
                <button
                  onClick={handleModal}
                  className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gray-900 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-gray-700"
                >
                  Case Remarks
                </button>
                <div className={`${role==='lawyer'?'':'hidden'} flex gap-3`}>
                  <Link to={`/Lawyer/${username}/Edit_Case/${data.id}`}>
                    <button
                      type="submit"
                      className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-blue-800"
                    >
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(data.id)}
                    className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-600 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View_Case;
