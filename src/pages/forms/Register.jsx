import { Link } from "react-router-dom";
import "./forms.css";
import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Register = () => {

  return (
    <div className="form-wrapper">
      {/* <ToastContainer /> */}
      <h1 className="form-title">Create new account</h1>
      <form  className="form">
        <input
          type="email"
          placeholder="Email"
        />
        <input
          type="text"
          placeholder="Username"
        />
        <input
          type="password"
          placeholder="Password"
        />
        <button className="form-btn" type="submit">
          Register
        </button>
      </form>
      <div className="form-footer">
        Already have an account ?{" "}
        <Link to="/login" className="forms-link">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;