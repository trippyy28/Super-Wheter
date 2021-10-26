import { SET_AUTOCOMPLETE_RESULTS } from "../action-creators";
import { SET_FIVEDAYS_RESULTS } from "../action-creators";
import { SET_CURRENT_WEATHER_RESULTS } from "../action-creators";
import { SET_LOCATION_BY_KEY } from "../action-creators";
const initialState = { favorites: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTOCOMPLETE_RESULTS:
      return {
        ...state,
        autocompleteResults: action.payload,
      };
    case SET_FIVEDAYS_RESULTS:
      return {
        ...state,
        fiveDaysResults: action.payload,
      };
    case SET_CURRENT_WEATHER_RESULTS:
      return {
        ...state,
        currentWeatherResults: action.payload,
      };
    case SET_LOCATION_BY_KEY:
      return {
        ...state,
        locationByKey: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

// react component -> useSelector -> state has changed somehow -> component is rerendered
