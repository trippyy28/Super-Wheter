import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_LOCATION_DATA,
} from "../action-creators";
const initialState = {
  favorites: [],
  locations: [],
};

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
        favorites: state.favorites.filter((id) => id !== action.payload),
      };

    case SET_LOCATION_DATA:
      if (state.locations.find(({ id }) => id === action.payload.Key)) {
        return state;
      }
      return {
        ...state,
        locations: [
          ...state.locations,
          {
            id: action.payload.Key,
            name: action.payload.LocalizedName,
          },
        ],
      };

    default:
      return state;
  }
};

export default reducer;

// react component -> useSelector -> state has changed somehow -> component is rerendered
