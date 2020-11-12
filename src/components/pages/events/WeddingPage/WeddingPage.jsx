import React from "react";
import s from "./WeddingPage.module.scss";
import WeddingPageBanner from "./WeddingPageBanner/WeddingPageBanner";
import Accordeon from "../../../shared/Accordeon/Accordeon";
import firstBlockImg from "../../../../img/events/wedding/wedding.jpg";
import kitchenImg1 from "../../../../img/events/wedding/kitchen1.jpg";
import kitchenImg2 from "../../../../img/events/wedding/kitchen2.jpg";
import Headline from "../../../shared/Headline/Headline";
import CirqleTip from "../../../shared/CirqleTip/CirqleTip";
import WeddingSlider from "../../../shared/sliders/eventsSliders/WeddingSlider/WeddingSlider";
import {eventPagesData} from "../../../../data";
import Button from "../../../shared/Button/Button";
import Slider from "react-slick";
import HeadlineCenter from "../../../shared/HeadlineCenter/HeadlineCenter";
import SpecialsSlider from "../../../shared/sliders/SpecialsSlider/SpecialsSlider";
import LargeGallerySlider from "../../../shared/sliders/LargeGallerySlider/LargeGallerySlider";


const WeddingPage = () => {

    let [accordeonStatus, setAccordeonStatus] = React.useState(false);

    const handleClick = () => {
        setAccordeonStatus(!accordeonStatus)
    }

    const settings = {
        infinite: false,
        slidesToShow: 5,
        arrows: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    variableWidth: true,
                    slidesToShow: 1,
                }
            },
        ]
    };


    return <>

        <WeddingPageBanner/>

        <section className='section first'>
            <div className={s.weddingFirstBlockWrapper}>
                <div className={s.container}>
                    <div className={s.background}/>
                    <div className={s.textContent}>
                        <Headline subtitle={'Ваша семья'} title={'Начинается здесь'}/>
                        <CirqleTip accordeonStatus={accordeonStatus} onClick={handleClick}/>
                        <Accordeon withBtn={false} zeroHeight={true} status={accordeonStatus}>
                            <p>
                                Любви нужно пространство! Особенный день для пары должен пройти там, где будет всё
                                необходимое для трогательной церемонии, зажигательной свадебной программы, удивительных
                                сюрпризов, выступления артистов и кавер-групп.
                            </p>
                        </Accordeon>
                        <p>
                            <h5><b>Молодожёнов ждёт:</b></h5>
                            <ul>
                                <li>незабываемый мальчишник и девичник,</li>
                                <li>свадебная фото- и видеосессия,</li>
                                <li>сборы невесты;</li>
                                <li>романтичная первая ночь.</li>
                            </ul>
                        </p>
                    </div>
                    <img src={firstBlockImg} alt={"Свадьба"}/>
                </div>
            </div>
        </section>

        <section className='section'>
            <WeddingSlider slides={eventPagesData.weddingSlides}/>
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
            <div className={s.weddingIconsBlock}>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <HeadlineCenter title={'Доверьтесь профессионалам'}/>

                        <div className={s.sliderWrapper}>
                            <Slider {...settings}>

                                {eventPagesData.weddingIcons.map((item, index) => {
                                    return <div key={index}>
                                        <div className={s.iconWrapper}>
                                            <img src={item.img} alt=""/>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                })}

                            </Slider>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        {/* Приезжайте и наслаждайтесь пезупречной организацией */}

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
            <div className={s.weddingKitchenBlock}>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <img className={s.leftImg} src={kitchenImg1} alt=""/>
                        <img className={s.rightImg} src={kitchenImg2} alt=""/>
                        <div className={s.textContent}>
                            <Headline subtitle={'Вас ожидает'} title={'Изысканная кухня'}/>
                            <p>
                                Наши профессиональные повара во главе с бренд-шефом Андреем Поляшовым создали уникальные
                                композиции из нескольких курсов для ценителей вкусной и сытной кухни. Гости будут в
                                восторге!
                            </p>
                            <p><b>Получите на свою почту полное меню банкета!</b></p>
                            <Button text={"Получить меню"}
                                    style={!window.matchMedia("(max-width: 768px").matches ? {width: "230px"} : {}}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Дополнительные услуги */}

        <section className='section'>
            <SpecialsSlider subtitle={'Дополнительные'} title={'услуги'} btnText={'Получить прайс по услугам'}
                            slides={eventPagesData.specialsSlides}/>
        </section>

        {/* Лучше один ращ увидеть */}

        <section className='section'>
            <LargeGallerySlider blockName={'Лучше один раз увидеть'} slides={eventPagesData.largeGallerySlides}
                                slideTitle={'Лучше один раз увидеть'}/>
        </section>

        {/* Как выбрать площадку для проведения свадьбы*/}

        <section className='section'>
            <div className={s.weddingPlacesBlock}>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <div className={s.topRow}>
                            <h4 className={s.title}>
                                <span>Как выбрать</span>
                                <span>площадку для проведения</span>
                                <span>свадьбы</span>
                            </h4>
                            <p>
                                Свадьба в Крыму – сложное и большое по уровню организации мероприятие. Поэтому в
                                качестве площадки должен выступать отель с большим ассортиментом банкетных залов, с
                                крытыми и открытыми площадками для выездной церемонии. Играет немаловажную роль опыт в
                                организации мероприятий и профессиональное оборудование на площадках. От выбора места
                                проведения свадьбы будет зависеть многое. Важно определить идеальное соотношение цены,
                                качества и уровня сервиса для того, чтобы создать действительно незабываемое событие.
                            </p>
                        </div>



                        <Slider {...settings}>
                            {eventPagesData.weddingPlacesSlides.map( item => {
                                return <div className={s.sliderItemWrapper}></div>
                            })}
                        </Slider>

                    </div>
                </div>
            </div>
        </section>

    </>

};

export default WeddingPage;