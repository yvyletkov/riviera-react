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
import WeddingPage from "./components/pages/events/WeddingPage/WeddingPage";
import VisitingCeremonyPage from "./components/pages/events/VisitingCeremonyPage/VisitingCeremonyPage";
import ConferencesPage from "./components/pages/mice/ConferencesPage/ConferencesPage";
import ForumPage from "./components/pages/mice/ForumPage/ForumPage";
import BirthdayPage from "./components/pages/events/BirthdayPage/BirthdayPage";
import HenPartyPage from "./components/pages/events/HenPartyPage/HenPartyPage";
import EventTourismPage from "./components/pages/mice/EventTourismPage/EventTourismPage";
import TrainingsPage from "./components/pages/mice/TraningsPage/TrainingsPage";

function App() {

    return (<>
                <Header/>
                <Route path='/trainings' exact
                       component={() => <TrainingsPage/>}/>

                <Route path='/hen-party' exact
                       component={() => <HenPartyPage/>}/>
 
                <Route path='/birthday' exact
                       component={() => <BirthdayPage/>}/>

                <Route path='/event-tourism' exact
                       component={() => <EventTourismPage/>}/>

                <Route path='/birthday' exact
                       component={() => <BirthdayPage/>}/>

                <Route path='/forum' exact
                       component={() => <ForumPage/>}/>

                <Route path='/conference' exact
                       component={() => <ConferencesPage/>}/>

                <Route path='/visiting-ceremony' exact
                       component={() => <VisitingCeremonyPage/>}/>

                <Route path='/wedding' exact
                       component={() => <WeddingPage/>}/>

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

            <Route path='/modern/semi-lux' exact
                   component={() => <RoomPage data={roomPageData.modernSemiLux}/>}/>

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
