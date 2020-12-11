import React from "react";
import Slider from "react-slick";
import s from "./slider.module.css";
import styled from "styled-components";
import Swipe from 'react-easy-swipe';
// import $ from "jquery";
import gridKurortImg1 from "./img.jpg";
import style from "./item.module.css";
import {NavLink} from "react-router-dom";

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
        <div className={style.innerSlider}>
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
                        className={style.block}>
            <img className={style.img} src={item.img} alt={item.title} style={{borderRadius: "5px"}}/>
            <div className={style.content}><p>{item.title}</p></div>
        </NavLink>
    });
    const secondRowItems = secondRow.map((item, index) => {
        const handleLinkClick = (e) => {
            if (!item.href) e.preventDefault()
        }
        return <NavLink onClick={handleLinkClick} to={item.href ? item.href : '#'} className={style.block}
                        href={item.href}>
            <img className={style.img} src={item.img} alt={item.title} style={{borderRadius: "5px"}}/>
            <div className={style.content}><p>{item.title}</p></div>

        </NavLink>
    });


    if (window.matchMedia('(max-width: 768px)').matches) return <InnerSlider firstRowItems={firstRowItems}
                                                                             secondRowItems={secondRowItems}/>;

    else return (
        <div className={style.wrapper}>
            <div className={style.grid}>
                <div className={style.row + ' ' + style.top}>
                    {firstRowItems}
                </div>
                <div className={style.row + ' ' + style.bottom}>
                    {secondRowItems}
                </div>
            </div>
        </div>
    )
}


const SliderStyles = styled.div`
  .slick-slide {
    opacity: .18;
    transition: all 500ms;
  }
  .slick-slide.slick-active {
    opacity: 1;
    filter: brightness(1);
  }
  .slick-next:before, .slick-prev:before {
    color: #000;
  }
  .center .slick-center .SliderElement {
    opacity: 1;
    -ms-transform: scale(1.08);
    transform: scale(1.08);
  }
  .slick-list { 
    overflow:visible;
  }
  .slick-vertical .slick-slide {
     box-sizing: border-box;
  }
@media screen and (max-width: 768px) {

  .slick-slide {
    opacity: 1;
    filter: brightness(0.9);
    transition: all 500ms;
  }

    .slick-list { 
        overflow:visible;
    }
    .slick-track { 
        overflow:hidden;
    }
    
    .slick-vertical .slick-slide {
        border: none;
    }

  .slick-list {margin: -18px 0 -18px -20px;}
  .slick-slide>div {padding: 18px 0 18px 20px;}
    
    .slick-dots {bottom: -8px}
    
}
.slick-dots li {
    margin: 0
}

`;

const commonGridSlides = [
    {
        name: "Слайд 1",
        firstRow: [
            {
                title: "Семейный отдых",
                img: gridKurortImg1,
                // href: '/family-vacation'
            },
            {
                title: "Номера и цены",
                img: gridKurortImg1,
                // href: '/rooms-and-prices'
            },
            {
                title: "Отдых без детей",
                img: gridKurortImg1,
                // href: '/vacation-for-yourself'
            },
            {
                title: "Отдых с друзьями",
                img: gridKurortImg1,
                // href: '/vacation-with-friends'
            }
        ],
        secondRow: [
            {
                title: "Турпакет",
                img: gridKurortImg1,
            },
            {
                title: "Medical Spa",
                img: gridKurortImg1,
            },
            {
                title: "Командировка",
                img: gridKurortImg1,
            },
            {
                title: "Романтический отдых",
                img: gridKurortImg1,
                // href: '/romantic-vacation'
            }],
    },
    {
        name: "Слайд 2",
        firstRow: [
            {
                title: "Семейный отдых",
                img: gridKurortImg1,
                // href: '/family-vacation'
            },
            {
                title: "Номера и цены",
                img: gridKurortImg1,
                // href: '/rooms-and-prices'
            },
            {
                title: "Отдых без детей",
                img: gridKurortImg1,
                // href: '/vacation-for-yourself'
            },
            {
                title: "Отдых с друзьями",
                img: gridKurortImg1,
                // href: '/vacation-with-friends'
            }
        ],
        secondRow: [
            {
                title: "Турпакет",
                img: gridKurortImg1,
            },
            {
                title: "Medical Spa",
                img: gridKurortImg1,
            },
            {
                title: "Командировка",
                img: gridKurortImg1,
            },
            {
                title: "Романтический отдых",
                img: gridKurortImg1,
                // href: '/romantic-vacation'
            }],
    },
    {
        name: "Слайд 3",
        firstRow: [
            {
                title: "Семейный отдых",
                img: gridKurortImg1,
                // href: '/family-vacation'
            },
            {
                title: "Номера и цены",
                img: gridKurortImg1,
                // href: '/rooms-and-prices'
            },
            {
                title: "Отдых без детей",
                img: gridKurortImg1,
                // href: '/vacation-for-yourself'
            },
            {
                title: "Отдых с друзьями",
                img: gridKurortImg1,
                // href: '/vacation-with-friends'
            }
        ],
        secondRow: [
            {
                title: "Турпакет",
                img: gridKurortImg1,
            },
            {
                title: "Medical Spa",
                img: gridKurortImg1,
            },
            {
                title: "Командировка",
                img: gridKurortImg1,
            },
            {
                title: "Романтический отдых",
                img: gridKurortImg1,
                // href: '/romantic-vacation'
            }],
    },
    {
        name: "Слайд 4",
        firstRow: [
            {
                title: "Семейный отдых",
                img: gridKurortImg1,
                // href: '/family-vacation'
            },
            {
                title: "Номера и цены",
                img: gridKurortImg1,
                // href: '/rooms-and-prices'
            },
            {
                title: "Отдых без детей",
                img: gridKurortImg1,
                // href: '/vacation-for-yourself'
            },
            {
                title: "Отдых с друзьями",
                img: gridKurortImg1,
                // href: '/vacation-with-friends'
            }
        ],
        secondRow: [
            {
                title: "Турпакет",
                img: gridKurortImg1,
            },
            {
                title: "Medical Spa",
                img: gridKurortImg1,
            },
            {
                title: "Командировка",
                img: gridKurortImg1,
            },
            {
                title: "Романтический отдых",
                img: gridKurortImg1,
                // href: '/romantic-vacation'
            }],
    },
];


