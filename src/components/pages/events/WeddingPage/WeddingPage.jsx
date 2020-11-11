import React from "react";
import s from "./WeddingPage.module.scss";
import WeddingPageBanner from "./WeddingPageBanner/WeddingPageBanner";
import Accordeon from "../../../shared/Accordeon/Accordeon";
import firstBlockImg from "../../../../img/events/wedding/wedding.jpg"
import priceBlockImg from "../../../../img/events/wedding/weddingPriceBlock.jpg"
import Headline from "../../../shared/Headline/Headline";
import CirqleTip from "../../../shared/CirqleTip/CirqleTip";
import WeddingSlider from "../../../shared/sliders/eventsSliders/WeddingSlider/WeddingSlider";
import {eventPagesData} from "../../../../data";
import Button from "../../../shared/Button/Button";

const WeddingPage = () => {

    let [accordeonStatus, setAccordeonStatus] = React.useState(false);

    const handleClick = () => {
        setAccordeonStatus(!accordeonStatus)
    }

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
                            <Button text={'Получить прайс'} />
                        </form>
                    </div>
                </div>
            </div>
        </section>


        </>

};

export default WeddingPage;