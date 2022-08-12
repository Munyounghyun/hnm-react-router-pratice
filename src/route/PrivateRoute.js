import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../page/ProductDetail";
import { useSelector } from "react-redux/es/exports";

const PrivateRoute = () => {
  const authenticate = useSelector((state) => state.auth.authenticate);
  return authenticate == true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
