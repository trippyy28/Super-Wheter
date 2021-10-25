import { bgcolor } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, actions } from "../state";
// import icon1 from "../assets/icons/Sunny.png";
const Home = () => {
  const TEL_AVIV_KEY = 215854;
  const { autocompleteResults } = useSelector((state) => state.home);
  const { fiveDaysResults } = useSelector((state) => state.home);
  const { currentWeatherResults } = useSelector((state) => state.home);
  const { locationByKey } = useSelector((state) => state.home);
  const [autocompleteTerm, setAutocompleteTerm] = useState("");
  const [cityKey, setCityKey] = useState(TEL_AVIV_KEY);
  const [toggle, setToggle] = useState(false);
  const [city, setCity] = useState([]);
  const dispatch = useDispatch();
  const { addToFavorites, removeFromFavorites } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    dispatch(actions.fetchAutocompleteResults(autocompleteTerm));
    dispatch(actions.fetchFiveDaysOfDaily(cityKey));
    // dispatch(actions.fetchCurrentWeather(cityKey));
    dispatch(actions.fetchLocationByKey(cityKey));
  }, [autocompleteTerm, cityKey]);

  //functions

  function func1(name, key) {
    setAutocompleteTerm(name);
    setCityKey(key);
    setToggle(false);
  }

  function func2(e) {
    setAutocompleteTerm(e);
    if (e == 0 && e == autocompleteTerm) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }

  function func3(key) {
    dispatch(actions.fetchFiveDaysOfDaily(key));
  }
  //console log //
  // console.log("debug autocomplete results", autocompleteResults);
  console.log("auto complete term", autocompleteTerm);
  // console.log("debug 5DAYSdefaultresults", fiveDaysResults);
  // console.log("tel aviv", currentWeatherResults);
  // console.log("citykey", cityKey);
  // console.log("location by key", locationByKey);

  return (
    <div>
      <div className="home">
        <div className="input-div">
          <input
            value={autocompleteTerm}
            onChange={(event) => func2(event.target.value)}
            placeholder="Find city"
            className="cities-input"
          ></input>
          <button className="search-btn" onClick={(cityKey) => func3(cityKey)}>
            Search
          </button>
          {autocompleteResults == undefined ? (
            <p className="loading">loading...</p>
          ) : (
            toggle &&
            autocompleteResults.map((i) => {
              return (
                <option
                  // onClick={() => setAutocompleteTerm(i.LocalizedName)}
                  // onClick={() => setCityKey(i.Key)}
                  onClick={(name, key) => func1(i.LocalizedName, i.Key)}
                  style={{ cursor: "pointer" }}
                >
                  {i.LocalizedName}
                </option>
              );
            })
          )}
        </div>
      </div>
      <div className="wheter-card">
        {locationByKey == undefined ? (
          <h1>loading..</h1>
        ) : (
          <div className="wheter-cityname-and-btn">
            <button style={{ cursor: "pointer" }} className="btn-fav">
              Favorite
            </button>
            <h1>{locationByKey.LocalizedName}</h1>
            <h1 style={{ visibility: "hidden" }}>pseudo</h1>
          </div>
        )}
        <div className="wheter-gallery">
          {fiveDaysResults == undefined ? (
            <p>Loading...</p>
          ) : (
            fiveDaysResults.DailyForecasts.map((forecast) => {
              return (
                <div className="wheter">
                  <h2>{forecast.Date.slice(0, 10)}</h2>
                  <h2>{forecast.Date.slice(11, 16)}</h2>
                  <h2>
                    {forecast.Temperature.Minimum.Value}
                    {forecast.Temperature.Minimum.Unit}
                  </h2>
                  <img
                    src={
                      require(`../assets/icons/${forecast.Day.Icon}.png`)
                        .default
                    }
                  ></img>
                  {/* <h2>{forecast.Day.Icon} </h2> */}
                  <h2>{forecast.Day.IconPhrase}</h2>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
