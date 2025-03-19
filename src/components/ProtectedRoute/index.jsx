import { Navigate, Outlet } from "react-router";
import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
  const token = Cookies.get("token");

  return token === undefined ? <Navigate to="/auth" replace /> : <Outlet />;
};

export default ProtectedRoute;
