import { Navigate } from "react-router";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { UserMiddleware } from "../../middleware/UserMiddleware";

import { setRedirect } from "../../redux/HeaderSlice";
import { clearUser } from "../../redux/LoginSlice";

import {
  Nav,
  NavContent,
  Logo,
  Title,
  Home,
  StyledNavLink,
  StyledNavItem,
  Logout,
} from "./style";

function Header() {
  const dispatch = useDispatch();

  const { redirect } = useSelector((store) => store.headerState);
  const { user, loading } = useSelector((store) => store.userState);

  const logout = () => {
    Cookies.remove("token");
    dispatch(clearUser());
    dispatch(setRedirect(true));
  };

  useEffect(() => {
    UserMiddleware(dispatch);
  }, []);

  return (
    <Nav>
      {redirect && <Navigate to="/auth" replace />}
      <StyledNavLink to="/">
        <Home>
          <Logo
            src="https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740674529/xy9lifa11zu4ufvw9mjx.png"
            alt="logo"
          />
          <Title>AgriTech</Title>
        </Home>
      </StyledNavLink>
      <NavContent>
        <StyledNavItem to="/predict">Predict</StyledNavItem>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <StyledNavItem to="/profile">{user.name}</StyledNavItem>
            {user.role === "admin" && (
              <StyledNavItem to="/add/product">Seller</StyledNavItem>
            )}
          </>
        )}
        <StyledNavItem to="/products">Products</StyledNavItem>
        <StyledNavItem to="/orders">Orders</StyledNavItem>
      </NavContent>
      <Logout type="button" onClick={logout}>
        Logout
      </Logout>
    </Nav>
  );
}

export default Header;
