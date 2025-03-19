import axios from "axios";
import Cookies from "js-cookie";

import { setError, clearProduct } from "../../redux/AddProductSlice";

export const PostProductMiddleware = (formData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/product",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    dispatch(clearProduct());
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};
