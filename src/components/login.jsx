import React, { useState, useContext } from "react";
import AuthContext from "../context/authContext";

const Login = () => {
  // Accessing the login action from the auth context
  const { login } = useContext(AuthContext);

  // State to store the login form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Destructuring email and password from formData
  const { email, password } = formData;

  // Function to update form data as user types
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Function to handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    // Call the login action from the context
    login(formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
