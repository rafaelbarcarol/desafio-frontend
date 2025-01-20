import React from "react";
import "./App.scss";
import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";
import Concept from "./components/Concept/Concept";
import Products from "./components/Products/Products";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Banner />
      <Categories />
      <Concept />
      <Products />
      <News />
      <Footer />
    </div>
  );
}

export default App;
