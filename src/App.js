import React from "react";
import Design from "./components/Design";
import Header from "./components/Header";
import Myproject from "./components/Myproject";
import Aboutme from "./components/Aboutme";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Design />

      <Myproject />
      <Aboutme />
    </React.Fragment>
  );
}

export default App;
