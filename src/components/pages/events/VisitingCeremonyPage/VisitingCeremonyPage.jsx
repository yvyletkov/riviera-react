import React from "react";
import s from "./VisitingCeremonyPage.module.scss";
import {eventPagesData} from "../../../../data";
import decisionBlockImg from "../../../../img/events/wedding/decision.jpg";
import bannerImg from "../../../../img/events/visiting-ceremony/banner.jpg";
// import bannerImgMobile from "../../../../img/events/visiting-ceremony/banner.jpg";
import textImgBlockImg from "../../../../img/events/visiting-ceremony/visiting-ceremony.jpg";

import EventPageBanner from "../EventPageBanner/EventPageBanner";
import Headline from "../../../shared/Headline/Headline";
import EventMainSlider from "../../../shared/sliders/EventMainSlider/EventMainSlider";
import Button from "../../../shared/Button/Button";
import SpecialsSlider from "../../../shared/sliders/SpecialsSlider/SpecialsSlider";
import LargeGallerySlider from "../../../shared/sliders/LargeGallerySlider/LargeGallerySlider";
import RoomsSlider from "../../../shared/sliders/RoomsSlider/RoomsSlider";
import GalleryWeddingSlider from "../../../shared/sliders/GalleryWeddingSlider/GalleryWeddingSlider";
import MapSection from "../../../shared/MapSection/MapSection";
import AdvantagesBlock from "../../../shared/AdvantagesBlock/AdvantagesBlock";
import KitchenBlock from "../../../shared/KitchenBlock/KitchenBlock";
import BlackBlock from "../../../shared/BlackBlock/BlackBlock";
import EventTextImgBlock from "../../../shared/EventTextImgBlock/EventTextImgBlock";
import EventSquaresSlider from "../../../shared/sliders/EventSquaresSlider/EventSquaresSlider";
import ContactForm from "../../../additional/ContactForm/ContactForm";

