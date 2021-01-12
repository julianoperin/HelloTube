import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//! Pages
import MainPage from "./Pages/MainPage/MainPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <MainPage />} />
      </Switch>
    </Router>
  );
}

export default App;
