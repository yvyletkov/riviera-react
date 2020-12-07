import s from "./AdvantagesBlock.module.scss";
import HeadlineCenter from "../HeadlineCenter/HeadlineCenter";
import Slider from "react-slick";
import React from "react";

const AdvantagesBlock = ({title, icons}) => {

    const settings = {
        infinite: false,
        slidesToShow: icons.length,
        arrows: false,
        dots:false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    variableWidth: true,
                    slidesToShow: 1,
                    dots:true,
                }
            },
        ]
    };

    return <div className={s.wrapper}>
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
