import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Design from "./components/Design";
import Home from "./components/Home";
import Header from "./components/Header";
import Myproject from "./components/Myproject";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Design />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Aboutme" exact component={Aboutme} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
