import { useEffect } from "react";
import { Route, Switch } from "react-router";
import "../styles/App.css";
import GetProfile from "./profile/GetProfile";
import Profile from "./profile/Profile";

function App() {
  useEffect(() => {}, []);
  const clientId = "595e7f1a34bfdd2138df";
  return (
    <div className="App">
      <h1>hello</h1>
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${clientId}`}
      >
        Authenticate
      </a>
      <Switch>
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