const GridSlider = ({slides = commonGridSlides}) => {

    let [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    let [swipedVertically, setSwipedVertically] = React.useState(0);

    // const bodyEl = document.getElementsByTagName("body")[0];

    // const disableScroll = () => bodyEl.classList.add("fixed");
    // const enableScroll = () => bodyEl.classList.remove("fixed");
    // const disableScroll = () => bodyEl.style.overflow = "hidden"
    // const enableScroll = () => bodyEl.style.overflow = "auto"

    // React.useEffect(function () {
    //     const sliderElementsObj = $("#verticalSliderWrapper *");
    //     const sliderElementsArr = Object.values(sliderElementsObj);
    //     const whiteBg = Object.values($('#whiteGridSliderBg'))[0];
    //     const h2El = Object.values($('h2'));
    //     const h4El = Object.values($('h4'));
    //     const miniSliderEl = Object.values($('.miniSliderTarget'));
    //
    //     $(document).on('touchstart', (e) => {
    //
    //         if (!sliderElementsArr.includes(e.target)
    //             || e.target === whiteBg
    //             || h2El.includes(e.target)
    //             || h4El.includes(e.target)
    //             || miniSliderEl.includes(e.target))
    //             enableScroll()
    //
    //     })
    // }, []);

    const afterChangeHandler = (index) => setCurrentSlideIndex(index);
    const onSwipeMove = (position) => {
        setSwipedVertically(position.y)
        return true;
    }


    const items = slides.map((item, index) => <GridSliderItem key={item.name + index}
                                                              firstRow={item.firstRow}
                                                              secondRow={item.secondRow}/>);

    const settings = {
        afterChange: afterChangeHandler,
        infinite: true,
        slidesToShow: 1,
        speed: 600,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    speed: 400,
                    slidesToShow: 1,
                    infinite: false,
                    vertical: true,
                    verticalSwiping: true,
                    arrows: false,
                    dots: true,
                    draggable: true,
                    swipe: false
                }
            },
        ]
    };

    const sliderRef = React.useRef();

    React.useEffect(() => {
        if (swipedVertically > 90) {
            if (currentSlideIndex === 0)
                return;
            else sliderRef.current.slickPrev();
        } else if (swipedVertically < -90) {
            if (currentSlideIndex === slides.length - 1)
                return;
            else sliderRef.current.slickNext();
        }
    }, [swipedVertically]);

    return (<>
            <div style={{height: '400px', width: '100%', background: 'gray', marginBottom: '20px'}}/>
            <div style={{height: '400px', width: '100%', background: 'gray', marginBottom: '20px'}}/>
            <div style={{height: '400px', width: '100%', background: 'gray', marginBottom: '20px'}}/>

            <div id={'verticalSliderWrapper'}
                 className={currentSlideIndex === slides.length - 1 ? s.wrapper + ' ' + s.minified : s.wrapper}>

                <div className={s.container}>

                    <SliderStyles>

                        <Swipe onSwipeMove={onSwipeMove}>
                            <Slider {...settings} ref={sliderRef}>
                                {items}
                            </Slider>
                        </Swipe>

                    </SliderStyles>
                </div>
            </div>

            <div style={{height: '400px', width: '100%', background: 'gray', marginBottom: '20px'}}/>
            <div style={{height: '400px', width: '100%', background: 'gray', marginBottom: '20px'}}/>
            <div style={{height: '400px', width: '100%', background: 'gray', marginBottom: '20px'}}/>
            <div style={{height: '400px', width: '100%', background: 'gray', marginBottom: '20px'}}/>
            <div style={{height: '400px', width: '100%', background: 'gray', marginBottom: '20px'}}/>
            <div style={{height: '400px', width: '100%', background: 'gray', marginBottom: '20px'}}/>
        </>
    )
};

export default GridSlider;

