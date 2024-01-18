import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

function Login() {
  return (
    <div className="login-page">
      <Navbar></Navbar>
      <div className="login-content">
        <div className="login-heading">Log in</div>
        <div>
          Don't have an account? <span className="sign-up-link">Sign Up</span>
        </div>
        <div className="login-input-fields">
          <input type="text" className="login-input-top" placeholder="Email" />
          <input
            type="text"
            className="login-input-bottom"
            placeholder="Password"
          />
          <div className="forgot-password-section">
            <div className="forgot-password-text">Forgot Password?</div>
          </div>
          <div className="login-button">
            <div className="login-button-text">Login</div>
          </div>
          <div className="login-legal-conditions">
            By logging in or continuing, you accept Change.org's
            <span className="terms-of-service"> Terms of Service</span> and
            <span className="privacy-policy"> Privacy Policy </span>.
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Login;
