import React from "react";
import "../resources/layout.css";
import logo from "../resources/logo.png";
import LoginConst from "../components/login_constant";

const Login = () => {
  return (
    <div className="layout">
      <div className="cardLogin">
        {" "}
        <div className="logoCard">
          <img src={logo} width="120px" />
        </div>

        <h5>Online Portal</h5>
        <div className="loginConst">
        <LoginConst/>
        </div>
       
      </div>
     
    </div>
  );
};

export default Login;
