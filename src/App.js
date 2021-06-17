import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Design from "./components/Design";
import Main from "./components/Main";
import Header from "./components/Header";
import Myproject from "./components/Myproject";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Design />
      <Main />

      <Myproject />
      <Aboutme />
      <Footer />
    </Router>
  );
}

export default App;
