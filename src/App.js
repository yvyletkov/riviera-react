import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./style/normalize.css";
import "./style/fonts.css";
import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter, Route} from "react-router-dom";
import BottomMenu from "./components/shared/BottomMenu/BottomMenu";
import RoomsAndPricesPage from "./components/RoomsAndPricesPage/RoomsAndPricesPage";
import $ from "jquery"


function App() {

    const bodyEl = document.getElementsByTagName("body")[0];
    const enableScroll = () => bodyEl.classList.remove("fixed");
    React.useEffect( function () {
        const sliderElementsObj = $("#verticalSliderWrapper *");
        const sliderElementsArr = Object.values(sliderElementsObj);
        const whiteBg = Object.values($('#whiteGridSliderBg'))[0];
        const h2El = Object.values($('h2'));
        const h4El = Object.values($('h4'));
        // console.log('index:', sliderElementsArr.indexOf(whiteBg));
        // console.log('sliderElementsArr', sliderElementsArr);
        $(document).on('touchstart', (e) => {
            // console.log(e.target === whiteBg);
            // console.log('target: ', e.target);
            // console.log(whiteBg);
            if (!sliderElementsArr.includes(e.target) || e.target === whiteBg || h2El.includes(e.target) || h4El.includes(e.target)) enableScroll()
        })
    }, []);

    return (
        <BrowserRouter>
            <Header/>
            <Route path='/rooms-and-prices' component={RoomsAndPricesPage}/>
            <Route exact path='/' component={HomePage}/>
            <Footer/>
            <BottomMenu/>
        </BrowserRouter>

    );
}

export default App;
