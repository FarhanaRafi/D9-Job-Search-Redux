export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
export const GET_COMPANY = "GET_COMPANY";
export const SET_USERNAME = "SET_USERNAME";
export const GET_JOBS = "GET_JOBS";
export const GET_LOADING = "GET_LOADING";
export const GET_ERROR = "GET_ERROR";

export const addToFavoritesAction = (data) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: data,
  };
};

export const removeFromFavoritesAction = (i) => {
  return {
    type: REMOVE_FROM_FAVORITE,
    payload: i,
  };
};

export const getCompanyActionAsync = (q) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?company=" +
          q.companyName
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_COMPANY,
          payload: data,
        });
        dispatch({
          type: GET_LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: GET_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_ERROR,
          payload: true,
        });
      }
    } catch (err) {
      dispatch({
        type: GET_LOADING,
        payload: false,
      });
      dispatch({
        type: GET_ERROR,
        payload: true,
      });
    }
  };
};

export const getJobActionAsync = (query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
          query +
          "&limit=20"
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
        dispatch({
          type: GET_LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: GET_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_LOADING,
        payload: false,
      });
      dispatch({
        type: GET_ERROR,
        payload: true,
      });
    }
  };
};

export const setUsernameAction = (name) => {
  return {
    type: SET_USERNAME,
    payload: name,
  };
};
