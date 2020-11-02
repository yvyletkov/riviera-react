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
import RoomPage from "./components/RoomPage/RoomPage";


function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Route exact path='/modern/standart' component={() => <RoomPage campusName={'Модерн'} roomName={'Стандарт'}/>}/>
            <Route path='/rooms-and-prices' component={RoomsAndPricesPage}/>
            <Route exact path='/' component={HomePage}/>
            <Footer/>
            <BottomMenu/>
        </BrowserRouter>

    );
}

export default App;
