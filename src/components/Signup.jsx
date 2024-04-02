import React, { useState, useContext } from "react";
import { Link } from "react-router-dom"; 
//import { useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";
import "../components/styles/Signup.css"

const AuthPage = () => {
  const authContext = useContext(AuthContext);
  const { login, register } = authContext;
  //const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isLogin: true,
  });

  const { email, password, confirmPassword, isLogin } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isLogin) {
      // Login
      console.log("Logged in")
      const success = await login({ email, password });
      if (success) {
        // Redirect to home page after successful login
        //navigate("/home");
        console.log("Done Login")
        window.location.href = "/home";
      }
    } else {
      // Sign up
      register({ email, password, confirmPassword });
    }
  };

  return (
    <div className='sBody'>
      <div className="wrapper">
        <div className="title-text">
          <div className={`title ${isLogin ? 'login' : 'signup'}`}>Account</div>
          <div className={`title ${isLogin ? 'signup' : 'login'}`}>Account</div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input type="radio" name="slide" id="login" checked={isLogin} onChange={() => setFormData({ ...formData, isLogin: true })} />
            <input type="radio" name="slide" id="signup" checked={!isLogin} onChange={() => setFormData({ ...formData, isLogin: false })} />
            <label htmlFor="login" className="slide login">Login</label>
            <label htmlFor="signup" className="slide signup">Sign Up</label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            {isLogin ? (
              <form action="#" className="login" onSubmit={handleSubmit}>
                <div className="field">
                  <input type="text" placeholder="Email Address" required onChange={handleChange} name="email" value={email} />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" required onChange={handleChange} name="password" value={password} />
                </div>
                <div className="pass-link">
                  <a href="#">Reset password?</a>
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  
                  <input type="submit" value="Login" />
                
                </div>
                <div className="signup-link">
                  Don't Have Account? <Link onClick={() => setFormData({ ...formData, isLogin: false })}>Create A New</Link>
                </div>
              </form>
            ) : (
              <form action="#" className="signup" onSubmit={handleSubmit}>
                <div className="field">
                  <input type="text" placeholder="Email Address" required onChange={handleChange} name="email" value={email} />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" required onChange={handleChange} name="password" value={password} />
                </div>
                <div className="field">
                  <input type="password" placeholder="Confirm Password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required />
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Sign Up"/>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
