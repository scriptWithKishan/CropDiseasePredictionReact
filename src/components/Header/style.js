import { NavLink } from "react-router";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 25px;
  background-color: #7fbe70;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Home = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export const Title = styled.h1`
  font-size: 22px;
  margin-left: 10px;
  display: inline-block;
  color: #ffffff;
  text-decoration: none;
  margin: 0;
`;

export const StyledNavItem = styled(NavLink)`
  color: #ffffff;
  margin-left: 4px;
  margin-right: 4px;
  text-decoration: none;
  width: 70px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  &.active {
    color: #345e2a;
    font-weight: bold;
  }
`;

export const Logout = styled.button`
  color: #ffffff;
  height: 45px;
  width: 100px;
  background-color: rgb(206, 149, 220);
  border: 0px solid #ccc;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out, border-radius 0.5s ease-in-out;

  &:hover {
    background-color: #ae70be;
    border-radius: 10px;
  }
`;
