import React from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { setEmail, setPassword, toggleLogin } from "../../redux/LoginSlice";

import { LoginMiddleware } from "../../middleware/LoginMiddleware";

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
} from "./styled";

function Authentication() {
  const { email, password, error, login } = useSelector(
    (store) => store.loginState
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
            <AuthButton type="submit">
              {login ? "Sign In" : "Sign Up"}
            </AuthButton>
          </AuthForm>
          {error && <ErrorMessage>*{error}</ErrorMessage>}
        </AuthContainer>
      </Background>
    </>
  );
}

export default Authentication;
