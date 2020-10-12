import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./style/normalize.css";
import "./style/fonts.css";
import SlickSliderAfisha from "./components/shared/SlickSliderAfisha/SlickSliderAfisha";
import HomePage from "./components/HomePage/HomePage";
import Headline from "./components/shared/Headline/Headline";

function App() {
  return (
    <>
      <Header />
      <HomePage/>
      {/*<SlickSliderAfisha></SlickSliderAfisha>*/}
      {/*<Footer />*/}
      <div className='container'>
          <Headline/>
      </div>
    </>
  );
}

export default App;
