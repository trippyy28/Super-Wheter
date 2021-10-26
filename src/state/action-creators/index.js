export const SET_AUTOCOMPLETE_RESULTS = "SET_AUTOCOMPLETE_RESULTS";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const SET_FIVEDAYS_RESULTS = "SET_FIVEDAYS_RESULTS";
export const SET_CURRENT_WEATHER_RESULTS = "SET_CURRENT_WEATHER_RESULTS";
export const SET_LOCATION_BY_KEY = "SET_LOCATION_BY_KEY";
export const SET_LOCATION_DATA = "SET_LOCATION_DATA";

export const setLocationData = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOCATION_DATA,
      payload: data,
    });
  };
};

export const addToFavorites = (cityId) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_FAVORITES,
      payload: cityId,
    });
  };
};

export const removeFromFavorites = (cityId) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_FAVORITES,
      payload: cityId,
    });
  };
};

export const setAutoCompleteResults = (results) => {
  return (dispatch) => {
    dispatch({
      type: SET_AUTOCOMPLETE_RESULTS,
      payload: results,
    });
  };
};

export const setFiveDaysOfDailyResults = (results) => {
  return (dispatch) => {
    dispatch({
      type: SET_FIVEDAYS_RESULTS,
      payload: results,
    });
  };
};

export const setCurrentWeatherResults = (results) => {
  return (dispatch) => {
    dispatch({
      type: SET_CURRENT_WEATHER_RESULTS,
      payload: results,
    });
  };
};

export const setLocationByKey = (results) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOCATION_BY_KEY,
      payload: results,
    });
  };
};
