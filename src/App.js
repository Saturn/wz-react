import logo from "./logo.svg";
import "./App.css";
import QueryComponent from "./Components/QueryComponent";
import StatsComponent from "./Components/StatsComponent";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <QueryComponent />
          </Route>
          <Route path="/stats/:platform/:username">
            <StatsComponent />
          </Route>
          <Route>
            <p>404 :(</p>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
