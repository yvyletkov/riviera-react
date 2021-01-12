import React from "react";
import s from "./SinglePromotionPage.module.scss";
import MapSection from "../../../shared/MapSection/MapSection";
import walletImg from "../../../../img/wallet.png";
import RoomsSlider from "../../../shared/sliders/RoomsSlider/RoomsSlider";
import {eventPagesData, homePageData, micePagesData} from "../../../../data";
import HeadlineCenter from "../../../shared/HeadlineCenter/HeadlineCenter";
import GridSlider from "../../../shared/sliders/GridSlider/GridSlider";
import CenteredSlider from "../../../shared/sliders/CenteredSlider/CenteredSlider";
import GallerySlider from "../../../shared/sliders/GallerySlider/GallerySlider";
import ContactForm from "../../../additional/ContactForm/ContactForm";
import formBlockDefaultBg from "../../../../img/promos/Fotograf-Krym-YAlta.jpg";
import WidthSpecialsSlider from "../../../shared/sliders/WidthSpecialsSlider/WidthSpecialsSlider";


const SinglePromotionPage = ({
                                 withConferenceRooms = false,
                                 bannerImg,
                                 title,
                                 description,
                                 hiddenDescription,
                                 firstCol,
                                 secondCol,
                                 formBlockText = 'Погрузитесь в мир зимней гармонии',
                                 formBlockBg = formBlockDefaultBg,
                                 formBlockBtnText = 'Узнать свободные даты'
                             }) => {

    console.log(title)

    React.useEffect(() => document.title = `${title[0]} ${title[1]} – Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    const [showDescr, setShowDescr] = React.useState(false);


    return (<>
            <section className='section'>
                <div className={s.wrapper} style={{background: `center top url(${bannerImg})`}}/>
            </section>


            <section className='section'>
                <div className={s.contentWrapper}>
                    <div className={s.container}>

                        <div className={s.topRow}>
                            <h1 className={s.title}>
                                <span>{title[0]}</span>
                                <span dangerouslySetInnerHTML={{__html: title[1]}}/>
                            </h1>
                            <div className={s.textContent}>
                                <p dangerouslySetInnerHTML={{__html: description}}/>
                                <div className={s.btn} onClick={() => setShowDescr(!showDescr)}><b>Политика оплаты</b>
                                </div>
                                <div className={showDescr ? s.description + ' ' + s.active : s.description}>
                                    <img src={walletImg} alt="Кошелек"/>
                                    <div dangerouslySetInnerHTML={{__html: hiddenDescription}}/>
                                </div>
                            </div>
                        </div>

                        <div className={s.flexWrapper}>

                            <div dangerouslySetInnerHTML={{__html: firstCol}} className={s.col}/>
                            <div dangerouslySetInnerHTML={{__html: secondCol}} className={s.col}/>

                        </div>

                    </div>
                </div>
            </section>

            {withConferenceRooms && <section className="section">
                <WidthSpecialsSlider slides={micePagesData.widthSpecialsSliderConference} title={"Наши залы"}/>
            </section>}

            <section className='section'>
                <div className={s.formBlock}>
                    <div className={s.wrapper}
                         style={{background: `center no-repeat url(${formBlockBg})`, backgroundSize: 'cover'}}>
                        <div className={s.container}>
                            <h4 className={s.title}>
                                <span>{formBlockText}</span>

                            </h4>

                            <ContactForm submitBtnText={formBlockBtnText}
                                         formName={`Форма со страницы АКЦИИ/СПЕЦПРЕДЛОЖЕНИЯ '${window.location.href}'`}
                                         withEmail withPhone
                                         swalText={'мы свяжемся с Вами в самое ближайшее время!'}/>

                        </div>
                    </div>
                </div>
                {/*</section>*/}

                {/*<section className='section'>*/}
                {/*    <HeadlineCenter title={'Наши корпуса'} style={{marginBottom: '50px'}}/>*/}
                <RoomsSlider subtitle={'Корпус'} title={'Модерн'} textContent={eventPagesData.modernDescr}
                             data={eventPagesData.modernSlides} noPaddingTop/>

                <RoomsSlider lastOfTwo={true} subtitle={'Корпус'} title={'Классик'}
                             textContent={eventPagesData.classicDescr} data={eventPagesData.classicSlides}/>
            </section>

            <section className='section'>
                <GridSlider slides={homePageData.gridSlides}/>
            </section>

            <section className='section'>
                <CenteredSlider title={'Сегодня в программе'} slides={homePageData.centeredSlides} type={'home-page'}/>
            </section>

            <section className='section'>
                <GallerySlider slides={homePageData.gallerySlides}/>
            </section>

            <section className='section last'>
                <MapSection/>
            </section>
        </>
    );
};

export default SinglePromotionPage;
