import "./App.css";
import Header from "./components/Header";
import Whether from "./components/Home";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Favorites from "./components/Favorites";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Header />
          <Route exact path="/">
            <Whether />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
