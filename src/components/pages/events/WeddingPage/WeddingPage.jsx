import React from "react";
import s from "./WeddingPage.module.scss";
import WeddingPageBanner from "./WeddingPageBanner/WeddingPageBanner";
import Accordeon from "../../../shared/Accordeon/Accordeon";
import firstBlockImg from "../../../../img/events/wedding/1.jpg"
import Headline from "../../../shared/Headline/Headline";
import CirqleTip from "../../../shared/CirqleTip/CirqleTip";
import WeddingSlider from "../../../shared/sliders/eventsSliders/WeddingSlider/WeddingSlider";

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
            <WeddingSlider/>
        </section>

        </>

};

        export default WeddingPage;