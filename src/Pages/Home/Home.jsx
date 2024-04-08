import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Signup_Modal from "./Signup_Modal";
const Home = () => {
  const [toggleSignupModal, setToggleSignupModal] = useState(false);
  const handleSignupModal = () => {
    setToggleSignupModal(!toggleSignupModal);
  };
  return (
    <div>
      <Signup_Modal
        handleSignupModal={handleSignupModal}
        toggleSignupModal={toggleSignupModal}
      />
      <Navbar handleSignupModal={handleSignupModal} />
      <Hero handleSignupModal={handleSignupModal} />
    </div>
  );
};

export default Home;
