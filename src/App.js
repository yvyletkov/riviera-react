import React, {Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import {roomPageData} from "./data";
import {lazy} from '@loadable/component'
import preloaderImg from './img/preloader.svg';
import "./App.scss";
import "./style/normalize.css";
import "./style/fonts.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import BottomMenu from "./components/shared/BottomMenu/BottomMenu";

const HomePage = lazy(() => import('./components/pages/HomePage/HomePage'));
const RoomsAndPricesPage = lazy(() => import('./components/pages/RoomsAndPricesPage/RoomsAndPricesPage'));
const SingleRoomPage = lazy(() => import('./components/pages/SingleRoomPage/SingleRoomPage'));
const FamilyVacationPage = lazy(() => import('./components/pages/VacationPages/FamilyVacationPage'));
const VacationForYourselfPage = lazy(() => import('./components/pages/VacationPages/VacationForYourselfPage'));
const RomanticVacationPage = lazy(() => import('./components/pages/VacationPages/RomanticVacationPage'));
const VacationWithFriendsPage = lazy(() => import('./components/pages/VacationPages/VacationWithFriendsPage'));
const WeddingPage = lazy(() => import('./components/pages/events/WeddingPage/WeddingPage'));
const VisitingCeremonyPage = lazy(() => import('./components/pages/events/VisitingCeremonyPage/VisitingCeremonyPage'));
const ConferencesPage = lazy(() => import('./components/pages/mice/ConferencesPage/ConferencesPage'));
const ForumPage = lazy(() => import('./components/pages/mice/ForumPage/ForumPage'));
const BirthdayPage = lazy(() => import('./components/pages/events/BirthdayPage/BirthdayPage'));
const HenPartyPage = lazy(() => import('./components/pages/events/HenPartyPage/HenPartyPage'));
const EventTourismPage = lazy(() => import('./components/pages/mice/EventTourismPage/EventTourismPage'));
const TrainingsPage = lazy(() => import('./components/pages/mice/TraningsPage/TrainingsPage'));
const IntensivePage = lazy(() => import('./components/pages/mice/IntensivePage/IntensivePage'));
const TeamBuildingPage = lazy(() => import('./components/pages/mice/TeamBuildingPage/TeamBuildingPage'));
const BachelorPartyPage = lazy(() => import('./components/pages/events/BachelorPartyPage/BachelorPartyPage'));
const ExhibitionPage = lazy(() => import('./components/pages/mice/ExhibitionPage/ExhibitionPage'));
const NotFoundPage = lazy(() => import('./components/additional/NotFoundPage/NotFoundPage'));
const ContactsPage = lazy(() => import('./components/pages/СontactsPage/ContactsPage'));
const PromotionsPage = lazy(() => import('./components/pages/PromotionsPage/PromotionsPage'));
const SinglePromotionPage = lazy(() => import('./components/pages/PromotionsPage/SinglePromotionPage/SinglePromotionPage'));
const SpaPage = lazy(() => import('./components/pages/infrastructure/SpaPage'));
const BeachAndPools = lazy(() => import('./components/pages/infrastructure/BeachAndPools/BeachAndPools'));
const GymPage = lazy(() => import('./components/pages/infrastructure/GymPage'));
const AquaThermalPage = lazy(() => import('./components/pages/infrastructure/AquaThermalPage/AquaThermalPage'));
const Restaurants = lazy(() => import('./components/pages/infrastructure/Restaurants/Restaurants'));

function App() {

    return (<>
            <Header/>
            <Suspense fallback={<div style={{height: 'calc(100vh - 70px)', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img width={'150px'} src={preloaderImg} alt/>
            </div>}>

                <Switch>
                    <Route path='/infrastructure/restaurants' exact
                           component={() => <Restaurants/>}/>

                    <Route path='/infrastructure/beach-and-pools' exact
                           component={() => <BeachAndPools/>}/>

                    <Route path='/infrastructure/aqua-thermal' exact
                           component={() => <AquaThermalPage/>}/>

                    <Route path='/infrastructure/gym' exact
                           component={() => <GymPage/>}/>

                    <Route path='/infrastructure/spa-complex' exact
                           component={() => <SpaPage/>}/>

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
                           render={() => <HomePage/>}/>

                    <Route component={NotFoundPage}/>

                </Switch>
            </Suspense>
            <Footer/>

            <BottomMenu/>
        </>
    );
}

export default App;
