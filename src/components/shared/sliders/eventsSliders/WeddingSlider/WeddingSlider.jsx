import React from "react";
import Slider from "react-slick";
import s from "./WeddingSlider.module.scss";
import styled from "styled-components";
import HeadlineCenter from "../../../HeadlineCenter/HeadlineCenter";
import img1 from "../../../../../img/specials-slider/home-page/spetspredlozheniya1.jpg";
import img2 from "../../../../../img/specials-slider/home-page/spetspredlozheniya2.jpg";
import img3 from "../../../../../img/specials-slider/home-page/spetspredlozheniya3.jpg";

const SliderStyles = styled(Slider)`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
  .slick-list {
    overflow: visible;
  }
  .slick-slider {
    height: 610px
  }
.slick-track {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 1000px){
        
}
@media screen and (max-width: 1200px){
  .slick-slider {
    height: unset
  }
}
`;

const specialsSlides = [
    {
        img: img1,
        title: "Караоке бар",
        subtitle: "Green Stage",
        time: "21:00 8 августа",
        house: "Корпус Classic",
        link: '#',
        key: 1,
    },
    {
        img: img2,
        title: "Караоке бар",
        subtitle: "Green Stage",
        time: "21:00 8 августа",
        house: "Корпус Classic",
        link: '#',
        key: 2,
    },
    {
        img: img3,
        title: "Караоке бар",
        subtitle: "Green Stage",
        time: "21:00 8 августа",
        house: "Корпус Classic",
        link: '#',
        key: 3,
    },
];


const WeddingSlider = ({title, slides = specialsSlides}) => {

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
        const {img, key, link} = item;
        return (
            <div className="SliderElement" key={key}>
                <WeddingSliderItem
                    img={img}
                    link={link}
                    active={index === 1}
                />
            </div>
        );
    });

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <HeadlineCenter title={'Варианты'}/>
                <SliderStyles>
                    <Slider {...settings}>{items}</Slider>
                </SliderStyles>
            </div>
        </div>
    );
};

export default WeddingSlider;


const WeddingSliderItem = (props) => {
    const {img, active} = props;

    let [showDescr, setShowDescr] = React.useState(active);

    return (
        <div className={showDescr ? s.card + ' ' + s.active : s.card }>

            <img className={s.img} src={img} alt=""/>

            <div className={s.content}>
                <h6 className={s.title}>Скидка 10%</h6>
                <p className={s.descr}>
                    Площадка с аккуратным мостиком, подсветкой бассейна, с видом на реликтовый парк и морское
                    побережье позволит создать дополнительную атмосферу романтики и уюта.
                </p>
                <div className={s.moreBtn} onClick={() => setShowDescr(!showDescr)}>
                    {showDescr ? 'Cкрыть' : 'Подробнее'}
                </div>
            </div>
        </div>);
};
