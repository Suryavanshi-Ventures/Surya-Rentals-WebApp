import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../resources/layout.css";
import "../resources/signup.css";
import logo from "../resources/logo.png";
const Signup = () => {

    const navigate = useNavigate();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",

    password: "",
    cpassword: "",
  });

  let name, value;
  const hadleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { fname, lname, phone, email, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        phone,
        email,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (data.status ===422 || !data){
        window.alert("invalid registratoin");
        console.log("Invalid Registration");

    }
    else{
        window.alert("Registratoin sucessful");
        console.log("Sucessful Registration");
        navigate('/path');
        
    }
  };

  return (
    <div className="main-background">
      <div className="register">
        <div className="logoCard">
          <img src={logo} width="80px" />
        </div>
        <h5>Sign Up For an Account Fill out your </h5>
        <h7>
          information below and we'll send you an activation link via email. To
          best match your account,
        </h7>
        <section className="signup">
          <form method="POST">
            <div class="form-group">
              <label htmlFor="fname">First name</label>
              <input
                type="text"
                class="form-control"
                name="fname"
                id="fname"
                placeholder="your first name"
                value={user.fname}
                onChange={hadleInputs}
              />
            </div>
            <div class="form-group">
              <label htmlFor="lname">last name</label>
              <input
                type="text"
                class="form-control"
                name="lname"
                id="lname"
                placeholder="your Last name"
                value={user.lname}
                onChange={hadleInputs}
              />
            </div>
            <div class="form-group">
              <label htmlFor="phone">Phone number</label>
              <input
                type="number"
                name="phone"
                id="phone"
                class="form-control"
                value={user.phone}
                onChange={hadleInputs}
                placeholder="your phone number"
              />
            </div>
            <div class="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                value={user.email}
                onChange={hadleInputs}
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                class="form-control"
                id="password"
                placeholder=" Password"
                value={user.password}
                onChange={hadleInputs}
                autoComplete="off"
              />
            </div>
            <div class="form-group">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                name="cpassword"
                class="form-control"
                id="cpassword"
                placeholder="Confirm Password"
                autoComplete="off"
                value={user.cpassword}
                onChange={hadleInputs}
              />
            </div>
            <br />
            <div className="form-group form-button">
              <input
                type="submit"
                name="signup"
                id="signup"
                className="btn btn-primary"
                value="register"
                onClick={PostData}
              />
            </div>
          </form>

          <h6>Already have an account?</h6>
          <a href="/login">Login</a>
        </section>
      </div>
    </div>
  );
};

export default Signup;
