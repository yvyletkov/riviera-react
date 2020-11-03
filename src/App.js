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
import RoomPage from "./components/RoomPage/RoomPage";
import {roomPageData} from "./data";


function App() {

    return (
        <BrowserRouter>
            <Header/>

            <Route path='/modern/standart' exact
                   component={() => <RoomPage data={roomPageData.modernStandart}/>}/>

            <Route path='/rooms-and-prices'
                   component={() => <RoomsAndPricesPage/>}/>

            <Route path='/' exact
                   component={() => <HomePage/>}/>

            <Footer/>
            <BottomMenu/>
        </BrowserRouter>
    );
}

export default App;
