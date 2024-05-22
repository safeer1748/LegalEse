import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Client_Navbar from "../../Client_portal/Client_Navbar";
import Book_AppoinmentModal from "../../Client_portal/Book_Appoinment/Book_AppoinmentModal";
const Profile_Preview = () => {
  const [data, setData] = useState({});
  const [toggleModal, setToggleModal] = useState(false);
  let { username } = useParams();
  let role = localStorage.getItem("role");
  let userId = localStorage.getItem("username");
  const [email, setEmail] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/users?username=${username}`)
      .then((res) => {
        let record = res.data[0];
        if (record.profile) {
          setData(record.profile);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
  };
  const getEmail = () => {
    if (email === null || email === "") {
      axios
        .get(`http://localhost:8000/users?username=${userId}`)
        .then((res) => {
          let record = res.data[0];
          setEmail(record.email);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      {role === "client" ? <Client_Navbar /> : ""}
      <div>
        <Book_AppoinmentModal
          toggleModal={toggleModal}
          handleToggleModal={handleToggleModal}
          email={email}
        />
      </div>
      <section className={`w-full pt-6 px-6 md:flex justify-between`}>
        <div className="md:w-3/4 w-full">
          <div className="flex flex-col md:flex-row gap-5 items-center relative">
            {data.profile_img ? (
              <img
                className="object-cover rounded-lg object-top w-32 h-32 "
                src={data.profile_img}
                alt="Profile Image"
              />
            ) : (
              <img
                className="object-cover rounded-lg w-32 h-32"
                src="/src/assets/profile_img.jpg"
                alt="Profile Image"
              />
            )}
            <div className="flex flex-col items-center md:items-start">
              <label
                className={`${
                  data.availability === "available"
                    ? "bg-lime-600"
                    : "bg-red-600"
                } px-3 rounded-xl text-white text-xs md:absolute top-0`}
              >
                {data.availability}
              </label>
              <label className="block font-medium text-2xl text-gray-900 text-center">
                {data.name}
              </label>
              <label className="block text-gray-500">@{username}</label>
            </div>
          </div>
          <div className="mt-5">
            <label className="font-medium text-gray-900">About</label>
            <p className="text-gray-700">{data.about}</p>
          </div>
          <div className="mt-5">
            <label className="font-medium text-gray-900">Specialization</label>
            <div className="">
              {data.specialization &&
                data.specialization.map((specialization, index) => (
                  <label
                    key={index}
                    className="inline-block items-center bg-gray-100 border border-gray-300 rounded px-2 py-1 mr-3 mt-3 text-sm text-gray-900 "
                  >
                    {specialization}
                  </label>
                ))}
            </div>
          </div>
          <div className="mt-5">
            <label className="font-medium text-gray-900">Address</label>
            <p className="text-gray-700">{data.address}</p>
            <a
              href={data.location_url}
              target="_blank"
              className="inline-flex items-center mt-5 px-5 py-2.5 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800"
            >
              Google Map Location
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div
          className={`${
            role === "admin" ? "hidden" : ""
          } md:ml-12 w-full md:w-1/4 mt-5 md:mt-0`}
        >
          <button
            disabled={
              data.availability === "not available" ||
              username === userId ||
              role === "admin"
            }
            onClick={() => {
              handleToggleModal();
              getEmail();
            }}
            className={`${
              data.availability === "not available"
                ? "bg-gray-400"
                : "bg-blue-700 hover:bg-blue-800"
            } w-full h-10 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300`}
          >
            Book Appoinment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Profile_Preview;