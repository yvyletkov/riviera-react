import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./style/normalize.css";
import "./style/fonts.css";
import HomePage from "./components/pages/HomePage/HomePage";
import {Route, Switch} from "react-router-dom";
import BottomMenu from "./components/shared/BottomMenu/BottomMenu";
import RoomsAndPricesPage from "./components/pages/RoomsAndPricesPage/RoomsAndPricesPage";
import SingleRoomPage from "./components/pages/SingleRoomPage/SingleRoomPage";
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
import IntensivePage from "./components/pages/mice/IntensivePage/IntensivePage";
import TeamBuildingPage from "./components/pages/mice/TeamBuildingPage/TeamBuildingPage";
import BachelorPartyPage from "./components/pages/events/BachelorPartyPage/BachelorPartyPage";
import ExhibitionPage from "./components/pages/mice/ExhibitionPage/ExhibitionPage";
import NotFoundPage from "./components/additional/NotFoundPage/NotFoundPage";
import ContactsPage from "./components/pages/СontactsPage/ContactsPage";
import PromotionsPage from "./components/pages/PromotionsPage/PromotionsPage";
import SinglePromotionPage from "./components/pages/PromotionsPage/SinglePromotionPage/SinglePromotionPage";

function App() {

    return (<>
            <Header/>

            <Switch>
                <Route path='/promotions/barhatnyi-sezon' exact
                       component={() => <SinglePromotionPage/>}/>

                <Route path='/promotions' exact
                       component={() => <PromotionsPage/>}/>

                <Route path='/contacts' exact
                       component={() => <ContactsPage/>}/>

                <Route path='/exhibition' exact
                       component={() => <ExhibitionPage/>}/>

                <Route path='/team-building' exact
                       component={() => <TeamBuildingPage/>}/>

                <Route path='/intensive' exact
                       component={() => <IntensivePage/>}/>

                <Route path='/trainings' exact
                       component={() => <TrainingsPage/>}/>

                <Route path='/bachelor-party' exact
                       component={() => <BachelorPartyPage/>}/>

                <Route path='/hen-party' exact
                       component={() => <HenPartyPage/>}/>

                <Route path='/birthday' exact
                       component={() => <BirthdayPage/>}/>

                <Route path='/event-tourism' exact
                       component={() => <EventTourismPage/>}/>

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

                {/* MODERN ROOMS*/}
                <Route path='/modern/standart' exact
                       component={() => <SingleRoomPage data={roomPageData.modernStandart}/>}/>

                <Route path='/modern/improved' exact
                       component={() => <SingleRoomPage data={roomPageData.modernImproved}/>}/>

                <Route path='/modern/semi-lux' exact
                       component={() => <SingleRoomPage data={roomPageData.modernSemilux}/>}/>

                <Route path='/modern/lux' exact
                    component={() => <SingleRoomPage data={roomPageData.modernLux}/>}/>

                <Route path='/spa-suite' exact
                       component={() => <SingleRoomPage data={roomPageData.spaSuite}/>}/>

                <Route path='/modern/disabled' exact
                       component={() => <SingleRoomPage data={roomPageData.modernDisabled}/>}/>

                <Route path='/modern/president-lux' exact
                       component={() => <SingleRoomPage data={roomPageData.modernPresidentLux}/>}/>

                {/* CLASSIC ROOMS */}
                <Route path='/classic/standart' exact
                       component={() => <SingleRoomPage data={roomPageData.classicStandart}/>}/>

                <Route path='/classic/improved' exact
                       component={() => <SingleRoomPage data={roomPageData.classicImproved}/>}/>

                <Route path='/classic/semi-lux' exact
                       component={() => <SingleRoomPage data={roomPageData.classicSemilux}/>}/>

                <Route path='/classic/lux' exact
                       component={() => <SingleRoomPage data={roomPageData.classicLux}/>}/>

                <Route path='/classic/president-lux' exact
                       component={() => <SingleRoomPage data={roomPageData.classicPresidentLux}/>}/>

                <Route path='/rooms-and-prices' exact
                       component={() => <RoomsAndPricesPage/>}/>

                <Route path='/' exact
                       component={() => <HomePage/>}/>

                <Route component={NotFoundPage}/>

            </Switch>
            <Footer/>

            <BottomMenu/>
        </>
    );
}

export default App;
