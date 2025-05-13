import React from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { setEmail, setPassword, toggleLogin } from "../../redux/LoginSlice";
import {
  setEmailS,
  setUsernameS,
  setPasswordS,
  setConfirmPasswordS,
  setRoleS,
} from "../../redux/SignInSlice";

import { LoginMiddleware } from "../../middleware/LoginMiddleware";
import { SignInMiddleware } from "../../middleware/SignInMiddleware";

import {
  Background,
  AuthContainer,
  Description,
  Text,
  Name,
  Tagline,
  Logo,
  SignInButton,
  SignUpButton,
  AuthHead,
  AuthForm,
  Input,
  AuthButton,
  ErrorMessage,
  Select,
  Option,
} from "./styled";

function Authentication() {
  const { email, password, error, login } = useSelector(
    (store) => store.loginState
  );
  const { sEmail, sUsername, sPassword, sConfirmPassword, sRole } = useSelector(
    (store) => store.signInState
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token === undefined) navigate("/auth");
    else navigate("/");
  }, [navigate]);

  const onChangeEmail = (e) => {
    dispatch(setEmail(e.target.value));
  };
  const onChangePassword = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    LoginMiddleware(dispatch, email, password, navigate);
  };

  const onChangeSEmail = (e) => {
    dispatch(setEmailS(e.target.value));
  };
  const onChangeSName = (e) => {
    dispatch(setUsernameS(e.target.value));
  };
  const onChangeSPassword = (e) => {
    dispatch(setPasswordS(e.target.value));
  };

  const onChangeSRole = (e) => {
    dispatch(setRoleS(e.target.value));
  };

  const onChangeSConfirmPassword = (e) => {
    dispatch(setConfirmPasswordS(e.target.value));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    SignInMiddleware(
      dispatch,
      sEmail,
      sUsername,
      sPassword,
      sConfirmPassword,
      sRole
    );
  };

  return (
    <>
      <Background>
        <Description>
          <Text>Welcome to </Text>
          <Name>AgriTech AI</Name>
          <Tagline>AI for a Disease-Free Harvest</Tagline>
          <Logo
            src="https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740674529/xy9lifa11zu4ufvw9mjx.png"
            alt="Logo"
          />
          <SignInButton
            type="button"
            $login={login.toString()}
            onClick={() => dispatch(toggleLogin(true))}
          >
            Sign In
          </SignInButton>
          <SignUpButton
            type="button"
            $login={login.toString()}
            onClick={() => dispatch(toggleLogin(false))}
          >
            Sign Up
          </SignUpButton>
        </Description>
        <AuthContainer>
          <AuthHead>{login ? "Sign In" : "Sign Up"} to AgriTech AI</AuthHead>
          {login ? (
            <AuthForm onSubmit={handleLogin}>
              <Input
                type="email"
                id="email"
                name="email"
                required
                onChange={onChangeEmail}
                placeholder="Email"
                value={email}
              />
              <br />
              <Input
                type="password"
                id="password"
                name="password"
                required
                onChange={onChangePassword}
                placeholder="Password"
                value={password}
              />
              <AuthButton type="submit">Sign In</AuthButton>
            </AuthForm>
          ) : (
            <AuthForm onSubmit={handleSignIn}>
              <Input
                type="text"
                name="name"
                required
                onChange={onChangeSName}
                placeholder="Username"
                value={sUsername}
              />
              <Input
                type="email"
                name="email"
                required
                onChange={onChangeSEmail}
                placeholder="Email"
                value={sEmail}
              />
              <Input
                type="password"
                name="password"
                required
                onChange={onChangeSPassword}
                placeholder="Password"
                value={sPassword}
              />
              <Input
                type="password"
                name="confirmPassword"
                required
                onChange={onChangeSConfirmPassword}
                placeholder="Confirm Password"
                value={sConfirmPassword}
              />
              <Select onChange={onChangeSRole}>
                <Option value="user">User</Option>
                <Option value="admin">Admin</Option>
              </Select>
              <AuthButton type="submit">Sign Up</AuthButton>
            </AuthForm>
          )}
          {error && <ErrorMessage>*{error}</ErrorMessage>}
        </AuthContainer>
      </Background>
    </>
  );
}

export default Authentication;
