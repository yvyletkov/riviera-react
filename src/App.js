import React, {Suspense} from "react";
import popupImg from "./img/14febpopup.jpg"
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
import BottomMenu from "./components/additional/BottomMenu/BottomMenu";
import swal from "sweetalert2";
import CookiesNotification from "./components/additional/CookieNotificationWindow/CookiesNotification";
import TagManager from 'react-gtm-module'
import Quiz from "./components/shared/Quiz/Quiz";
import quizImgRanneeBronirovanie from "./img/quiz/quiz-img.png";
import quizImgRanneeBronirovanieMob from "./img/quiz/quiz-mob.jpg";
import quizImgLetniyOtdyh from "./img/quiz/quiz-img1.png";
import quizImgLetniyOtdyhMob from "./img/quiz/mob-quiz1.jpg";
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
const BookingPage = lazy(() => import('./components/pages/BookingPage/BookingPage'));
const MedicalSpaPage = lazy(() => import('./components/pages/MedicalSpaPage/MedicalSpaPage'));
const ReviewsPage = lazy(() => import('./components/pages/ReviewsPage/ReviewsPage'));
const TransferPage = lazy(() => import("./components/pages/TransferPage/TransferPage"));
const PartnersPage = lazy(() => import("./components/pages/PartnersPage/PartnersPage"));
const BlogPage = lazy(() => import("./components/pages/BlogPage/BlogPage"));
const AfishaPage = lazy(() => import("./components/pages/AfishaPage/AfishaPage"));
const PoolSchedulePage = lazy(() => import("./components/pages/PoolSchedulePage/PoolSchedulePage"));
const DocumentsPage = lazy(() => import("./components/pages/DocumentsPage/DocumentsPage"));
const NewYearPage = lazy(() => import("./components/pages/NewYearPage/NewYearPage"));
const LoveDayPage = lazy(() => import("./components/pages/LoveDayPage/LoveDayPage"));
const AnimationPage = lazy(() => import("./components/pages/AnimationPage/AnimationPage"));
const DefenderOfTheFatherlandDay = lazy(() => import("./components/pages/DefenderOfTheFatherlandDay/DefenderOfTheFatherlandDay"));
const March8Page = lazy(() => import("./components/pages/March8Page/March8Page"));
const TheGrilledPage = lazy(() => import("./components/pages/infrastructure/Restaurants/TheGrilledPage/TheGrilledPage"));
const CrimeaTourPage = lazy(() => import("./components/pages/CrimeaTourPage/CrimeaTourPage"));
const ExcursionsBookingPage = lazy(() => import("./components/pages/ExcursionsBookingPage/ExcursionsBookingPage"));
const LanguageCampPage = lazy(() => import("./components/pages/LanguageCampPage/LanguageCampPage"));
const SearchPage = lazy(() => import("./components/pages/SearchPage/SearchPage"));

function App() {

    const tagManagerArgs = {
        gtmId: 'GTM-PG3X9N2',
        dataLayerName: 'dataLayer'
    }

    TagManager.initialize(tagManagerArgs)

    return (<>
            <div className='popupWrapper'>
                <div>
                    <img src={popupImg} alt=""/>
                </div>
            </div>
            <Header/>
            {window.matchMedia('(max-width: 767px)').matches &&
            <div style={{height: '65px'}}/>}
            <Suspense fallback={<div style={{
                height: 'calc(100vh - 70px)',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <img width={'150px'} src={preloaderImg} alt=''/>
            </div>}>

                <Switch>

                    <Route path='/search'
                           component={() => <SearchPage/>}/>

                    <Route path='/excursions' exact
                           component={() => <ExcursionsBookingPage/>}/>

                    <Route path='/language-camp' exact
                           component={() => <LanguageCampPage/>}/>

                    <Route path='/crimea-tour' exact
                           component={() => <CrimeaTourPage/>}/>

                    <Route path='/the-grilled' exact
                           component={() => <TheGrilledPage/>}/>

                    <Route path='/8-march' exact
                           component={() => <March8Page/>}/>

                    <Route path='/23-february' exact
                           component={() => <DefenderOfTheFatherlandDay/>}/>

                    <Route path='/animation' exact
                           component={() => <AnimationPage/>}/>

                    <Route path='/love-day' exact
                           component={() => <LoveDayPage/>}/>

                    <Route path='/new-year' exact
                           component={() => <NewYearPage/>}/>

                    <Route path='/documents' exact
                           component={() => <DocumentsPage/>}/>

                    <Route path='/afisha' exact
                           component={() => <AfishaPage/>}/>

                    <Route path='/pool-schedule' exact
                           component={() => <PoolSchedulePage/>}/>

                    <Route path='/blog' exact
                           component={() => <BlogPage/>}/>

                    <Route path='/partners' exact
                           component={() => <PartnersPage/>}/>

                    <Route path='/reviews' exact
                           component={() => <ReviewsPage/>}/>

                    <Route path='/transfer' exact
                           component={() => <TransferPage/>}/>

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

                    <Route path='/offers/rannee-bronirovanie' exact
                           component={() => <SinglePromotionPage {...singlePromotionPages.ranneeBronirovanie}
                                                                 formBlockBtnText='Отправить'
                                                                 quiz={<Quiz img={quizImgRanneeBronirovanie}
                                                                             imgMob={quizImgRanneeBronirovanieMob}/>}
                           />}/>

                    <Route path='/offers/otdyh-dlya-krymchan' exact
                           component={() => <SinglePromotionPage {...singlePromotionPages.dlyaKrymchan}
                                                                 formBlockBtnText='Отправить'
                           />}/>

                    <Route path='/offers/dlitelnoe-prozhivaniye' exact
                           component={() => <SinglePromotionPage {...singlePromotionPages.dlitelnoeProzh}
                                                                 formBlockBtnText='Отправить'/>}/>

                    <Route path='/offers/krymskaya-zima' exact
                           component={() =>
                               <SinglePromotionPage {...singlePromotionPages.barhatnyiSezon}
                                                    formBlockBtnText='Отправить'
                                                    whiteText/>}/>

                    <Route path='/offers/letniy-otdyh' exact
                           component={() => <SinglePromotionPage {...singlePromotionPages.letniyOtdyh}
                                                                 formBlockBtnText='Отправить'
                                                                 whiteText
                                                                 quiz={<Quiz img={quizImgLetniyOtdyh}
                                                                             imgMob={quizImgLetniyOtdyhMob}/>}/>}/>

                    <Route path='/offers/online-conferences' exact
                           component={() =>
                               <SinglePromotionPage {...singlePromotionPages.onlineConferences}
                                                    withConferenceRooms
                                                    formBlockBtnText='Отправить'
                               />}/>

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
                           component={() => <SingleRoomPage
                               data={roomPageData.classicPresidentLux}/>}/>

                    <Route path='/nomera-i-tseny' exact
                           component={() => <RoomsAndPricesPage/>}/>

                    <Route path='/' exact
                           render={() => <HomePage/>}/>

                    <Route component={NotFoundPage}/>

                </Switch>
            </Suspense>
            <Footer/>

            <BottomMenu/>

            <CookiesNotification/>
        </>
    );
}

export default App;
