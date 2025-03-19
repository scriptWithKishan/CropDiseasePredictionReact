import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

function Admin() {
  const { user } = useSelector((store) => store.userState);
  if (user) {
    return user.role === "admin" ? <Outlet /> : <Navigate to="/" replace />;
  }
}

export default Admin;
