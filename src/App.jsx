import React from "react";
import "./App.scss";
import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";
import Concept from "./components/Concept/Concept";

function App() {
  return (
    <div className="App">
      <Banner />
      <Categories />
      <Concept />
    </div>
  );
}

export default App;
