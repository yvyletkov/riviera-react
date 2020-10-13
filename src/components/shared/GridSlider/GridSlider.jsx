import React from "react";
import Slider from "react-slick";
import Headline from "../Headline/Headline";
import GridSliderItem from "./GridSliderItem/GridSliderItem";
import s from "./GridSlider.module.scss";
import kurortImg1 from "../../../img/grid-slider/resort-vacation/1.png";
import kurortImg2 from "../../../img/grid-slider/resort-vacation/2.png";
import kurortImg3 from "../../../img/grid-slider/resort-vacation/3.png";
import kurortImg4 from "../../../img/grid-slider/resort-vacation/4.png";
import kurortImg5 from "../../../img/grid-slider/resort-vacation/5.png";
import kurortImg6 from "../../../img/grid-slider/resort-vacation/6.png";
import kurortImg7 from "../../../img/grid-slider/resort-vacation/7.png";
import kurortImg8 from "../../../img/grid-slider/resort-vacation/8.png";

const cssstyle = `
.slick-next:before, .slick-prev:before {
    color: #000;
}
.center .slick-center .SliderElement {
    opacity: 1;
    -ms-transform: scale(1.08);
    transform: scale(1.08);
}
.center h3 {
    transition: all .3s ease;
}
.slick-list { 
   overflow:visible;
}
`;

function NextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", background: "red"}}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", background: "green"}}
            onClick={onClick}
        />
    );
}


const GridSlider = ({slides}) => {

    let [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

    const afterChangeHandler = (index) => {
        setCurrentSlideIndex(index);
    };

    slides = [{
            name: "Курортный отдых",
            firstRow: [{title: "Семейный отдых", img: kurortImg1, href: '#'}, {title: "Номера и цены", img: kurortImg2, href: '#'}, {title: "Отдых без детей", img: kurortImg3, href: '#'}, {title: "Отдых с другзьями", img: kurortImg4, href: '#'}],
            secondRow: [{title: "Турпакет", img: kurortImg5, href: '#'}, {title: "Medical Spa", img: kurortImg6, href: '#'}, {title: "Командировка", img: kurortImg7, href: '#'}, {title: "Романтический отдых", img: kurortImg8, href: '#'}],
            images: [kurortImg1, kurortImg2, kurortImg3, kurortImg4, kurortImg5, kurortImg6, kurortImg7, kurortImg8]
        },
        {
            name: "Развлечения",
            firstRow: [{title: "Семейный отдых", img: kurortImg1, href: '#'}, {title: "Номера и цены", img: kurortImg2, href: '#'}, {title: "Отдых без детей", img: kurortImg3, href: '#'}, {title: "Отдых с другзьями", img: kurortImg4, href: '#'}],
            secondRow: [{title: "Турпакет", img: kurortImg5, href: '#'}, {title: "Medical Spa", img: kurortImg6, href: '#'}, {title: "Командировка", img: kurortImg7, href: '#'}, {title: "Романтический отдых", img: kurortImg8, href: '#'}],
            images: [kurortImg1, kurortImg2, kurortImg3, kurortImg4, kurortImg5, kurortImg6, kurortImg7, kurortImg8]
        },
        {
            name: "Инфраструктура",
            firstRow: [{title: "Семейный отдых", img: kurortImg1, href: '#'}, {title: "Номера и цены", img: kurortImg2, href: '#'}, {title: "Отдых без детей", img: kurortImg3, href: '#'}, {title: "Отдых с другзьями", img: kurortImg4, href: '#'}],
            secondRow: [{title: "Турпакет", img: kurortImg5, href: '#'}, {title: "Medical Spa", img: kurortImg6, href: '#'}, {title: "Командировка", img: kurortImg7, href: '#'}, {title: "Романтический отдых", img: kurortImg8, href: '#'}],
            images: [kurortImg1, kurortImg2, kurortImg3, kurortImg4, kurortImg5, kurortImg6, kurortImg7, kurortImg8]
        }];
    const items = slides.map((item) => {
        return <GridSliderItem firstRow={item.firstRow} secondRow={item.secondRow}/>
    });

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        speed: 500,
    };


    return (
        <div className={s.wrapper}>
            <div className="container">
                <style>{cssstyle}</style>
                <div className={s.headlineWrapper}>
                    <Headline subtitle={'Услуги и продукты'} title={slides[currentSlideIndex].name}/>
                </div>
                <Slider {...settings} afterChange={afterChangeHandler}>
                    {items}
                </Slider>
            </div>
        </div>
    )
};

export default GridSlider;