const WeddingPage = () => {

    return <>

        <EventPageBanner fontSize={['68px', '82px', '52px']} mobileFontSize={['9.7vw', '12.3vw', '8.2vw']}
                         titles={['Выездная', 'свадебная', 'церемония', 'в Крыму']}
                         icons={eventPagesData.weddingPages.weddingCeremonyBannerIcons} bannerImg={bannerImg} bannerImgMobile={bannerImg}/>

        {/* Ваша семья начинается здесь */}

        <section className='section first'>
            <EventTextImgBlock subtitle='Ваша семья' title='Начинается здесь' img={textImgBlockImg}
                               text={'Любви нужно пространство! Особенный день для пары должен пройти там, где будет всё необходимое для трогательной церемонии, зажигательной свадебной программы, удивительных сюрпризов, выступления артистов и кавер-групп.'}
                               forWedding={true}
                               listArray={['незабываемый мальчишник и девичник,','свадебная фото- и видеосессия,','сборы невесты,','романтичная первая ночь.']}/>
        </section>

        {/* Варианты выездной церемонии */}

        <section className='section'>
            <EventMainSlider slides={eventPagesData.weddingPages.weddingMainSlides} title={'Варианты выездной церемонии'} titleMobile={'Варианты церемоний'}/>
        </section>

        {/* Хотите знать сколько стоит выездная церемония? */}
        <section className='section'>
            <div className={s.visitingCeremonyPriceBlock}>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <h4 className={s.title}>
                            <span>Хотите знать,</span>
                            <span>сколько стоит выездная</span>
                            <span>церемония?</span>
                        </h4>
                        <p>Оставьте свою почту и мы вышлем вам подробный
                            прайс с описанием</p>

                        <ContactForm submitBtnText={'Получить прайс'} formName={`Форма "Хотите знать, сколько стоит выездная церемония"`} withEmail
                                     swalText={'мы отправим прайс-лист на указанную Вами почту в самое ближайшее время!'}/>

                    </div>
                </div>
            </div>
        </section>

        {/* Доверьтесь профессионалам */}
        <section className='section'>
            <AdvantagesBlock title={'Доверьтесь профессионалам'} icons={eventPagesData.weddingPages.weddingIcons}/>
        </section>

        {/* Приезжайте и наслаждайтесь безупречной организацией */}

        <section className='section'>
            <div className={s.visitingCeremonyOrganizationBlock}>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <div className={s.contentWrapper}>
                            <h4 className={s.title}>
                                <span>Приезжайте</span>
                                <span>и наслаждайтесь безупречной</span>
                                <span>организацией</span>
                                <span>Вашей свадьбы</span>
                            </h4>

                            <ContactForm submitBtnText={window.matchMedia("(max-width: 768px").matches ? 'Узнать подробности' : 'Узнать подробности об организации свадьбы'}
                                         formName={`Форма "Приезжайте и наслаждайтесь безупречной организацией" (Узнать подробности об организации свадьбы)`} withEmail
                                         swalText={'скоро подробности будут на указанной Вами почте!'}/>


                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Вас ждет изысканная еда */}

        <section className='section'>
            <KitchenBlock/>
        </section>

        {/* Дополнительные услуги */}

        <section className='section'>
            <SpecialsSlider subtitle={'Дополнительные'} title={'услуги'} btnText={'Получить прайс по услугам'}
                            slides={eventPagesData.specialsSlides} text={'Для успешной организации мероприятия в отеле Riviera Sunrise Resort & SPA, вы можете воспользоваться дополнительными услугами. Мы создавали их с желанием сделать ваше мероприятие ещё более насыщенным и подарить гостям комфорт и удивительные впечатления!'}/>
        </section>

        {/* Лучше один раз увидеть */}

        <section className='section'>
            <LargeGallerySlider blockName={'Лучше один раз увидеть'}
                                slides={eventPagesData.weddingPages.weddingLargeGallerySlides}
                                slideTitle={'Лучше один раз увидеть'}
                                videoMode={true}/>
        </section>

        {/* Как выбрать площадку для проведения свадьбы*/}

        <section className='section'>
            <EventSquaresSlider/>
        </section>

        {/* Сомневаетесь в площадке ?*/}

        <section className='section'>
            <BlackBlock/>
        </section>

        {/* Слайдеры корпусов */}

        <section className='section'>
            <RoomsSlider subtitle={'Корпус'} title={'Модерн'} textContent={eventPagesData.modernDescr}
                         data={eventPagesData.modernSlides}/>

            <RoomsSlider lastOfTwo={true} subtitle={'Корпус'} title={'Классик'}
                         textContent={eventPagesData.classicDescr} data={eventPagesData.classicSlides}/>
        </section>

        {/* Фотографии со свадьбы */}

        <section className='section'>
            <GalleryWeddingSlider blockName={'Фотографии со свадьбы'}
                                  slides={eventPagesData.weddingPages.weddingGallerySlides}/>
        </section>

        {/* Вам предстоит ответсвенное решение */}

        <section className='section'>
            <div className={s.visitingCeremonyDecisionBlock}>
                <div className={s.wrapper}>
                    <div className={s.grid}>

                        <div className={s.imageBlock}>
                            <img src={decisionBlockImg} alt="Riviera Sunrise"/>
                        </div>

                        <div className={s.textBlock}>
                            <div className={s.textContent}>
                                <Headline subtitle={'Вам предстоит'} title={'Ответственное решение'}/>

                                <p>
                                    Лучше принимать его, владея полной информацией. Получите на свою почту все
                                    необходимые материалы для принятия решения о проведении свадьбы в нашем отеле.
                                </p>

                                <ContactForm submitBtnText={'Скачать коммерческое предложение'} formName={`Форма "Вам предстоит ответсвенное решение" (скачать коммерческое предложение)`} withEmail
                                             swalText={'мы отправим всю необходимую информацию на указанную Вами почту в самое ближайшее время!'}/>


                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </section>

        {/* Карта */}

        <section className='section'>
            <MapSection/>
        </section>

    </>

};

export default WeddingPage;