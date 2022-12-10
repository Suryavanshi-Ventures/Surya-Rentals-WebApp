import React from "react";
import "../resources/layout.css";
import logo from "../resources/logo.png";




const Login = () => {
  return (
    <div className="main-background">
    <div className="register">
      <div className="logoCard">
        <img src={logo} width="120px" />
      </div>
      <h5>Sign Up For an Account Fill out your </h5>
      <h7>
        information below and we'll send you an activation link via email. To{" "}
        best match your account,
      </h7>
      <section className="signup">
    <form>
<div class="form-group">
  <label for="exampleInputEmail1">Email address</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
  <label for="exampleInputPassword1">Password</label>
  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
</div>
<br/>
<button type="submit" class="btn btn-primary">Submit</button>

</form>
<h6>Interested in signing up for online access?</h6><a href="/signup">Request Access to protal</a>
      

    </section>
  </div>
    </div>
  
  );
};

export default Login;
