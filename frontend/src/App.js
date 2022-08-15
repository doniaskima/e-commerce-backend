import React from 'react';
import "./App.css";
import Header from "./components/Header"
import Home from "./components/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app">
          <Switch>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
     </Router>
   </div>
 )
  
}

export default App