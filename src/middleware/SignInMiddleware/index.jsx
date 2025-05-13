import axios from "axios";
import Cookies from "js-cookie";

import { clearValuesS, setErrorS } from "../../redux/SignInSlice";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const SignInMiddleware = async (
  dispatch,
  email,
  username,
  password,
  confirmPassword,
  role
) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/signup`, {
      name: username,
      email,
      password,
      confirmPassword,
      role,
    });

    dispatch(clearValuesS(""));
  } catch (err) {
    dispatch(setErrorS(err.response.data.message));
    console.log(err.message);
  }
};
