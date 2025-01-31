import React, { useState, useEffect } from "react";
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
  const [cartClicked, setCartClicked] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));

    if (storedCart && Array.isArray(storedCart)) {
      setCartCount(storedCart.length);
    }
  }, []);

  const handleCartClick = () => {
    setCartClicked(true);

    setTimeout(() => {
      setCartClicked(false);
    }, 100);
  };

  const handleAddToCart = (newCartCount) => {
    setCartCount(newCartCount);
  };

  return (
    <div className="App">
      <Header onCartClick={handleCartClick} cartCount={cartCount} />
      <MobileHeader />
      <Banner />
      <MobileBanner />
      <Categories />
      <MobileCategories />
      <Concept />
      <Products cartClicked={cartClicked} onAddToCart={handleAddToCart} />
      <MobileProducts />
      <News />
      <Footer />
    </div>
  );
}

export default App;
