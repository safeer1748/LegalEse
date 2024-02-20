import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";
import ForgotPassword from "./Pages/Authentication/ForgotPassword";
import Admin from "./Pages/Admin_Portal/Admin";
import Client from "./Pages/Client_portal/Client";
import Lawyer from "./Pages/Lawyer_Portal/Lawyer";
import Manage_Client from "./Pages/Lawyer_Portal/Manage_Client/Manage_Client";
import Dashbord from "./Pages/Lawyer_Portal/Dashbord/Dashbord";
import Add_Client from "./Pages/Lawyer_Portal/Manage_Client/Add_Client";
import View_Client from "./Pages/Lawyer_Portal/Manage_Client/View_Client";
import Edit_Client from "./Pages/Lawyer_Portal/Manage_Client/Edit_Client";
import Manage_appoinment from "./Pages/Lawyer_Portal/Manage_appoinment/Manage_appoinment";
import Add_appoinment from "./Pages/Lawyer_Portal/Manage_appoinment/Add_appoinment";
import View_appoinment from "./Pages/Lawyer_Portal/Manage_appoinment/View_appoinment";
import Edit_appoinment from "./Pages/Lawyer_Portal/Manage_appoinment/Edit_appoinment";
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

          {/* Lawyer Portal */}
          <Route exact path="/Lawyer/:username" element={<Lawyer />} />
          <Route
            exact
            path="/Lawyer/:username/Dashbord"
            element={<Dashbord />}
          />

          {/* Manage_Clients */}
          <Route
            exact
            path="/Lawyer/:username/Manage_Client"
            element={<Manage_Client />}
          />
          <Route
            exact
            path="/Lawyer/:username/Add_Client"
            element={<Add_Client />}
          />
          <Route
            exact
            path="/Lawyer/:username/View_Client/:id"
            element={<View_Client />}
          />
          <Route
            exact
            path="/Lawyer/:username/Edit_Client/:id"
            element={<Edit_Client />}
          />

          {/* Manage_Appoinments */}
          <Route
            exact
            path="/Lawyer/:username/Manage_appoinment"
            element={<Manage_appoinment />}
          />
          <Route
            exact
            path="/Lawyer/:username/Add_appoinment"
            element={<Add_appoinment />}
          />
          <Route
            exact
            path="/Lawyer/:username/View_appoinment/:id"
            element={<View_appoinment />}
          />
          <Route
            exact
            path="/Lawyer/:username/Edit_appoinment/:id"
            element={<Edit_appoinment />}
          />
          <Route exact path="/Client/:username" element={<Client />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
