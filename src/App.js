import React from "react";
import "./App.scss";
// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./style/normalize.css";
import "./style/fonts.css";
import HomePage from "./components/HomePage/HomePage";


function App() {
  return (
    <>
      <Header />
      <HomePage/>
      {/*<Footer />*/}
    </>
  );
}

export default App;
