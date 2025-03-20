import axios from "axios";
import Cookies from "js-cookie";

import { setEmail, setPassword, setError } from "../../redux/LoginSlice";

import { setRedirect } from "../../redux/HeaderSlice";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const LoginMiddleware = async (dispatch, email, password, navigate) => {
  try {
    const response = await axios.post(`h${API_BASE_URL}/api/auth/login`, {
      email,
      password,
    });

    const token = response.data.token;
    Cookies.set("token", token, { expires: 7 });
    navigate("/");

    dispatch(setEmail(""));
    dispatch(setPassword(""));
    dispatch(setRedirect(false));
  } catch (err) {
    const error = err.response;

    if (error) {
      dispatch(setError(error.data.message));
    } else {
      dispatch(setError("Network Error! Please try again."));
    }
  }
};
