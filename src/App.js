import React from "react";
import Design from "./components/Design";
import Main from "./components/Main";
import Header from "./components/Header";
import Myproject from "./components/Myproject";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Design />
      <Main />

      <Myproject />
      <Aboutme />
      <Footer />
    </React.Fragment>
  );
}

export default App;
