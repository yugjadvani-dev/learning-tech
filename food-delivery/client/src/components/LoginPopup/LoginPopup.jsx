import React, { useState } from "react";
import "./LoginPopup.css";
import Signup from "./Signup";
import Login from "./Login";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign up");

  return (
    <>
      {currentState === "Login" ?
        <Login setShowLogin={setShowLogin} setCurrentState={setCurrentState} />
        :
        <Signup setShowLogin={setShowLogin} setCurrentState={setCurrentState} />
      }
    </>
  );
};

export default LoginPopup;
