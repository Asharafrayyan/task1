import React from "react";
import "./index.css"; // Import the CSS file for the styles

function Login() {
    return (
        
        <div className="login-container">
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input type="text" id="username" name="username" className="form-input" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" id="password" name="password" className="form-input" required />
                </div>
                <button type="submit" className="submit-btn">Login</button>
            </form>
        </div>
    );
}

export default Login;
