import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./component/Navigation";
import Home from "./pages/Home";
import History from "./pages/History";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/history">
          <History />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
