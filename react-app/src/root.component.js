import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";

export default function Root(props) {
  return (
    <Router basename="/react">
      <div>
        <Link to="/">React Home</Link>&nbsp;&nbsp;
        <Link to="/about">Ract About</Link>
      </div>
      <Switch>
        <Route path="/" exact="true" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
}
