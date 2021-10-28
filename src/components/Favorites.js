import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { actions } from "../state";
import { addToFavorites, removeFromFavorites } from "../state/action-creators";
import { withRouter } from "react-router-dom";
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
    history.push(`/?citykey=${id}`);
    // history.push("/?cityKey=328328");
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
            <div className="favs">
              <div className="fav">
                <h1>{i.name}</h1>

                <p
                  className="btn-check-wheter"
                  onClick={() => onFavoriteClicked()}
                >
                  Check Wheter
                </p>
                <button onClick={() => dispatch(removeFromFavorites(i.id))}>
                  remove
                </button>
                <h2></h2>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default withRouter(Favorites);
