import s from "./AdvantagesBlock.module.scss";
import HeadlineCenter from "../HeadlineCenter/HeadlineCenter";
import Slider from "react-slick";
import React from "react";
import arrowImg from "../../../img/sliderArrows/arrowThin.png";

function NextArrow({style, onClick}) {
    return <div
        className={s.nextArrow}
        style={{...style, backgroundImage: 'url(' + arrowImg + ')'}}
        onClick={onClick}
    />
}

function PrevArrow({style, onClick}) {
    return <div
        className={s.prevArrow}
        style={{...style, backgroundImage: 'url(' + arrowImg + ')'}}
        onClick={onClick}
    />
}

const AdvantagesBlock = ({title, icons, slidesToShow}) => {

    const settings = {
        infinite: false,
        slidesToShow: slidesToShow || icons.length,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        arrows: true,
        dots:false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: false,
                    variableWidth: true,
                    slidesToShow: 1,
                    dots:true,
                }
            },
        ]
    };

    return <div className={s.wrapper} id='advantages'>
            <div className={s.container}>
                <HeadlineCenter title={title}/>

                <div className={s.sliderWrapper}>
                    <Slider {...settings}>

                        {icons.map((item, index) => {
                            return <div key={index}>
                                <div className={s.iconWrapper}>
                                    <img src={item.img} alt=""/>
                                    <p dangerouslySetInnerHTML={{__html: item.text}}/>
                                </div>
                            </div>
                        })}

                    </Slider>
                </div>

            </div>
        </div>
};

export default AdvantagesBlock;
