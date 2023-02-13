export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
export const GET_COMPANY = "GET_COMPANY";
export const SET_USERNAME = "SET_USERNAME";
export const GET_JOBS = "GET_JOBS";

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
      } else {
        alert("Error fetching results");
      }
    } catch (err) {
      console.log(err);
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
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setUsernameAction = (name) => {
  return {
    type: SET_USERNAME,
    payload: name,
  };
};
