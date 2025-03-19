import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import { setUser, setError } from "../../redux/UserSlice";

export const UserMiddleware = async (dispatch) => {
  try {
    const token = Cookies.get("token");

    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;

    const response = await axios.get(
      `http://localhost:4000/api/user/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(setUser(response.data.dataDetails));
  } catch (err) {
    dispatch(setError(err.message));
  }
};
