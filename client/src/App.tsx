import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//! Pages
import MainPage from "./Pages/MainPage/MainPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="top">
        <Navbar />
      </div>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <MainPage />} />
          <Route exact path="/signin" component={() => <SignInPage />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
