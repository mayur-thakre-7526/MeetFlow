import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function landingPage() {
  return (
    <div class="landingPageContainer">
      <nav>
        <div class="navHeader">
          <h2>MeetFlow</h2>
        </div>
        <div class="navList">
          <p>Join as Guest</p>
          <p>Register</p>
          <div role="button" className="loginButton">
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your Loved
            Ones
          </h1>
          <p>Cover a distence by MeetFlow</p>

          <div role="button">
            <Link to={"/home"}>Get Started</Link>
          </div>
        </div>
        <div>
          <img src="mobile.png" alt="" />
        </div>
      </div>
    </div>
  );
}
