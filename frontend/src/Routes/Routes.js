import { useContext, useEffect } from "react";
import {Routes,Route, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext.js";
import Login from "../Pages/Login/Login.js"
import Outlet from "../Routes/Outlet.js";

const PrivatRoute = ({
  isAllowed,
  element,
  redirectPath = "/unauthorized",
}) => {
  const { user, checkUser } = useContext(AuthContext);

  if (checkUser || !user) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
        }}
      >
        Loading...
      </div>
    );
  }

  if (!checkUser && !user) {
    return <Navigate to="/Unauthorized" />;
  }

  if (!isAllowed) {
    return <Navigate to="/Unauthorized" />;
  }

  return element;

  // return element
};

const AppRouter = () => {
  const { user, checkUser } = useContext(AuthContext);
  return (
    <Routes>
    <Route path="/" element={<Outlet />}>
        
        <Route path="/Login" exact element={<Login />} />
      </Route>

    </Routes>

  );
};

export default AppRouter;
