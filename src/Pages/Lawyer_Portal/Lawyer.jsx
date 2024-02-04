import React, { useState } from "react";
import Lawyer_Sidebar from '../../components/Lawyer_Sidebar'
import Lawyer_Navbar from '../../components/Lawyer_Navbar'
const Lawyer = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <div>
      <Lawyer_Navbar handleToggleSidebar={handleToggleSidebar}/>
      <Lawyer_Sidebar toggleSidebar={toggleSidebar} handleToggleSidebar={handleToggleSidebar}/>
    </div>
    
  )
}

export default Lawyer
