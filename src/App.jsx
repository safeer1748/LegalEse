import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";
import ForgotPassword from "./Pages/Authentication/ForgotPassword";
import Admin from "./Pages/Admin_Portal/Admin";
import Client from "./Pages/Client_portal/Client";
import Lawyer from "./Pages/Lawyer_Portal/Lawyer";
import Dashbord from "./Pages/Lawyer_Portal/Dashbord/Dashbord";
import Manage_Clients from "./Pages/Lawyer_Portal/Clients/Manage_Clients";
import Add_Client from "./Pages/Lawyer_Portal/Clients/Add_Client";
import View_Client from "./Pages/Lawyer_Portal/Clients/View_Client";
import Edit_Client from "./Pages/Lawyer_Portal/Clients/Edit_Client";
import Manage_appoinments from "./Pages/Lawyer_Portal/Appoinments/Manage_appoinments";
import Add_appoinment from "./Pages/Lawyer_Portal/Appoinments/Add_appoinment";
import View_appoinment from "./Pages/Lawyer_Portal/Appoinments/View_appoinment";
import Edit_appoinment from "./Pages/Lawyer_Portal/Appoinments/Edit_appoinment";
import Manage_Cases from "./Pages/Lawyer_Portal/Cases/Manage_Cases";
import Add_Case from "./Pages/Lawyer_Portal/Cases/Add_Case";
import View_Case from "./Pages/Lawyer_Portal/Cases/View_case";
import Edit_Case from "./Pages/Lawyer_Portal/Cases/Edit_Case";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/Signup" element={<Signup/>} />
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
            path="/Lawyer/:username/Manage_Clients"
            element={<Manage_Clients />}
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
            path="/Lawyer/:username/Manage_appoinments"
            element={<Manage_appoinments />}
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
                {/* Manage_Cases */}
          <Route
            exact
            path="/Lawyer/:username/Manage_Cases"
            element={<Manage_Cases/>}
          />
          <Route
            exact
            path="/Lawyer/:username/Add_Case"
            element={<Add_Case />}
          />
          <Route
            exact
            path="/Lawyer/:username/View_Case/:id"
            element={<View_Case/>}
          />
          <Route
            exact
            path="/Lawyer/:username/Edit_Case/:id"
            element={<Edit_Case />}
          />
          <Route exact path="/Client/:username" element={<Client />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
