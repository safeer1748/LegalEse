import React from "react";
import { FaHandshake } from "react-icons/fa";
import { ImHammer2 } from "react-icons/im";
import { LuCalendarDays } from "react-icons/lu";
import { Link } from "react-router-dom";
const LawyerDashbordCards = ({
  clientRecords,
  caseRecords,
  appoinmentRecords,
}) => {
  let totalClient = Object.keys(clientRecords).length;
  let totalCases = Object.keys(caseRecords).length;
  let totalAppoinment = Object.keys(appoinmentRecords).length;
  let username = localStorage.getItem("username");
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-4">
      <Link
        to={`/Lawyer/${username}/Manage_Clients`}
        className="flex items-center justify-between h-24 p-4 border-2 border-dashed border-gray-300  rounded bg-gray-50 dark:bg-gray-800"
      >
        <div>
          <p className="text-5xl font-medium text-gray-400 dark:text-gray-500">
            {totalClient}
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-500">
            Total Clients
          </p>
        </div>
        <FaHandshake className="text-lime-500" size={80} />
      </Link>
      <Link
        to={`/Lawyer/${username}/Manage_Cases`}
        className="flex items-center justify-between h-24 p-4 border-2 border-dashed border-gray-300 rounded bg-gray-50 dark:bg-gray-800"
      >
        <div>
          <p className="text-5xl font-medium text-gray-400 dark:text-gray-500">
            {totalCases}
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-500">
            Total Cases
          </p>
        </div>
        <ImHammer2 className="text-red-500" size={64} />
      </Link>
      <Link
        to={`/Lawyer/${username}/Manage_Appoinments`}
        className="flex items-center justify-between h-24 p-4 border-2 border-dashed border-gray-300 rounded bg-gray-50 dark:bg-gray-800"
      >
        <div>
          <p className="text-5xl font-medium text-gray-400 dark:text-gray-500">
            {totalAppoinment}
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-500">
            Total Appoinments
          </p>
        </div>
        <LuCalendarDays className="text-sky-500" size={70} />
      </Link>
    </div>
  );
};

export default LawyerDashbordCards;
