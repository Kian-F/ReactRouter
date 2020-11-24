import React from "react";
import Nav from "./Nav";
import Shop from "./Shop";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    
      <Router>
        <div>
        <Nav />
        <Switch>
        <Route path='/home' exact component={Home}/>
        <Route path="/shop" component={Shop} />
        <Route path='/About' component={About}/>
        </Switch>
        </div>
      </Router>
      
    
  );
}

const Home=()=>{
return(
  <h3>Home</h3>
)
}
export default App;
