import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";
import ForgotPassword from "./Pages/Authentication/ForgotPassword";
import Admin from "./Pages/Admin_Portal/Admin";
import Client from "./Pages/Client_portal/Client";
import Lawyer from "./Pages/Lawyer_Portal/Lawyer";
import Manage_Client from "./Pages/Lawyer_Portal/Manage_Client";
import Manage_Cases from "./Pages/Lawyer_Portal/Manage_cases";
import Appoinments_List from "./Pages/Lawyer_Portal/Appoinments/Appoinments_List";
import Appoinment_Request from "./Pages/Lawyer_Portal/Appoinments/Appoinment_Request";
import Inbox from "./Pages/Lawyer_Portal/Inbox";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/ChangePassword" element={<ForgotPassword />} />
          <Route exact path="/Admin/:username" element={<Admin />} />
          <Route exact path="/Lawyer/:username" element={<Lawyer />}>
            <Route exact path="Manage_Client" element={<Manage_Client />} />
            <Route exact path="Manage_Cases" element={<Manage_Cases />} />
            <Route exact path="Appoinments_List" element={<Appoinments_List />} />
            <Route exact path="Appoinment_Request" element={<Appoinment_Request />} />
            <Route exact path="Inbox" element={<Inbox/>} />
          </Route>
          <Route exact path="/Client/:username" element={<Client />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
