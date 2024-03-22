import axios from "axios";
import Lawyer from "../Lawyer";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const Edit_Client = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  let username = localStorage.getItem("username");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    gender: "",
    userId: username,
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:8000/clients/" + id)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    let validationErrors = {};

    // name Validation
    if (formData.name === "" || formData.name === null) {
      isValid = false;
      validationErrors.name = "Name required";
    }

    // mobile number Validation
    if (formData.mobile === "" || formData.mobile === null) {
      isValid = false;
      validationErrors.mobile = "Mobile Number required";
    } else if (!/^[0-9]{11}$/.test(formData.mobile)) {
      isValid = false;
      validationErrors.mobile = "Mobile number must be 11 digits";
    }

    setErrors(validationErrors);
    setValid(isValid);

    if (Object.keys(validationErrors).length === 0) {
      await axios
        .put("http://localhost:8000/clients/" + id, formData)
        .then((res) => {
          updateAppoinmentModule();
          updateCaseModule();
          navigate(`/Lawyer/${username}/Manage_Clients`);
        })
        .catch((err) => console.log(err));
    }
  };

  const updateAppoinmentModule = async () => {
    await axios
      .get(
        `http://localhost:8000/appoinments?userId=${username}&email=${formData.email}`
      )
      .then((res) => {
        let update = res.data[0];
        update = { ...update, name: formData.name };
        update = { ...update, mobile: formData.mobile };
        console.log(Object.keys(update).length);
        if (Object.keys(update).length > 2) {
          axios
            .put("http://localhost:8000/appoinments/" + update.id, update)
            .then((res) => {})
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  const updateCaseModule = async () => {
    await axios
      .get(
        `http://localhost:8000/cases?userId=${username}&client_email=${formData.email}`
      )
      .then((res) => {
        let update = res.data[0];
        update = { ...update, client_name: formData.name };
        console.log(Object.keys(update).length);
        if (Object.keys(update).length > 1) {
          axios
            .put("http://localhost:8000/cases/" + update.id, update)
            .then((res) => {})
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Lawyer />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 mt-16 xl:mt-0 px-4 w-full mx-auto max-w-2xl lg:py-28">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Update Client
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Client Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <div className="text-red-600">
                  {valid ? <></> : <span>{errors.name}</span>}
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mobile
                </label>
                <input
                  type="text"
                  name="number"
                  id="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                />
                <div className="text-red-600">
                  {valid ? <></> : <span>{errors.mobile}</span>}
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  disabled
                  className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={formData.email}
                />
              </div>
              <div className="w-full">
                <fieldset
                  className="grid grid-cols-2"
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                >
                  <legend className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Gender
                  </legend>
                  <div className="flex items-center mb-5">
                    <input
                      id="male"
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      className="w-4 h-4 border-gray-500 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="male"
                      className="block ms-2  text-sm text-gray-900 dark:text-gray-300"
                    >
                      Male
                    </label>
                  </div>
                  <div className="flex items-center mb-5">
                    <input
                      id="female"
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      className="w-4 h-4 border-gray-500 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="female"
                      className="block ms-2  text-sm  text-gray-900 dark:text-gray-300"
                    >
                      Female
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-blue-800"
              >
                Update
              </button>
              <Link to={`/Lawyer/${username}/Manage_Clients`}>
                <button className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gray-600 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-gray-800">
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Edit_Client;
