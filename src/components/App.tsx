import { Route, Switch } from "react-router";
import "../styles/App.css";
import Home from "./home/Home";
import Menu from "./menu/Menu";
import GetProfile from "./profile/GetProfile";
import Profile from "./profile/Profile";

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route exact path="/get-profile">
          <GetProfile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
