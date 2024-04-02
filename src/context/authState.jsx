import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

const AuthState = (props) => {
    const host = "http://localhost:3000";
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Register User
  const createUser = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(`${host}/api/auth/createUser`, formData, config);

      dispatch({
        type: "REGISTER_SUCCESS",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "REGISTER_FAIL",
        payload: err.response.data.error,
      });
    }
  };

  // Login User
  const login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(`${host}/api/auth/login`, formData, config);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "LOGIN_FAIL",
        payload: err.response.data.errors,
      });
    }
    return "success";
  };

  // Get User
  const getUser = async () => {
    try {
      const res = await axios.post("/api/auth/getuser");

      dispatch({
        type: "USER_LOADED",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "AUTH_ERROR",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        error: state.error,
        createUser,
        login,
        getUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
