import "./App.css";
import Header from "./components/Header";
import Whether from "./components/Home";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Favorites from "./components/Favorites";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Header />
          <Route exact path="/">
            <Whether />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </div>
      </Switch>
      <ToastContainer autoClose={20000} />
    </BrowserRouter>
  );
}

export default App;
