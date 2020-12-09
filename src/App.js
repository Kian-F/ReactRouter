import React from "react";
import "./App.css";
import Nav from "./Nav";
import Shop from "./Shop";
import About from "./About";
import Product from "./Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grow, Grid } from "@material-ui/core";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop/:id" component={Product} />
         
          <Route path="/shop" exact component={Shop} />
          
          <Route path="/About" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return <h3>Home</h3>;
};
export default App;
