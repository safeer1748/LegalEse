import axios from "axios";
import React, { useEffect, useState } from "react";
import Lawyer_Bars from "../Lawyer_Bars";
import See_detailsModal from "./See_detailsModal";
import Set_dateTimeModel from "./Set_dateTimeModel";
const Appoinments_request = () => {
  let lawyerId = localStorage.getItem("username");
  const [toggleDetailModal, setToggleDetailModal] = useState(false);
  const [toggleDateTimeModal, setToggleDateTimeModal] = useState(false);
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/appoinments_request?lawyerId=${lawyerId}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleToggleDetailModal = () => {
    setToggleDetailModal(!toggleDetailModal);
  };
  const seeDetail = (id) => {
    axios
      .get(`http://localhost:8000/appoinments_request?id=${id}`)
      .then((res) => {
        setDetail(res.data[0]);
      })
      .then(() => {
        handleToggleDetailModal();
      })
      .catch((err) => console.log(err));
  };
  const handleToggleDateTimeModal = () => {
    setToggleDateTimeModal(!toggleDateTimeModal);
  };
  const acceptRequest = (id) => {

    axios
      .get(`http://localhost:8000/appoinments_request?id=${id}`)
      .then((res) => {
        setDetail(res.data[0]);
      })
      .then(() => {
        handleToggleDateTimeModal();
      })
      .catch((err) => console.log(err));
  };
  const rejectRequest=(id)=>{
    let confirmReject=confirm("Click OK to reject the request")
    if(confirmReject===true){
      axios.delete("http://localhost:8000/appoinments_request/" + id)
        .then((res) => {
          location.reload();
        })
        .catch((err) => console.log(err));
    }
  }
  return (
    <div>
      <Lawyer_Bars />
      <div className="p-4 pt-24 xl:ml-64 bg-white">
        <div className=" border-2 border-gray-300 border-dashed rounded-lg dark:border-gray-700">
          {data.length === 0 ? (
            <div className="flex justify-center my-6 font-semibold">
              <span>No Request Found</span>
            </div>
          ) : (
            <section className="bg-gray-50 shadow-md dark:bg-gray-900 m-4">
              {data.map((d, i) => (
                <div
                  key={i}
                  className="w-full text-sm border-b border-gray-300 flex flex-col md:flex-row justify-between p-3 gap-3 md:items-center"
                >
                  {toggleDetailModal ? (
                    <div className="absolute w-full">
                      <See_detailsModal
                        handleToggleModal={handleToggleDetailModal}
                        data={detail}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  <span>
                    {`${d.clientId} sent you the appoinment request.`}{" "}
                    <a
                      className="text-blue-700 hover:underline cursor-pointer"
                      onClick={() => seeDetail(d.id)}
                    >
                      View details
                    </a>
                  </span>
                  <div className="flex gap-3">
                    {toggleDateTimeModal ? (
                      <div className="absolute w-full">
                        <Set_dateTimeModel
                          handleToggleModal={handleToggleDateTimeModal}
                          data={detail}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                    <button
                      onClick={() => acceptRequest(d.id)}
                      type="button"
                      className=" text-white text-xs inline-flex items-center bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded-md "
                    >
                      Accept
                    </button>
                    <button
                    onClick={()=>rejectRequest(d.id)}
                      type="button"
                      className=" text-white text-xs inline-flex items-center bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appoinments_request;
