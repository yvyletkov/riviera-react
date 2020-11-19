import React from "react";
import s from "./HenPartyPage.module.scss";
import {eventPagesData} from "../../../../data";
import decisionBlockImg from "../../../../img/events/wedding/decision.jpg";
import bannerImg from "../../../../img/events/wedding/weddingPageBanner.jpg";
import bannerImgMobile from "../../../../img/events/wedding/weddingPageBanner-mob.jpg";
import textImgBlockImg from "../../../../img/events/wedding/wedding.jpg";

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

const HenPartyPage = () => {

    return <>

        <EventPageBanner fontSize={['68px', '82px', '52px']} mobileFontSize={['11.7vw', '19.2vw', '6.2vw']}
                         titles={['Ваша', 'свадьба', 'мечты', 'в Крыму']}
                         icons={eventPagesData.weddingPages.weddingBannerIcons} bannerImg={bannerImg}
                         bannerImgMobile={bannerImgMobile}/>

        {/* Идеальное место для проведения */}

        <section className='section first'>
            <AdvantagesBlock title={'Идеальное место для проведения'} icons={eventPagesData.weddingPages.weddingIcons}/>
        </section>

        {/* Для Вас душевная атмосфера */}

        <section className='section'>
            <EventTextImgBlock subtitle='Для Вас' title='душевная атмосфера' img={textImgBlockImg}
                               text={'Любви нужно пространство! Особенный день для пары должен пройти там, где будет всё необходимое для трогательной церемонии, зажигательной свадебной программы, удивительных сюрпризов, выступления артистов и кавер-групп.'}
                               forWedding={true}
                               listArray={['незабываемый мальчишник и девичник,', 'свадебная фото- и видеосессия,', 'сборы невесты,', 'романтичная первая ночь.']}/>
        </section>

        {/* Слайдеры корпусов */}

        <section className='section'>
            <RoomsSlider subtitle={'Корпус'} title={'Модерн'} textContent={eventPagesData.modernDescr}
                         data={eventPagesData.modernSlides}/>

            <RoomsSlider lastOfTwo={true} subtitle={'Корпус'} title={'Классик'}
                         textContent={eventPagesData.classicDescr} data={eventPagesData.classicSlides}/>
        </section>

        {/* Вас ждет изысканная еда */}

        <section className='section'>
            <KitchenBlock/>
        </section>

        {/* Дополнительные услуги */}

        <section className='section'>
            <SpecialsSlider subtitle={'Дополнительные'} title={'услуги'} btnText={'Получить прайс по услугам'}
                            slides={eventPagesData.weddingPages.weddingSpecialsSlides}/>
        </section>

        {/* Вам предстоит легкое решение */}

        <section className='section'>
            <div className={s.weddingDecisionBlock}>
                <div className={s.wrapper}>
                    <div className={s.grid}>

                        <div className={s.imageBlock}>
                            <img src={decisionBlockImg} alt="Riviera Sunrise"/>
                        </div>

                        <div className={s.textBlock}>
                            <div className={s.textContent}>
                                <Headline subtitle={'Вам предстоит'} title={'Легкое решение'}/>

                                <p>
                                    Лучше принимать его, владея полной информацией. Получите на свою почту все
                                    необходимые материалы для принятия решения о проведении девичника в нашем отеле.
                                </p>

                                <form className={'form'}>
                                    <input className={'formInput'} placeholder={'Введите Ваше имя'} type="text"/>
                                    <input className={'formInput'} placeholder={'Введите Вашу почту'} type="text"/>
                                    <Button text={'Скачать коммерческое предложение'}/>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        {/* Карта */}

        <section className='section last'>
            <MapSection/>
        </section>

    </>

};

export default HenPartyPage;