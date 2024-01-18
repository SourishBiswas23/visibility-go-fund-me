import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

function ForgotPassword() {
  return (
    <div className="page">
      <Navbar></Navbar>
      <div className="content">
        <div className="heading">Forgot Password</div>
        <div>
          Remembered your password? <span className="sign-up-link">Login</span>
        </div>
        <div className="input-fields">
          <input
            type="text"
            className="single-input-field"
            placeholder="Email"
          />
          <div className="forgot-password-section"></div>
          <div className="button">
            <div className="button-text">Send Password Reset Mail</div>
          </div>
          <div className="legal-conditions">
            By continuing, you accept Change.org's
            <span className="terms-of-service"> Terms of Service</span> and
            <span className="privacy-policy"> Privacy Policy </span>.
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ForgotPassword;
