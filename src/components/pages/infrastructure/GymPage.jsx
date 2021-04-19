import React from "react";
import InfrastructurePageBanner from "./InfrastructurePageBanner/InfrastructurePageBanner";
import InfraMainSlider from "../../shared/sliders/InfraMainSlider/InfraMainSlider";
import MapSection from "../../shared/MapSection/MapSection";
import styled from "styled-components";
import SimpleSlider from "../../shared/sliders/SimpleSlider/SimpleSlider";
import Slider from "react-slick";
import HeadlineCenter from "../../shared/HeadlineCenter/HeadlineCenter";
import {infrastructurePagesData} from "../../../data";


const ApparatusesStyledDiv = styled.div`

  .container {
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
  }
  
  .textBlock {
    width: 40%;
    padding: 0 70px 0 20px;  
    text-align: justify;
    display: flex;
    align-items: center;
    @media screen and (min-width: 701px) {
      > div {
        margin-top: -90px;
      }
    }
    
    h4 {
      font-family: "Helvetica Neue Bold", sans-serif;
      font-size: 21px;
      margin-bottom: 20px;
    }
  }
  
  .sliderBlock {
    width: 60%;
    height: 400px;
    padding-bottom: 90px;
  }
  
  @media screen and (max-width: 700px) {
    .container {
      flex-wrap: wrap;
      padding: 0;
    }
    .textBlock, .sliderBlock {
      h4 {
        margin-bottom: 15px;
      }
      width: 100%;
    }
    .textBlock {
       padding: 0 20px;  
       margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 480px) {
    .sliderBlock {
      padding-bottom: 25px;
    }
  }
`

const SubscriptionsStyledDiv = styled.div`
  .subscriptionsWrapper {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;

  .container {
    position: relative;
    box-sizing: border-box;
    max-width: 1200px;
    width: 100%;
    padding: 0;
    margin: 0 auto;
    overflow: hidden;

   .sliderWrapper {
      max-width: 1200px;
      margin: 0 auto;
      margin-top: -40px;

      .sliderItemWrapper {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        justify-content: center;
        box-shadow: -4.54px 8.91px 35px 0px rgba(23, 23, 23, 0.25);
        background-color: rgb(255, 255, 255);
        width: 237px;
        height: 237px;
        margin: 40px auto;
        padding: 10px;

        @media (max-width: 1000px) {
          margin-left: 20px;
        }

        img {
          object-fit: contain;
          width: 62px;
          margin-bottom: 15px;
        }

        div {
          position: absolute;
          top: 10px;
          left: 20px;
          font-family: "Helvetica Neue Black", sans-serif;
          font-size: 40px;
          color: #f7f7f7;
        }

        p {
          font-family: "Helvetica Neue Roman", sans-serif;
          line-height: 1.4;
          color: #8e8e8e;
          text-align: center;
        }
      }
    }

  }

}

`

const GymPage = () => {

    React.useEffect( () => document.title = `Фитнес зал – the Shored SPA - Riviera Sunrise Resort & SPA – Алушта, Крым`, [])


    const {bannerData, mainSlides, apparatusesSlides, subscriptionsSlides} = infrastructurePagesData.gymPage;

    // let [currentTab, setCurrentTab] = React.useState(1);
    let [apparatusIndex, setApparatusIndex] = React.useState(0);

    // useEffect(() => {
    //     console.log('before index', apparatusIndex)
    //     setApparatusIndex(0)
    //     console.log('after index', apparatusIndex)
    // }, [currentTab]);

    const settings = {
        infinite: false,
        slidesToShow: 4,
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

    return <>
        <InfrastructurePageBanner bannerData={bannerData}/>

        <section className='section first'>
            <InfraMainSlider title={'Совершенный уровень отдыха'} slides={mainSlides}/>
        </section>

        <section className='section'>
            <ApparatusesStyledDiv>
                <div className='container'>
                    <div className='textBlock'>
                        <div>
                            <h4>{apparatusesSlides[apparatusIndex].name}</h4>
                            <p>{apparatusesSlides[apparatusIndex].description}</p>
                        </div>
                    </div>
                    <div className='sliderBlock'>
                        <SimpleSlider slides={apparatusesSlides} setCurrentSlideIndex={setApparatusIndex}/>
                    </div>
                </div>
            </ApparatusesStyledDiv>
        </section>

        <section className='section'>
            <SubscriptionsStyledDiv>
                <div className='subscriptionsWrapper'>
                    <div className='container'>
                        <HeadlineCenter title={'Абонемент \"Тренажерный зал\"'}/>
                        <div className='sliderWrapper'>
                            <Slider {...settings}>
                                {subscriptionsSlides.map((item, index) => {
                                    return <div key={index}>
                                        <div className='sliderItemWrapper'>
                                            <div>{index + 1}</div>
                                            <img src={item.img} alt={item.text}/>
                                            <p dangerouslySetInnerHTML={{__html: item.text}}/>
                                        </div>
                                    </div>
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </SubscriptionsStyledDiv>
        </section>

        <section className='section'>
            <MapSection/>
        </section>
    </>
}

export default GymPage;
