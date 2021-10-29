import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { actions } from "../state";
import { addToFavorites, removeFromFavorites } from "../state/action-creators";

const Favorites = () => {
  const { favorites, locations } = useSelector((state) => state.data);
  const { currentWeatherResults } = useSelector((state) => state.data);
  const history = useHistory();

  const adaptedFavorites = favorites.map((locationId) =>
    locations.find(({ id }) => locationId + "" === id)
  );
  console.log("locations", JSON.stringify(locations));
  console.log("favorites", favorites);
  console.log("currentWheter", currentWeatherResults);
  console.log(adaptedFavorites, "adaadsdas");

  const dispatch = useDispatch();
  const onFavoriteClicked = (id) => {
    history.push(`/?cityKey=${id}`);
  };
  if (favorites == undefined && locations) {
    return <div>Loading...</div>;
  }

  return (
    <div className="favorites">
      {adaptedFavorites[0] == undefined ? (
        <h1>No Favorites</h1>
      ) : (
        adaptedFavorites.map((i) => {
          return (
            <div className="fav">
              <h2>{i.name}</h2>
              <p
                className="btn-check-wheter"
                onClick={() => onFavoriteClicked(i.id)}
              >
                Check Wheter
              </p>
              <button
                className="btn-remove-from-fav"
                onClick={() => dispatch(removeFromFavorites(i.id))}
              >
                REMOVE
              </button>
              <h2></h2>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Favorites;
