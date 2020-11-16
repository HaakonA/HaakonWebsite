
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import GitHub from "./components/GitHub";

import { Link, BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div className="fixed-top">
            <Link className="Link" to="/about">
              About
            </Link>
            <Link className="Link" to="/contact">
              Contact
            </Link>
            <Link className="Link" to="/">
              Home
            </Link>
            <Link className="Link" to="/github">
              Github
            </Link>
          </div>
          <Route path="/about" component={About}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/github" component={GitHub}></Route>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
