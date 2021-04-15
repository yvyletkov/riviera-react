import s from "./EventSquaresSlider.module.scss";
import CirqleTip from "../../CirqleTip/CirqleTip";
import Accordeon from "../../Accordeon/Accordeon";
import Slider from "react-slick";
import {eventPagesData} from "../../../../data";
import React from "react";
import LazyLoadImgComponent from "../../../additional/LazyLoadImgComponent/LazyLoadImgComponent";

const EventSquaresSlider = () => {

    let [accordeonStatus, setAccordeonStatus] = React.useState(false);

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

    return <div id='places' className={s.wrapper}>
        <div className={s.container}>
            <div className={s.topRow}>
                <h4 className={s.title}>
                    <span>Как выбрать</span>
                    <span>площадку для проведения</span>
                    <span>свадьбы</span>
                </h4>
                <div className={s.tipWrapper}>
                <CirqleTip style={{marginLeft: "-30px"}} accordeonStatus={accordeonStatus}
                           onClick={() => setAccordeonStatus(!accordeonStatus)}/>
                </div>
                <div className={s.textContent}>
                    <Accordeon withBtn={false} zeroHeight={true} status={accordeonStatus}>
                        <p>
                            Свадьба в Крыму – сложное и большое по уровню организации мероприятие. Поэтому в
                            качестве площадки должен выступать отель с большим ассортиментом банкетных
                            залов, с
                            крытыми и открытыми площадками для выездной церемонии. Играет немаловажную роль
                            опыт в
                            организации мероприятий и профессиональное оборудование на площадках. От выбора
                            места
                            проведения свадьбы будет зависеть многое. Важно определить идеальное соотношение
                            цены,
                            качества и уровня сервиса для того, чтобы создать действительно незабываемое
                            событие.
                        </p>
                    </Accordeon>
                </div>
            </div>


            <div className={s.sliderWrapper}>
                <Slider {...settings} slidesToShow={4}>
                    {eventPagesData.weddingPages.weddingPlacesSlides.map((item, index) => {
                        return <div key={index}>
                            <div className={s.sliderItemWrapper}>
                                <div>{index + 1}</div>
                                <LazyLoadImgComponent src={item.img} alt={item.text}/>
                                <p dangerouslySetInnerHTML={{__html: item.text}}/>
                            </div>
                        </div>
                    })}
                </Slider>
            </div>

        </div>
    </div>
};

export default EventSquaresSlider;
