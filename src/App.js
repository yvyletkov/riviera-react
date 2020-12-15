import React, {Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import {medicalSpaPage, roomPageData, singlePromotionPages} from "./data";
import {lazy} from '@loadable/component'
import preloaderImg from './img/preloader.svg';
import "./App.scss";
import "./style/normalize.css";
import "./style/fonts.css";
import './style/rodal.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import BottomMenu from "./components/shared/BottomMenu/BottomMenu";
import GridSliderPage from "./components/GridSliderPage";
import MedicalSpaPage from "./components/pages/MedicalSpaPage/MedicalSpaPage";
import BookingPage from "./components/pages/BookingPage/BookingPage";

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
const FAQPage = lazy(() => import('./components/pages/FAQPage/FAQPage'));
const SpaPrices = lazy(() => import('./components/pages/infrastructure/SpaPrices'));
const VacanciesPage = lazy(() => import('./components/pages/VacanciesPage/VacanciesPage'));
const TransferPage = lazy(() => import("./components/pages/TransferPage/TransferPage"));

function App() {

    return (<>
            <Header/>
            <Suspense fallback={<div style={{height: 'calc(100vh - 70px)', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img width={'150px'} src={preloaderImg} alt/>
            </div>}>

                <Switch>
                    <Route path='/transfer' exact
                           component={() => <TransferPage {...singlePromotionPages.dlyaKrymchan}/>}/>

                    <Route path='/booking' exact
                           component={() => <BookingPage/>}/>

                    <Route path='/vacancies' exact
                           component={() => <VacanciesPage/>}/>

                    <Route path='/infrastructure/spa-services-and-prices' exact
                           component={() => <SpaPrices/>}/>

                    <Route path='/medical-spa' exact
                           component={() => <MedicalSpaPage {...medicalSpaPage}/>}/>

                    <Route path='/faq' exact
                           component={() => <FAQPage/>}/>

                    <Route path='/grid' exact
                           component={() => <GridSliderPage/>}/>

                    <Route path='/restaurant' exact
                           component={() => <Restaurants/>}/>

                    <Route path='/infrastructure/beach-and-pools' exact
                           component={() => <BeachAndPools/>}/>

                    <Route path='/infrastructure/aqua-thermal' exact
                           component={() => <AquaThermalPage/>}/>

                    <Route path='/infrastructure/gym' exact
                           component={() => <GymPage/>}/>

                    <Route path='/spa' exact
                           component={() => <SpaPage/>}/>

                    <Route path='/offers/otdyh-dlya-krymchan' exact
                           component={() => <SinglePromotionPage {...singlePromotionPages.dlyaKrymchan}/>}/>

                    <Route path='/offers/dlitelnoe-prozhivaniye' exact
                           component={() => <SinglePromotionPage {...singlePromotionPages.dlitelnoeProzh}/>}/>

                    <Route path='/offers/barhatnyi-sezon' exact
                           component={() => <SinglePromotionPage {...singlePromotionPages.barhatnyiSezon}/>}/>

                    <Route path='/offers/letniy-otdyh' exact
                           component={() => <SinglePromotionPage {...singlePromotionPages.letniyOtdyh}/>}/>

                    <Route path='/offers' exact
                           component={() => <PromotionsPage/>}/>

                    <Route path='/contact' exact
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
                    <Route path='/rooms/standart-modern' exact
                           component={() => <SingleRoomPage data={roomPageData.modernStandart}/>}/>

                    <Route path='/rooms/improved-modern/' exact
                           component={() => <SingleRoomPage data={roomPageData.modernImproved}/>}/>

                    <Route path='/rooms/semilux-modern' exact
                           component={() => <SingleRoomPage data={roomPageData.modernSemilux}/>}/>

                    <Route path='/rooms/lux-modern' exact
                           component={() => <SingleRoomPage data={roomPageData.modernLux}/>}/>

                    <Route path='/rooms/vip-suite' exact
                           component={() => <SingleRoomPage data={roomPageData.spaSuite}/>}/>

                    <Route path='/rooms/disabled-modern' exact
                           component={() => <SingleRoomPage data={roomPageData.modernDisabled}/>}/>

                    <Route path='/rooms/president-lux-modern' exact
                           component={() => <SingleRoomPage data={roomPageData.modernPresidentLux}/>}/>

                    {/* CLASSIC ROOMS */}
                    <Route path='/rooms/standart-classic' exact
                           component={() => <SingleRoomPage data={roomPageData.classicStandart}/>}/>

                    <Route path='/rooms/improved-classic' exact
                           component={() => <SingleRoomPage data={roomPageData.classicImproved}/>}/>

                    <Route path='/rooms/semilux-classic' exact
                           component={() => <SingleRoomPage data={roomPageData.classicSemilux}/>}/>

                    <Route path='/rooms/lux-classic' exact
                           component={() => <SingleRoomPage data={roomPageData.classicLux}/>}/>

                    <Route path='/rooms/president-lux-classic' exact
                           component={() => <SingleRoomPage data={roomPageData.classicPresidentLux}/>}/>

                    <Route path='/nomera-i-tseny' exact
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
