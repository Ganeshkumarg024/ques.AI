import React from "react";
import queslogo from "../Assets/Images/ques-logo.svg";
import quesleft from "../Assets/Images/ques-left-logo.svg";
import googleimg from "../Assets/Images/google-img.svg";

import "./Home.css";

function Home() {
  return (
    <div className="home-wrap">
      <div className="home-left-container">
        <div className="logo-container">
          <img src={quesleft} alt="Ques.AI Logo" />
          <p className="logo-txt">
            Ques.<span>Ai</span>
          </p>
        </div>
        <div className="left-container-mid">
        <h1>Your podcast will no longer be just a hobby.</h1>
        </div>
        <div className="left-container-end">
        <p>Supercharge Your Distribution using our AI assistant!</p>
        </div>
      </div>
      <div className="home-right-container">
        <div className="ques-logo-container">
          <div className="ques-logo">
            <img src={queslogo} alt="Ques.AI Logo" />
          </div>
          <div className="ques-logo-text">
            <p className="text-1">Welcome to</p>
            <p className="text-2">Ques.AI</p>
          </div>
        </div>
        <form className="login-form">
          <div className="input-group">
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" />
          </div>
          <div className="remember-me">
            <div className="remember-me-check">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="separator">or</div>
          <button type="button" className="google-button">
            <img src={googleimg} alt="Google Logo" />
            <p> Continue with Google</p>
          </button>
          <div className="sign-up">
            <p>
              Don't have an account? <a href="#">Create Account</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
