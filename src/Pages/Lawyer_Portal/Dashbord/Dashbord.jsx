import React, { useEffect, useState } from "react";
import axios from "axios";
import Lawyer_Bars from "../Lawyer_Bars";
import DashbordCards from "./DashbordCards";
import TodayCases from "./TodayCases";
import TodayAppoinments from "./TodayAppoinments";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
const Dashbord = () => {
  let username = localStorage.getItem("username");
  const [caseDatePickerValue, setCaseDatePickerValue] = useState(
    dayjs().format("DD-MMM-YYYY")
  );
  const [appoinmentDatePickerValue, setAppoinmentDatePickerValue] = useState(
    dayjs().format("DD-MMM-YYYY")
  );
  const [clientRecords, setClientRecords] = useState([]);
  const [caseRecords, setCaseRecords] = useState([]);
  const [appoinmentRecords, setAppoinmentRecords] = useState([]);
  useEffect(() => {
    sessionStorage.removeItem("userRole");
    axios
      .get(`http://localhost:8000/cases?userId=${username}`)
      .then((res) => {
        let array = res.data;
        array.reverse();
        setCaseRecords(array);
      })
      .catch((err) => console.log(err));
  }, []);

  const changeAppoinmentStatus=async (data)=>{
    await data.map(async (d,i)=>{
      if(dayjs().isAfter(d.date,'day')){
        d.status='closed'
        await axios
        .put("http://localhost:8000/appoinments/" + d.id, data[i])
        .then((res) => {})
        .catch((err) => console.log(err));
      }
    })
    setAppoinmentRecords(data)
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8000/appoinments?userId=${username}`)
      .then((res) => {
        let array = res.data;
        array.reverse();
        changeAppoinmentStatus(array)
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/clients?userId=${username}`)
      .then((res) => {
        let array = res.data;
        array.reverse();
        setClientRecords(array);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Lawyer_Bars />
      <div className="p-4 pt-24 xl:ml-64 bg-white">
        <DashbordCards
          clientRecords={clientRecords}
          caseRecords={caseRecords}
          appoinmentRecords={appoinmentRecords}
        />
        <div className="mt-16 min-h-32 shadow-md border-2 border-dashed border-gray-300 rounded bg-gray-50 dark:bg-gray-800">
          <div className="p-4 flex flex-col gap-2 sm:gap-4 sm:flex-row">
            <h1 className="text-2xl font-medium text-gray-600 dark:text-gray-500">
              Today Cases
            </h1>
            <DatePicker
              showIcon
              toggleCalendarOnIconClick
              dateFormat="dd-MMM-yyyy"
              minDate={new Date()}
              showMonthDropdown
              className="bg-gray-50 z-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              selected={caseDatePickerValue}
              onChange={(date) => setCaseDatePickerValue(date)}
            />
          </div>
          <TodayCases data={caseRecords} selectedDate={caseDatePickerValue} />
        </div>
        <div className="mt-16 min-h-32 shadow-md border-2 border-dashed border-gray-300 rounded bg-gray-50 dark:bg-gray-800">
          <div className="p-4 flex flex-col gap-2 sm:gap-4 sm:flex-row">
            <h1 className="text-2xl font-medium text-gray-600 dark:text-gray-500">
              Today Appoinments
            </h1>
            <DatePicker
              showIcon
              toggleCalendarOnIconClick
              dateFormat="dd-MMM-yyyy"
              minDate={new Date()}
              showMonthDropdown
              className="bg-gray-50 z-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              selected={appoinmentDatePickerValue}
              onChange={(date) => setAppoinmentDatePickerValue(date)}
            />
          </div>
          <TodayAppoinments
            data={appoinmentRecords}
            selectedDate={appoinmentDatePickerValue}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
