import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import dataReducer from "./dataReducer";

const reducers = combineReducers({
  home: homeReducer,
  data: dataReducer,
});

export default reducers;
