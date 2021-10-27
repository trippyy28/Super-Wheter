import { autoComplete } from "../../api/API";
import { fiveDaysOfDaily } from "../../api/API";
import { currentWeather } from "../../api/API";
import { locationByKey } from "../../api/API";
import { setAutoCompleteResults } from "../action-creators";
import { setFiveDaysOfDailyResults } from "../action-creators";
import { setCurrentWeatherResults } from "../action-creators";
import { setLocationByKey, setLocationData } from "../action-creators";
import { toast } from "react-toastify";

export function fetchAutocompleteResults(term) {
  return function (dispatch) {
    return autoComplete(term).then(
      (results) => dispatch(setAutoCompleteResults(results)),
      (error) => {
        toast.error(
          "error occurred(autocompleteresults). please try again later"
        );
      }
    );
  };
}

export function fetchFiveDaysOfDaily(key) {
  return function (dispatch) {
    return fiveDaysOfDaily(key).then(
      (results) => dispatch(setFiveDaysOfDailyResults(results)),
      (error) => {
        toast.error("error occurred(fivedaysforecast). please try again later");
      }
    );
  };
}

export function fetchCurrentWeather(key) {
  return function (dispatch) {
    return currentWeather(key).then(
      (results) => dispatch(setCurrentWeatherResults(results)),
      (error) => {
        toast.error("error occurred(currentwheter). please try again later");
      }
    );
  };
}

export function fetchLocationByKey(key) {
  return function (dispatch) {
    return locationByKey(key).then(
      (results) => {
        dispatch(setLocationByKey(results));
        dispatch(setLocationData(results));
      },
      (error) => {
        toast.error("error occurred(locationbykey). please try again later");
      }
    );
  };
}
