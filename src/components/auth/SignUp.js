import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

function SignUp() {
  return (
    <div className="page">
      <Navbar></Navbar>
      <div className="content">
        <div className="heading">Sign Up</div>
        <div>
          Already have an account? <span className="sign-up-link">Login</span>
        </div>
        <div className="input-fields">
          <input type="text" className="input-top" placeholder="User Name" />
          <input type="text" className="input-middle" placeholder="Email" />
          <input type="text" className="input-bottom" placeholder="Password" />
          <div className="forgot-password-section"></div>
          <div className="button">
            <div className="button-text">Sign Up</div>
          </div>
          <div className="legal-conditions">
            By signing in or continuing, you accept Change.org's
            <span className="terms-of-service"> Terms of Service</span> and
            <span className="privacy-policy"> Privacy Policy </span>.
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default SignUp;
