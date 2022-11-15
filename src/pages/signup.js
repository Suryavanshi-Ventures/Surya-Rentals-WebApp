import React from "react";
import "../resources/layout.css";
import logo from "../resources/logo.png";
import SignupModel from "../components/signup";
const signup = () => {
  return (
    <div className="layout">
      <div className="cardLogin">
        {" "}
        <div className="logoCard">
          <img src={logo} width="120px" />
        </div>
        <h5>Sign Up For an Account Fill out your </h5>
       
        <h7>
      <br/>information below and we'll send<br/>
          you an activation link via email. To <br/>best match your account,
        </h7>
        <div className="loginConst">
     <SignupModel/>
        </div>
      
      </div>
    </div>
  );
};

export default signup;
