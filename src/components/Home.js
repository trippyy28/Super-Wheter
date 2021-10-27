import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { actions } from "../state";
import { useQuery } from "../useQuery";
import { addToFavorites, removeFromFavorites } from "../state/action-creators";
import GifLoader from "react-gif-loader";
import { margin } from "@mui/system";
const Home = () => {
  const TEL_AVIV_KEY = 215854;
  const { autocompleteResults } = useSelector((state) => state.home);
  const { fiveDaysResults } = useSelector((state) => state.home);
  // const { currentWeatherResults } = useSelector((state) => state.home);
  const { locationByKey } = useSelector((state) => state.home);
  const { favorites } = useSelector((state) => state.data);
  const [autocompleteTerm, setAutocompleteTerm] = useState("");
  const [isC, setIsC] = useState(true);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const query = useQuery();
  const cityKey = query.get("cityKey");

  useEffect(() => {
    dispatch(actions.fetchAutocompleteResults(autocompleteTerm));
    dispatch(actions.fetchFiveDaysOfDaily(cityKey));
    // dispatch(actions.fetchCurrentWeather(cityKey));
    dispatch(actions.fetchLocationByKey(cityKey));
  }, [autocompleteTerm, cityKey]);

  useEffect(() => {
    if (!cityKey) {
      console.log("yes");
      history.push(`/?cityKey=${TEL_AVIV_KEY}`);
    } else {
      console.log("no");
    }
  }, [query]);
  if (!cityKey) {
    return <div>Loading...</div>;
  }

  function setCityNameAndKey(name, key) {
    setAutocompleteTerm(name);
    history.push(`/?cityKey=${key}`);
    setToggle(false);
  }

  function setTermAndToggle(e) {
    setAutocompleteTerm(e);
    if (e == 0 && e == autocompleteTerm) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }

  function setCityKey(key) {
    dispatch(actions.fetchFiveDaysOfDaily(key));
  }

  function setFavorite(isFavorite) {
    if (isFavorite) {
      dispatch(addToFavorites(cityKey));
    } else {
      dispatch(removeFromFavorites(cityKey));
    }
  }
  //console log //
  // console.log("auto complete term", autocompleteTerm);
  // console.log("debug 5DAYSdefaultresults", fiveDaysResults);
  // console.log(cityKey, "citykey");
  // console.log("currentwheter", currentWeatherResults);

  const isFavorite = favorites.includes(cityKey);

  return (
    <div>
      <div className="home">
        <div className="input-div">
          <input
            value={autocompleteTerm}
            onChange={(event) => setTermAndToggle(event.target.value)}
            placeholder="Find city"
            className="cities-input"
          ></input>
          <button
            className="search-btn"
            onClick={(cityKey) => setCityKey(cityKey)}
          >
            Search
          </button>
          <div className="div-options">
            {autocompleteResults == undefined ? (
              <GifLoader
                loading={true}
                imageSrc="https://media.giphy.com/media/l378zKVk7Eh3yHoJi/source.gif"
                imageStyle={{ width: 150, marginLeft: -73 }}
                overlayBackground="rgba(0,0,0,0.5)"
              />
            ) : (
              toggle &&
              autocompleteResults.map((i) => {
                return (
                  <option
                    // onClick={() => setAutocompleteTerm(i.LocalizedName)}
                    // onClick={() => setCityKey(i.Key)}
                    onClick={(name, key) =>
                      setCityNameAndKey(i.LocalizedName, i.Key)
                    }
                    style={{ cursor: "pointer" }}
                  >
                    {i.LocalizedName}
                  </option>
                );
              })
            )}
          </div>
        </div>
      </div>
      <div className="wheter-card">
        {locationByKey == undefined ? (
          <p>Loading...</p>
        ) : (
          <div className="wheter-cityname-and-btn">
            {isFavorite ? (
              <button
                onClick={() => setFavorite(false)}
                style={{ cursor: "pointer" }}
                className="btn-fav"
              >
                unfavorite
              </button>
            ) : (
              <button
                style={{ cursor: "pointer" }}
                className="btn-fav"
                onClick={() => setFavorite(true)}
              >
                favorite
              </button>
            )}
            <h1>{locationByKey.LocalizedName}</h1>
            {isC ? (
              <button className="btn-convert" onClick={() => setIsC(!isC)}>
                convert to F
              </button>
            ) : (
              <button className="btn-convert" onClick={() => setIsC(!isC)}>
                convert to C
              </button>
            )}
          </div>
        )}
        <div className="wheter-gallery">
          {fiveDaysResults == undefined ? (
            <p></p>
          ) : (
            fiveDaysResults.DailyForecasts?.map((forecast) => {
              return (
                <div className="wheter">
                  <h2>{forecast.Date.slice(0, 10)}</h2>
                  <h2>{forecast.Date.slice(11, 16)}</h2>
                  {isC ? (
                    <h2>
                      {(
                        ((forecast.Temperature.Minimum.Value - 32) * 5) /
                        9
                      ).toFixed()}
                      C
                    </h2>
                  ) : (
                    <h2>
                      {forecast.Temperature.Minimum.Value}
                      {forecast.Temperature.Minimum.Unit}
                    </h2>
                  )}
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
