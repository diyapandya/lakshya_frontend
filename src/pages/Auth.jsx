import { useState } from "react";
import "../styles/auth.css";

export default function Auth() {
    const [active, setActive] = useState(false);

    return (
        <div className="auth-page">
            {/* MOBILE TOP TOGGLE */}
            <div className="mobile-toggle">
                <button
                    className={!active ? "active-btn" : ""}
                    onClick={() => setActive(false)}
                >
                    Sign In
                </button>
                <button
                    className={active ? "active-btn" : ""}
                    onClick={() => setActive(true)}
                >
                    Sign Up
                </button>
            </div>

            <div className={`container ${active ? "active" : ""}`}>
                {/* SIGN UP */}
                <div className="form-container sign-up">
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
                <div className="form-container sign-in">
                    <form>
                        <h1>Sign In</h1>
                        <span>Use your email password</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="button">Sign In</button>
                    </form>
                </div>

                {/* SLIDER */}
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected please login</p>
                            <button
                                className="ghost-btn"
                                type="button"
                                onClick={() => setActive(false)}
                            >
                                Sign In
                            </button>
                        </div>

                        <div className="toggle-panel toggle-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter details and start journey</p>
                            <button
                                className="ghost-btn"
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
