import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./style/normalize.css";
import "./style/fonts.css";
import HomePage from "./components/pages/HomePage/HomePage";
import {Route} from "react-router-dom";
import BottomMenu from "./components/shared/BottomMenu/BottomMenu";
import RoomsAndPricesPage from "./components/pages/RoomsAndPricesPage/RoomsAndPricesPage";
import RoomPage from "./components/pages/RoomPage/RoomPage";
import {roomPageData} from "./data";
import FamilyVacationPage from "./components/pages/VacationPages/FamilyVacationPage";
import VacationForYourselfPage from "./components/pages/VacationPages/VacationForYourselfPage";
import RomanticVacationPage from "./components/pages/VacationPages/RomanticVacationPage";
import VacationWithFriendsPage from "./components/pages/VacationPages/VacationWithFriendsPage";


function App() {

    return (<>
            <Header/>

            <Route path='/family-vacation' exact
                   component={() => <FamilyVacationPage/>}/>

            <Route path='/vacation-for-yourself' exact
                   component={() => <VacationForYourselfPage/>}/>

            <Route path='/romantic-vacation' exact
                   component={() => <RomanticVacationPage/>}/>

            <Route path='/vacation-with-friends' exact
                   component={() => <VacationWithFriendsPage/>}/>

            <Route path='/modern/standart' exact
                   component={() => <RoomPage data={roomPageData.modernStandart}/>}/>

            <Route path='/modern/junior-suite' exact
                   component={() => <RoomPage data={roomPageData.modernJuniorSuite}/>}/>

            <Route path='/rooms-and-prices' exact
                   component={() => <RoomsAndPricesPage/>}/>

            <Route path='/' exact
                   component={() => <HomePage/>}/>

            <Footer/>

            <BottomMenu/>
        </>
    );
}

export default App;
