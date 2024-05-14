import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";
import ForgotPassword from "./Pages/Authentication/ForgotPassword";
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
import Profile_Settings from "./Pages/Lawyer_Portal/Profile/Profile_Settings";
import Profile_Preview from "./Pages/Lawyer_Portal/Profile/Profile_Preview";
import ChangePassword from "./Pages/Authentication/ChangePassword";
import Explore_Profile from "./Pages/Client_portal/Explore/Explore_Profile";
import Appoinments from "./Pages/Client_portal/Appoinments/Appoinments";
import Appoinments_request from "./Pages/Lawyer_Portal/Appoinments_Request/Appoinments_request";
import Protected from "./Protected";
import Manage_Users from "./Pages/Admin/Admin_Dashbord/Manage_Users";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
          <Route exact path="/ChangePassword" element={ <Protected Page={ChangePassword}/>} Role='' />
          {/* Lawyer Portal */}
          <Route
            exact
            path="/Lawyer/:username/Dashbord"
            element={< Protected Page={Dashbord} Role='lawyer' />}
          />

          {/* Manage_Clients */}
          <Route
            exact
            path="/Lawyer/:username/Manage_Clients"
            element={< Protected Page={Manage_Clients} Role='lawyer' />}
          />
          <Route
            exact
            path="/Lawyer/:username/Add_Client"
            element={< Protected Page={Add_Client } Role='lawyer'/>}
          />
          <Route
            exact
            path="/Lawyer/:username/View_Client/:id"
            element={< Protected Page={View_Client} Role='lawyer'  />}
          />
          <Route
            exact
            path="/Lawyer/:username/Edit_Client/:id"
            element={< Protected Page={Edit_Client} Role='lawyer' />}
          />

          {/* Manage_Appoinments */}
          <Route
            exact
            path="/Lawyer/:username/Manage_appoinments"
            element={< Protected Page={Manage_appoinments} Role='lawyer'  />}
          />
          <Route
            exact
            path="/Lawyer/:username/Add_appoinment"
            element={< Protected Page={Add_appoinment} Role='lawyer' />}
          />
          <Route
            exact
            path="/Lawyer/:username/View_appoinment/:id"
            element={< Protected Page={View_appoinment} Role='lawyer'  />}
          />
          <Route
            exact
            path="/Lawyer/:username/Edit_appoinment/:id"
            element={<  Protected Page={Edit_appoinment} Role='lawyer'  />}
          />
          {/* Manage_Cases */}
          <Route
            exact
            path="/Lawyer/:username/Manage_Cases"
            element={<  Protected Page={Manage_Cases} Role='lawyer'  />}
          />
          <Route
            exact
            path="/Lawyer/:username/Add_Case"
            element={< Protected Page={Add_Case} Role='lawyer'  />}
          />
          <Route
            exact
            path="/Lawyer/:username/View_Case/:id"
            element={< Protected Page={View_Case} Role='lawyer'  />}
          />
          <Route
            exact
            path="/Lawyer/:username/Edit_Case/:id"
            element={< Protected Page={Edit_Case} Role='lawyer'  />}
          />
          {/* Appoinments_Request */}
          <Route
            exact
            path="/Lawyer/:username/Appoinments_Request"
            element={< Protected Page={Appoinments_request} Role='lawyer' />}
          />
          {/* Lawyer Profile */}
          <Route
            exact
            path="/Lawyer/:username/Profile"
            element={<  Protected Page={Profile_Settings} Role='lawyer'  />}
          />
          <Route
            exact
            path="/Profile_Preview/:username"
            element={< Protected Page={Profile_Preview} Role='' />}
          />

          {/* Client Portal */}
          <Route
            exact
            path="/Client/:username/Explore"
            element={<  Protected Page={Explore_Profile} Role='client' />}
          />
          <Route
            exact
            path="/Client/:username/Appoinments"
            element={<  Protected Page={Appoinments} Role='client' />}
          />
          {/* Admin Portal */}
          <Route
            exact
            path="/Admin/:username/Manage_Users"
            element={<  Protected Page={Manage_Users} Role='admin'/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
