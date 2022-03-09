import { getBooksByCategory } from "../../api";
import { dispatch } from "../store";
import { SET_CATEGORY, SET_ERROR, SET_LOADING, SET_BOOKS } from "../types";

export const setLoading = (state) => {
  dispatch({ type: SET_LOADING, payload: state });
};

export const setError = (state) => {
  dispatch({ type: SET_ERROR, payload: state });
};

export const setBooksByCategory = async (category) => {
  setLoading(true);
  setError(false);

  const obj = await getBooksByCategory(category);
  if (obj.success) dispatch({ type: SET_BOOKS, payload: obj.data.data });
  else setError(true);

  setLoading(false);
};

export const setCategory = (category) => {
  dispatch({ type: SET_CATEGORY, payload: category });
};
