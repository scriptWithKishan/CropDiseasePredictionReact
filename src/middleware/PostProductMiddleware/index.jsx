import axios from "axios";
import Cookies from "js-cookie";

import { setError, clearProduct } from "../../redux/AddProductSlice";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const PostProductMiddleware = (formData) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/product`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    dispatch(clearProduct());
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};
