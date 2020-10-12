import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./style/normalize.css";
import "./style/fonts.css";
import SlickSliderAfisha from "./components/shared/SlickSliderAfisha/SlickSliderAfisha";
import HomePage from "./components/HomePage/HomePage";
import Headline from "./components/shared/Headline/Headline";
import TextPlusImageBlock from "./components/shared/TextPlusImageBlock/TextPlusImageBlock";

function App() {
  return (
    <>
      <Header />
      <HomePage/>
      <SlickSliderAfisha></SlickSliderAfisha>
      {/*<Footer />*/}
    </>
  );
}

export default App;
