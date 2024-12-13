import React, { useState,useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Auth = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetToken, setResetToken] = useState("");
  const [isPasswordReset, setIsPasswordReset] = useState(false); // New flag for password reset
  const [token, setToken] = useState(""); // Added state for token
  const [userId, setId] = useState(""); // Added state for userId

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleAuth = async () => {
    setError("");
    setMessage("");
  
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
  
    try {
      if (isLogin) {
        const { data } = await axios.post("http://192.168.133.4:6009/api/auth/signin", {
          email,
          password,
        });
  
        
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.user._id); // Access _id from response
  
        console.log("Token:", data.token);
        console.log("User ID:", data.user._id);
  
        setToken(data.token);
        setId(data.user._id);
  
        // Call the onLoginSuccess callback with user data
        if (onLoginSuccess) {
          onLoginSuccess({
            token: data.token,
            userId: data.user._id, // Ensure _id is used here
         
          });
        }
  
        alert("Login successful!");
        // Remove navigate and use Link instead
         navigate("/userdashboard");
        setMessage("Redirecting to User Dashboard..."); // Optional message
      } else {
        const { data } = await axios.post("http://192.168.133.4:6009/api/auth/signup", {
          email,
          password,
        });
        setMessage(data.message || "Sign-up successful! Please login.");
        setIsLogin(true);
      }
    } catch (err) {
      console.error("Error details:", err);
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    }
  };
  

  const handleForgotPassword = async () => {
    setError("");
    setMessage("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    try {
      const { data } = await axios.post("http://192.168.133.4:6009/api/auth/forgot-password", {
        email,
      });
      setResetToken(data.token);
      setMessage(data.message || "Reset instructions sent to your email.");
    } catch (err) {
      setError(err.response?.data?.message || "Error sending reset instructions.");
    }
  };

  const handleResetPassword = async () => {
    setError("");
    setMessage("");

    if (!resetToken || !password) {
      setError("Please provide a valid reset token and a new password.");
      return;
    }

    try {
      const { data } = await axios.post("http://192.168.133.4:6009/api/auth/reset-password", {
        token: resetToken,
        newPassword: password,
      });

      setMessage(data.message || "Password reset successfully!");

      // Set flag to prompt the user for login credentials again
      setIsPasswordReset(true);
      setForgotPassword(false); // Hide reset password form
    } catch (err) {
      setError(err.response?.data?.message || "Error resetting password.");
    }
  };

  return (
    <div className="auth-container">
      <h1 className="auth-title">{isLogin ? "Login" : "Sign Up"}</h1>
      {!forgotPassword && !isPasswordReset ? (
        <>
          <div className="auth-form">
            <div className="auth-form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="auth-form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="auth-button" onClick={handleAuth}>{isLogin ? "Login" : "Sign Up"}</button>
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError("");
                  setMessage("");
                }}
              >
                {isLogin ? "Sign Up" : "Login"}
              </span>
            </p>
            {isLogin && (
              <p>
                Forgot your password?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => setForgotPassword(true)}
                >
                  Reset it
                </span>
              </p>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {message && <p style={{ color: "green" }}>{message}</p>}
          </div>
        </>
      ) : isPasswordReset ? (
        // After password reset, ask for login credentials again
        <>
          <h2 className="auth-title">Login</h2>
          <div className="auth-form">
            <div className="auth-form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="auth-form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="auth-button" onClick={handleAuth}>Login</button>
            <p>
              Don't have an account?{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => {
                  setIsLogin(false);
                  setError("");
                  setMessage("");
                }}
              >
                Sign Up
              </span>
            </p>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {message && <p style={{ color: "green" }}>{message}</p>}
          </div>
        </>
      ) : (
        <>
          <h2 className="auth-title">Forgot Password</h2>
          <div className="auth-form">
            <div className="auth-form-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button className="auth-button" onClick={handleForgotPassword}>Send Reset Link</button>
            <p>
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => setForgotPassword(false)}
              >
                Back to Login
              </span>
            </p>
            {resetToken && (
              <>
                <h2 className="auth-title">Reset Password</h2>
                <div className="auth-form-group">
                  <input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="auth-button" onClick={handleResetPassword}>Reset Password</button>
              </>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {message && <p style={{ color: "green" }}>{message}</p>}
          </div>
        </>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
};

export default Auth;
