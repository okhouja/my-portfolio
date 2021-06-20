import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Design from "./components/Design";
import Home from "./components/Home";
import Header from "./components/Header";
import Myproject from "./components/Myproject";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Design />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutme" exact component={Aboutme} />
        <Route path="/myproject" exact component={Myproject} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
