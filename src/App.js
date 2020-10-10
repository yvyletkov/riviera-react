import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./style/normalize.css";
import "./style/fonts.css";
import SlickSliderAfisha from "./components/shared/SlickSliderAfisha/SlickSliderAfisha";

function App() {
  return (
    <>
      <Header />
      <SlickSliderAfisha></SlickSliderAfisha>
      <Footer />
    </>
  );
}

export default App;
