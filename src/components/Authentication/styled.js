import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: row;
  background-image: linear-gradient(45deg, rgb(21, 89, 49), rgb(175, 198, 184));
  height: 100vh;
`;

export const Description = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 50px;
  text-align: center;
  font-weight: lighter;
  margin: 5px;
`;

export const Name = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  font-size: 49px;
  display: block;
  margin: 5px;
`;

export const Tagline = styled.p`
  color: #ffffff;
  font-size: 22px;
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  margin: 0;
`;

export const Logo = styled.img`
  width: 200px;
  margin-top: 80px;
  margin-bottom: 80px;
`;

export const SignInButton = styled.button`
  background-color: transparent;
  color: ${(props) => (props.$login == "true" ? "#ffffff" : "#b3b3b3")};
  border: 0px solid #ffffff;
  height: 50px;
  width: 150px;
  border-radius: 25px;
  font-size: ${(props) => (props.$login == "true" ? "25px" : "16px")};
  font-weight: bold;
  cursor: pointer;
  transition: color 0.5s ease-in-out, font-size 0.5s ease-in-out;
`;

export const SignUpButton = styled.button`
  background-color: transparent;
  color: ${(props) => (props.$login == "false" ? "#ffffff" : "#b3b3b3")};
  border: 0px solid #ffffff;
  height: 50px;
  width: 150px;
  border-radius: 25px;
  font-size: ${(props) => (props.$login == "false" ? "25px" : "16px")};
  font-weight: bold;
  cursor: pointer;
  transition: color 0.5s ease-in-out, font-size 0.5s ease-in-out;
`;

export const AuthContainer = styled.div`
  width: 70%;
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 0px solid #ccc;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  font-family: "Roboto", sans-serif;
`;

export const AuthHead = styled.h1`
  font-size: 70px;
  font-weight: bold;
  margin: 20px;
  color: rgb(14, 125, 60);
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  width: 50%;
  height: 50px;
  border: 0px solid #ccc;
  border-bottom: 2px solid #b2e3b1;
  padding: 10px;
  padding-left: 10px;
  font-size: 16px;
  margin: 10px;
  color: #b2e3b1;
  outline: none;
  transition: border-bottom 0.5s ease-in-out, color 0.5s ease-in-out;

  &::placeholder {
    color: #b2e3b1;
    transition: color 0.5s ease-in-out;
  }

  &:focus {
    border-bottom: 2px solid #0f630c;
    color: #0f630c;
  }

  &:focus::placeholder {
    color: #0f630c;
  }
`;

export const AuthButton = styled.button`
  background-color: rgb(16, 146, 70);
  color: white;
  border: 0px solid #ccc;
  border-radius: 40px;
  padding: 20px 120px;
  margin-top: 60px;
  margin-right: 60px;
  cursor: pointer;
  font-size: 17px;
  font-weight: bold;
  align-self: center;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 15px;
  font-style: italic;
`;

export const Select = styled.select`
  width: 50%;
  height: 50px;
  border: 0px solid #ccc;
  border-bottom: 2px solid #b2e3b1;
  padding: 10px;
  padding-left: 10px;
  font-size: 16px;
  margin: 10px;
  color: #b2e3b1;
  outline: none;
  transition: border-bottom 0.5s ease-in-out, color 0.5s ease-in-out;

  &::placeholder {
    color: #b2e3b1;
    transition: color 0.5s ease-in-out;
  }
`;

export const Option = styled.option`
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 15px;
  color: #4d4d4d;
`;
