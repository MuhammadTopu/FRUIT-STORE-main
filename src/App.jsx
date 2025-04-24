import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Pages
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Products from "./pages/Products";


// Optional: Home content
import Hero from "./components/Hero/Hero";
import Menus from "./components/Menus/Menus";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Banner3 from "./components/Banner/Banner3";

const App = () => {
  return (
    <Router>
      <NavBar />
      <main className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Menus />
              <Banner />
              <Banner2 />
              <Banner3 />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
