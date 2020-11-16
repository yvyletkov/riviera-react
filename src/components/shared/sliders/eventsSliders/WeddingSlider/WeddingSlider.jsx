import React from "react";
import Slider from "react-slick";
import s from "./WeddingSlider.module.scss";
import styled from "styled-components";
import HeadlineCenter from "../../../HeadlineCenter/HeadlineCenter";

const SliderStyles = styled(Slider)`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
  .slick-list {
    overflow: visible;
  }

.slick-track {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
@media screen and (min-width: 481px){
 .slick-slider {
    height: unset;
    padding-bottom: 40px;
  }
}
@media screen and (max-width: 1200px){
  .slick-slider {
    height: unset
  }
}
`;



const WeddingSlider = ({slides}) => {

    const settings = {
        infinite: false,
        slidesToShow: 3,
        centerMode: true,
        arrows: false,
        variableWidth: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 0,
                    centerMode: false,
                    dots: true,
                    arrows: false
                }
            },
        ]
    };

    const items = slides.map((item, index) => {
        const {img, title, key, descr} = item;
        return (
            <div className="SliderElement" key={key}>
                <WeddingSliderItem
                    img={img}
                    title={title}
                    descr={descr}
                    active={window.matchMedia('(max-width: 490px').matches ? false : index === 1}
                />
            </div>
        );
    });

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <HeadlineCenter title={window.matchMedia('(max-width: 490px').matches ? "Варианты церемоний" : "Варианты выездной церемонии"}/>
                <SliderStyles>
                    <Slider {...settings}>{items}</Slider>
                </SliderStyles>
            </div>
        </div>
    );
};

export default WeddingSlider;


const WeddingSliderItem = (props) => {
    const {img, title, descr, active} = props;

    let [showDescr, setShowDescr] = React.useState(active);

    return (
        <div className={showDescr ? s.card + ' ' + s.active : s.card }>

            <img className={s.img} src={img} alt=""/>

            <div className={s.content}>
                <h6 className={s.title}>{title}</h6>
                <p className={s.descr}>
                    {descr}
                </p>
                <div className={s.moreBtn} onClick={() => setShowDescr(!showDescr)}>
                    {showDescr ? 'Cкрыть' : 'Подробнее'}
                </div>
            </div>
        </div>);
};
