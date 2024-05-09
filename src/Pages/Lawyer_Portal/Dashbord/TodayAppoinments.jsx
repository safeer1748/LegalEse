import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import dayjs from "dayjs";
const TodayAppoinments = ({ data, selectedDate }) => {
  let records = data.filter((f) =>
    f.date.includes(dayjs(selectedDate).format("DD-MMM-YYYY"))
  );
  let username = localStorage.getItem("username");
  const handleDelete = (id) => {
    const confirm = window.confirm("Click OK to Delete");
    if (confirm) {
      axios
        .delete("http://localhost:8000/appoinments/" + id)
        .then((res) => {
          location.reload();
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <section className="bg-gray-50 shadow-md dark:bg-gray-900 m-4">
        <div className="overflow-x-auto">
          {records.length === 0 ? (
            <div className="flex justify-center my-6 font-semibold">
              <span>You have no Appoinment</span>
            </div>
          ) : (
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Mobile
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Email
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
                    className="border-b  border-gray-300 align-middle"
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {d.name}
                    </th>
                    <td className="px-4 py-3 whitespace-nowrap">{d.mobile}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{d.email}</td>
                    <td className="px-4 py-3 whitespace-nowrap ">
                      <span className="mr-2">{d.date}</span>
                      <span>{d.time}</span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">{d.status}</td>
                    <td className="px-4 py-3 flex items-center justify-end space-x-3 whitespace-nowrap">
                      <Link to={`/Lawyer/${username}/View_appoinment/${d.id}`}>
                        <button>
                          <FaRegEye size={16} className="hover:text-blue-600" />
                        </button>
                      </Link>
                      <Link to={`/Lawyer/${username}/Edit_appoinment/${d.id}`}>
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
  );
};

export default TodayAppoinments;
