import { ADD_TO_FAVORITES, SET_DEFAULT_RESULT } from "../action-creators";
import { REMOVE_FROM_FAVORITES } from "../action-creators";
import { SET_AUTOCOMPLETE_RESULTS } from "../action-creators";
import { SET_FIVEDAYS_RESULTS } from "../action-creators";
import { SET_CURRENT_WEATHER_RESULTS } from "../action-creators";
import { SET_LOCATION_BY_KEY } from "../action-creators";
const initialState = { favorites: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(({ id }) => id === action.payload),
      };
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
