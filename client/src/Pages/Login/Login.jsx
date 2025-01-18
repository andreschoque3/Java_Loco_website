import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
    name: "",
    confirmPassword: "",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginForm) {
      validateLogin();
    } else {
      validateRegister();
    }
  };

  const validateLogin = () => {
    const { email, password } = formData;
    if (email && password) {
      // Redirect to the Home page after login
      navigate("/home");
    } else {
      alert("Please fill out all fields.");
    }
  };

  const validateRegister = () => {
    const { name, email, password, confirmPassword } = formData;
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Redirect to the Home page after registration
    navigate("/");
  };

  useEffect(() => {
    document.title = 'Java Loco - Login';
}, []);


  return (
    <div className="header-section-login">
      {/* Login Form */}
      {isLoginForm ? (
        <div className="login" id="login-form">
          <div className="wrapper">
            <form id="loginForm" onSubmit={handleSubmit}>
              <h1>Login</h1>
              <div className="input-box">
                <input
                  className="input-bar"
                  type="email"
                  id="login-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="input-box">
                <input
                  className="input-bar"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Password"
                  required
                />
                <i
                  className="fa-solid fa-eye-slash"
                  onClick={togglePasswordVisibility}
                  style={{ display: isPasswordVisible ? "none" : "block" }}
                ></i>
                <i
                  className="fa-solid fa-eye"
                  onClick={togglePasswordVisibility}
                  style={{ display: isPasswordVisible ? "block" : "none" }}
                ></i>
              </div>
              <div className="rem-for">
                <div className="checkbox-label">
                  <input
                    type="checkbox"
                    id="rem-check"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <label htmlFor="rem-check">Remember Me</label>
                </div>
                <a href="#">Forgot password?</a>
              </div>
              <button type="submit" className="btn">
                Login
              </button>
              <div className="reg-link">
                <p>
                  Don't have an account?{" "}
                  <a href="#" onClick={toggleForm}>
                    Register Here
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      ) : (
        // Register Form
        <div className="register" id="register-form" style={{ display: "block" }}>
          <div className="wrapper">
            <form id="registerForm" onSubmit={handleSubmit}>
              <h1>Register</h1>
              <div className="input-box">
                <input
                  className="input-bar"
                  type="text"
                  id="register-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="input-box">
                <input
                  className="input-bar"
                  type="email"
                  id="register-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="input-box">
                <input
                  className="input-bar"
                  id="register-password1"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Password"
                  required
                />
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="input-box">
                <input
                  className="input-bar"
                  id="register-password2"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  placeholder="Confirm password"
                  required
                />
                <i
                  className="fa-solid fa-eye-slash"
                  onClick={toggleConfirmPasswordVisibility}
                  style={{ display: isConfirmPasswordVisible ? "none" : "block" }}
                ></i>
                <i
                  className="fa-solid fa-eye"
                  onClick={toggleConfirmPasswordVisibility}
                  style={{ display: isConfirmPasswordVisible ? "block" : "none" }}
                ></i>
              </div>
              <div className="rem-for">
                <div className="checkbox-label">
                  <input
                    type="checkbox"
                    id="reg-rem-check"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <label htmlFor="reg-rem-check">Remember Me</label>
                </div>
                <a href="#">Forgot password?</a>
              </div>
              <button type="submit" className="btn">
                Register
              </button>
              <div className="log-link">
                <p>
                  Already have an account?{" "}
                  <a href="#" onClick={toggleForm}>
                    Login Here
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
