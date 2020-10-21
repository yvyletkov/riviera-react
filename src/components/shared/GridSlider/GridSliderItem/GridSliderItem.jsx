import React from "react";
import s from "./GridSliderItem.module.scss";
import Slider from "react-slick";
import styled from "styled-components";


const InnerSlider = ({firstRowItems, secondRowItems}) => {

    const InnerSliderStyles = styled.div`
  .slick-slide {
    opacity: 1;
    transition: all 500ms;
  }
  .slick-slide.slick-active {
    opacity: 1;
  }
  .slick-next:before, .slick-prev:before {
    color: #000;
  }
  .slick-list { 
     overflow:visible;
  }
  .slick-vertical .slick-slide {
     box-sizing: border-box;
  }
`;

    const settings = {
        infinite: false,
        slidesToShow: 1,
        speed: 500,
        // centerMode: true,
        // cellPadding: "10px"
        // arrows: false,
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
        return <a key={item.title + index} className={s.block} href={item.href}>
            <div style={{backgroundImage: 'url(' + item.img + ')', backgroundSize: 'cover', height: "100%"}}>
                <div className={s.content}><p>{item.title}</p></div>
            </div>
        </a>
    });
    const secondRowItems = secondRow.map((item, index) => {
        return <a key={item.title + index} className={s.block} href={item.href}>
            <div style={{backgroundImage: 'url(' + item.img + ')', backgroundSize: 'cover', height: "100%"}}>
                <div className={s.content}><p>{item.title}</p></div>
            </div>
        </a>
    });


    if (window.innerWidth <= 768) return <InnerSlider firstRowItems={firstRowItems} secondRowItems={secondRowItems}/>

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