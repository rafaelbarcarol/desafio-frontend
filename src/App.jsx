import React from "react";
import "./App.scss";
import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";
import Concept from "./components/Concept/Concept";
import Products from "./components/Products/Products";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import MobileBanner from "./components/MobileBanner/MobileBanner";

function App() {
  return (
    <div className="App">
      <Header />
      <MobileHeader />
      <MobileBanner />
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
