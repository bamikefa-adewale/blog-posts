import { useContext } from "react";
import { Outlet } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import Login from "../pages/Login";

const AuthUser = () => {
  const context = useContext(AuthContext);
  return context.users?.token ? <Outlet /> : <Login />;
};

export default AuthUser;
