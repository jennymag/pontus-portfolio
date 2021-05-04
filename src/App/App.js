import "../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StickyNav from "../StickyNav/StickyNav";
import Landing from "../Landing/Landing";
import Case from "../Projects/Case";

function App() {
  return (
    <>
      <Router>
        <StickyNav />
        <Switch>
          <Route path="/:title">
            <Case />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
