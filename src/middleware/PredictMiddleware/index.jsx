import axios from "axios";
import Cookies from "js-cookie";

import { setError, clearLoading, setResult } from "../../redux/PredictSlice";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const PredictMiddleware = (formData) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/predict/`, formData, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    dispatch(setResult(response.data));
  } catch (err) {
    dispatch(setError("Prediction failed. Try again."));
    console.error("Prediction error:", err);
  } finally {
    dispatch(clearLoading(false));
  }
};

export default PredictMiddleware;
