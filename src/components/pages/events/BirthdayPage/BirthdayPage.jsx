import React from "react";
import s from "./BirthdayPage.module.scss";
import {eventPagesData} from "../../../../data";
import decisionBlockImg from "../../../../img/events/wedding/decision.jpg";
import bannerImg from "../../../../img/events/birthday/birthdayBanner.jpg";
import bannerImgMobile from "../../../../img/events/birthday/birthdayBanner-mob.jpg";
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
import CenteredSlider from "../../../shared/sliders/CenteredSlider/CenteredSlider";

const BirthdayPage = () => {

    return <>

        <EventPageBanner fontSize={['75px', '75px', '52px']} mobileFontSize={['11.7vw', '13vw', '6.2vw']}
                         titles={['Незабываемый', 'день', 'рождения', 'в Крыму']}
                         icons={eventPagesData.weddingPages.weddingBannerIcons}
                         bannerImg={bannerImg}
                         bannerImgMobile={bannerImgMobile}
                         blackFont={true}
        />

        {/* Ваша семья начинается здесь */}

        <section className='section first'>
            <CenteredSlider title={'Организация под Ваши пожелания'} slides={eventPagesData.birthdayPage.centeredSlides} type={2}/>
        </section>


        <section className='section'>
            <EventTextImgBlock subtitle='Ваша семья' title='Начинается здесь' img={textImgBlockImg}/>
        </section>

        {/* Варианты выездной церемонии */}

        <section className='section'>
            <EventMainSlider slides={eventPagesData.weddingPages.weddingSlides} title={'Варианты выездной церемонии'} titleMobile={'Варианты церемоний'}/>
        </section>

        {/* Хотите знать сколько стоит выездная церемония? */}
        <section className='section'>
            <div className={s.weddingPriceBlock}>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <h4 className={s.title}>
                            <span>Хотите знать,</span>
                            <span>сколько стоит выездная</span>
                            <span>церемония?</span>
                        </h4>
                        <p>Оставьте свою почту и мы вышлем вам подробный
                            прайс с описанием</p>
                        <form className={'form'}>
                            <input className={'formInput'} placeholder={'Введите Ваше имя'} type="text"/>
                            <input className={'formInput'} placeholder={'Введите Вашу почту'} type="text"/>
                            <Button text={'Получить прайс'}/>
                        </form>
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
            <div className={s.weddingOrganizationBlock}>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <div className={s.contentWrapper}>
                            <h4 className={s.title}>
                                <span>Приезжайте</span>
                                <span>и наслаждайтесь безупречной</span>
                                <span>организацией</span>
                                <span>Вашей свадьбы</span>
                            </h4>
                            <form className={'form'}>
                                <input className={'formInput'} placeholder={'Введите Ваше имя'} type="text"/>
                                <input className={'formInput'} placeholder={'Введите Вашу почту'} type="text"/>
                                <Button
                                    text={window.matchMedia("(max-width: 768px").matches ? 'Узнать подробности' : 'Узнать подробности об организации свадьбы'}/>
                            </form>
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
                            slides={eventPagesData.weddingPages.weddingSpecialsSlides}/>
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
            <div className={s.weddingDecisionBlock}>
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

        <section className='section'>
            <MapSection/>
        </section>

    </>

};

export default BirthdayPage;