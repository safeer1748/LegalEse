import axios from "axios";
import Lawyer from "../Lawyer";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Add_Case = () => {
  let username = localStorage.getItem("username");
  const navigate = useNavigate();
  const [existingClient, setExistingClient] = useState([]);
  const [datePickerValue, setDatePickerValue] = useState(new Date());
  const [formData, setFormData] = useState({
    client_role: "plaintiff",
    client_name: "",
    client_email: "",
    case_number: "",
    case_type: "",
    court_branch: "",
    court_number: "",
    judge_name: "",
    date: "",
    status: "open",
    userId: username,
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/clients?userId=${username}`)
      .then((res) => {
        let array = res.data;
        array.reverse();
        setExistingClient(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //get the name of existing client
  const getSelectedClient = (e) => {
    e.preventDefault();
    let selected = existingClient.find((f) => f.email === e.target.value);
    setFormData({
      ...formData,
      client_email: e.target.value,
      client_name: selected.name,
    });
  };

  // Set Date
  const handleDate = async () => {
    let Date = datePickerValue.toLocaleDateString();
    formData.date = Date;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    let validationErrors = {};

    // Email Validation
    if (formData.client_email === "" || formData.client_email === null) {
      isValid = false;
      validationErrors.client_email = "email required";
    }
    // Case Number Validation
    if (formData.case_number === "" || formData.case_number === null) {
      isValid = false;
      validationErrors.case_number = "case number required";
    }
    // Case Number Validation
    if (formData.case_type === "" || formData.case_type === null) {
      isValid = false;
      validationErrors.case_type = "case type required";
    }
    // Court Branch Validation
    if (formData.court_branch === "" || formData.court_branch === null) {
      isValid = false;
      validationErrors.court_branch = "court branch required";
    }
    // Court Number Validation
    if (formData.court_number === "" || formData.court_number === null) {
      isValid = false;
      validationErrors.court_number = "court number required";
    }
     // Judge Name Validation
     if (formData.judge_name === "" || formData.judge_name === null) {
      isValid = false;
      validationErrors.judge_name = "judge name required";
    }

    setErrors(validationErrors);
    setValid(isValid);
    if (Object.keys(validationErrors).length === 0) {
      await handleDate();
      await axios
        .post(`http://localhost:8000/cases?userId=${username}`, formData)
        .then((res) => {
          navigate(`/Lawyer/${username}/Manage_Cases`);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <Lawyer />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 mt-16 xl:mt-0 px-4 w-full mx-auto max-w-2xl lg:py-28">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new Case
          </h2>
          <form onSubmit={handleSubmit}>
            <fieldset className="grid grid-cols-2 sm:grid-cols-4"
             onChange={(e) =>
              setFormData({ ...formData, client_role: e.target.value })
            }>
              <legend  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Client Role</legend>
              <div className="flex items-center mb-5">
                <input
                  id="client-role-1"
                  type="radio"
                  name="client-role"
                  value="plaintiff"
                  className="w-4 h-4 border-gray-500 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  defaultChecked
                />
                <label
                  htmlFor="client-role-1"
                  className="block ms-2  text-sm text-gray-900 dark:text-gray-300"
                >
                  Plaintiff
                </label>
              </div>
              <div className="flex items-center mb-5">
                <input
                  id="client-role-2"
                  type="radio"
                  name="client-role"
                  value="defendant"
                  className="w-4 h-4 border-gray-500 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="client-role-2"
                  className="block ms-2  text-sm  text-gray-900 dark:text-gray-300"
                >
                  Defendant
                </label>
              </div>
              <div className="flex items-center mb-5">
                <input
                  id="client-role-3"
                  type="radio"
                  name="client-role"
                  value="petitioner"
                  className="w-4 h-4 border-gray-500 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="client-role-3"
                  className="block ms-2  text-sm text-gray-900 dark:text-gray-300"
                >
                  Petitioner
                </label>
              </div>
              <div className="flex items-center mb-5">
                <input
                  id="client-role-4"
                  type="radio"
                  name="client-role"
                  value="respondent"
                  className="w-4 h-4 border-gray-500 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="client-role-4"
                  className="block ms-2  text-sm  text-gray-900 dark:text-gray-300"
                >
                  Respondent
                </label>
              </div>
            </fieldset>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-10">
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Client email
                </label>

                <select
                  name="email"
                  id="email"
                  onChange={getSelectedClient}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected disabled value="Choose Client">
                    Select Client Email
                  </option>
                  {existingClient.map((d, i) => (
                    <option key={i}>{d.email}</option>
                  ))}
                </select>
                <div className="text-red-600">
                  {valid ? <></> : <span>{errors.client_email}</span>}
                </div>
              </div>
              <div className="w-full">
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
                  placeholder="Client name"
                  required=""
                  value={formData.client_name}
                  disabled
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="case-no"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Case Number
                </label>
                <input
                  type="text"
                  name="case-no"
                  id="case-no"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="xxxxxxxx"
                  required=""
                  onChange={(e) =>
                    setFormData({ ...formData, case_number: e.target.value })
                  }
                />
                <div className="text-red-600">
                  {valid ? <></> : <span>{errors.case_number}</span>}
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="case-type"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Case Type
                </label>
                <input
                  type="text"
                  name="case-type"
                  id="case-type"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="murder"
                  required=""
                  onChange={(e) =>
                    setFormData({ ...formData, case_type: e.target.value })
                  }
                />
                 <div className="text-red-600">
                  {valid ? <></> : <span>{errors.case_type}</span>}
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="court-branch"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Court Branch
                </label>
                <input
                  type="text"
                  name="court-branch"
                  id="court-branch"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="high court taxila"
                  required=""
                  onChange={(e) =>
                    setFormData({ ...formData, court_branch: e.target.value })
                  }
                />
                 <div className="text-red-600">
                  {valid ? <></> : <span>{errors.court_branch}</span>}
                </div>
              </div>

              <div className="w-full">
                <label
                  htmlFor="court-no"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Court Number
                </label>
                <input
                  type="text"
                  name="court-no"
                  id="court-no"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="xxxxxxxx"
                  required=""
                  onChange={(e) =>
                    setFormData({ ...formData, court_number: e.target.value })
                  }
                />
                <div className="text-red-600">
                  {valid ? <></> : <span>{errors.court_number}</span>}
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="judge-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Judge Name
                </label>
                <input
                  type="text"
                  name="judge-name"
                  id="judge-name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Judge Name"
                  required=""
                  onChange={(e) =>
                    setFormData({ ...formData, judge_name: e.target.value })
                  }
                />
                <div className="text-red-600">
                  {valid ? <></> : <span>{errors.judge_name}</span>}
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date
                </label>
                <DatePicker
                  showIcon
                  toggleCalendarOnIconClick
                  dateFormat="M/d/yyyy"
                  minDate={new Date()}
                  showMonthDropdown
                  className="bg-gray-50 z-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  selected={datePickerValue}
                  onChange={(date) => setDatePickerValue(date)}
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-blue-800"
              >
                Add Case
              </button>
              <Link to={`/Lawyer/${username}/Manage_Cases`}>
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

export default Add_Case;