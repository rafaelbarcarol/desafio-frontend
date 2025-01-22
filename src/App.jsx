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
import MobileCategories from "./components/MobileCategories/MobileCategories";
import MobileProducts from "./components/MobileProducts/MobileProducts";

function App() {
  return (
    <div className="App">
      <Header />
      <MobileHeader />
      <Banner />
      <MobileBanner />
      <Categories />
      <MobileCategories />
      <Concept />
      <Products />
      <MobileProducts />
      <News />
      <Footer />
    </div>
  );
}

export default App;
