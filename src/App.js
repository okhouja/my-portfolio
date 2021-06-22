import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Design from "./components/Design";
import Home from "./components/Home";
import Header from "./components/Header";
import Myprojects from "./components/Myprojects";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Data from "./data.json";

function App() {
  const [project, setProject] = useState([]);

  return (
    <Router>
      <Header />
      <Design />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutme" exact component={Aboutme} />
        <Route
          path="/myprojects"
          exact
          component={Myprojects}
          projects={Data}
        />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
