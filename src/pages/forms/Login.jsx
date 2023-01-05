import { Link } from "react-router-dom";
import "./forms.css";
import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  // Form Submit Handler
  const formSubmitHandler = (event) => {
    event.preventDefault();
  }
  return (
    <div className="form-wrapper">
      {/* <ToastContainer /> */}
      <h1 className="form-title">Login to your account</h1>
      <form  className="form">
        <input
          type="email"
          placeholder="Email"
        />
        <input
          type="password"
          placeholder="Password"
        />
        <button className="form-btn" type="submit">
          Login
        </button>
      </form>
      <div className="form-footer">
        Dont't have an account ?{" "}
        <Link to="/register" className="forms-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;