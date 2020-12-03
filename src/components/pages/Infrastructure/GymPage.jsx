import React from "react";
import InfrastructurePageBanner from "./InfrastructurePageBanner/InfrastructurePageBanner";
import InfraMainSlider from "../../shared/sliders/InfraMainSlider/InfraMainSlider";
import MapSection from "../../shared/MapSection/MapSection";
import styled from "styled-components";
import SimpleSlider from "../../shared/sliders/SimpleSlider/SimpleSlider";
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
    h4 {
      font-family: "Helvetica Neue Bold", sans-serif;
      font-size: 21px;
      margin-bottom: 20px;
    }
  }
  
  .sliderBlock {
    width: 60%;
    height: 400px;
    padding-bottom: 70px;
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

const GymPage = () => {

    const {bannerData, mainSlides, apparatusesSlides} = infrastructurePagesData.gymPage

    let [currentTab, setCurrentTab] = React.useState(1);
    let [apparatusIndex, setApparatusIndex] = React.useState(0);

    return <>
        <InfrastructurePageBanner bannerData={bannerData}/>

        <section className='section first'>
            <InfraMainSlider title={'Совершенный уровень отдыха'} slides={mainSlides}
                             setPickedSlideIndex={setCurrentTab} pickedSlideIndex={currentTab}/>
        </section>

        <section className='section'>
            <ApparatusesStyledDiv>
                <div className='container'>
                    <div className='textBlock'>
                        <div>
                            <h4>{apparatusesSlides[currentTab][apparatusIndex].name}</h4>
                            <p>{apparatusesSlides[currentTab][apparatusIndex].description}</p>
                        </div>

                    </div>
                    <div className='sliderBlock'>
                        <SimpleSlider slides={apparatusesSlides[currentTab]} setCurrentSlideIndex={setApparatusIndex}/>
                    </div>
                </div>
            </ApparatusesStyledDiv>
        </section>

        <section className='section'>
            <MapSection/>
        </section>
    </>
}

export default GymPage;