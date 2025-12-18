import { useState } from "react";
import "../styles/auth.css";

export default function Auth() {
  const [active, setActive] = useState(false);

  return (
    <div className="auth-page">

      {/* MOBILE TOP TOGGLE */}
      <div className="auth-mobile-toggle">
        <button
          className={!active ? "auth-active-btn" : ""}
          onClick={() => setActive(false)}
        >
          Sign In
        </button>
        <button
          className={active ? "auth-active-btn" : ""}
          onClick={() => setActive(true)}
        >
          Sign Up
        </button>
      </div>

      {/* DESKTOP SLIDER */}
      <div className={`auth-container ${active ? "auth-active" : ""}`}>

        {/* SIGN UP */}
        <div className="auth-form-container auth-sign-up">
          <form>
            <h1>Create Account</h1>
            <span>Use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button">Sign Up</button>
          </form>
        </div>

        {/* SIGN IN */}
        <div className="auth-form-container auth-sign-in">
          <form>
            <h1>Sign In</h1>
            <span>Use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button">Sign In</button>
          </form>
        </div>

        {/* SLIDER PANEL */}
        <div className="auth-toggle-container">
          <div className="auth-toggle">

            <div className="auth-toggle-panel auth-toggle-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected please login</p>
              <button
                className="auth-ghost-btn"
                type="button"
                onClick={() => setActive(false)}
              >
                Sign In
              </button>
            </div>

            <div className="auth-toggle-panel auth-toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Enter details and start journey</p>
              <button
                className="auth-ghost-btn"
                type="button"
                onClick={() => setActive(true)}
              >
                Sign Up
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
