const authReducer = (state, action) => {
    switch (action.type) {
      case "REGISTER_SUCCESS":
      case "LOGIN_SUCCESS":
        localStorage.setItem("token", action.payload.authtoken);
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          error: null,
        };
      case "REGISTER_FAIL":
      case "LOGIN_FAIL":
      case "AUTH_ERROR":
        localStorage.removeItem("token");
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          user: null,
          error: action.payload,
        };
      case "USER_LOADED":
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  