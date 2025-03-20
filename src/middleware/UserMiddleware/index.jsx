import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import { setUser, setError } from "../../redux/UserSlice";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const UserMiddleware = async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;

    const response = await axios.get(`${API_BASE_URL}/api/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(setUser(response.data.dataDetails));
  } catch (err) {
    dispatch(setError(err.message));
  }
};
