import React from "react";
import s from "./GridSliderItem.module.scss";
import Slider from "react-slick";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import LazyImage from "../../../../additional/LazyImg";

const InnerSliderStyles = styled.div`
  .slick-list { 
     overflow:visible;
  }
  .slick-vertical .slick-slide {
     box-sizing: border-box;
  }
  .slick-list:before {
    content: none !important;
  }
`;

const InnerSlider = ({firstRowItems, secondRowItems}) => {

    const settings = {
        infinite: false,
        slidesToShow: 1,
        speed: 500,
        arrows: false
    };

    return (
        <div className={s.innerSlider}>
            <InnerSliderStyles>
                <Slider {...settings}>
                    {firstRowItems}
                    {secondRowItems}
                </Slider>
            </InnerSliderStyles>
        </div>
    )
}


const GridSliderItem = ({firstRow, secondRow}) => {


    const firstRowItems = firstRow.map((item, index) => {
        const handleLinkClick = (e) => {
            if (!item.href) e.preventDefault()
        }
        return <NavLink onClick={handleLinkClick} to={item.href ? item.href : '#'} key={item.title + index}
                        className={s.block}>
            <LazyImage className={s.img} src={item.img} alt={item.title} style={{borderRadius: "5px"}}/>
            <div className={s.content}><p>{item.title}</p></div>
        </NavLink>
    });
    const secondRowItems = secondRow.map((item, index) => {
        const handleLinkClick = (e) => {
            if (!item.href) e.preventDefault()
        }
        return <NavLink onClick={handleLinkClick} to={item.href ? item.href : '#'} className={s.block} href={item.href}>
            <LazyImage className={s.img} src={item.img} alt={item.title} style={{borderRadius: "5px"}}/>
            <div className={s.content}><p>{item.title}</p></div>

        </NavLink>
    });


    if (window.matchMedia('screen and (max-width: 768px)').matches) return <InnerSlider firstRowItems={firstRowItems} secondRowItems={secondRowItems}/>;

    else return (
        <div className={s.wrapper}>
            <div className={s.grid}>
                <div className={s.row + ' ' + s.top}>
                    {firstRowItems}
                </div>
                <div className={s.row + ' ' + s.bottom}>
                    {secondRowItems}
                </div>
            </div>
        </div>
    )
}

export default GridSliderItem;