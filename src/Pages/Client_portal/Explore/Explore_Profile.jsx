import React, { useState, useEffect } from "react";
import Client_Navbar from '../Client_Navbar'
import Profile_Card from './Profile_Card'
import axios from "axios";
const Explore_Profile = () => {
  const [profileData, setProfileData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/users?role=lawyer`)
      .then((res) => {
        let data = res.data;
        setProfileData(
          data
            .filter((obj) => obj.hasOwnProperty("profile"))
        );
        console.log(profileData);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
        <Client_Navbar/>
        <Profile_Card profileData={profileData}/>
    </div>
  )
}

export default Explore_Profile
