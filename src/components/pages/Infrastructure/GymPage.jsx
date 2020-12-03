import React from "react";
import InfrastructurePageBanner from "./InfrastructurePageBanner/InfrastructurePageBanner";
import InfraMainSlider from "../../shared/sliders/InfraMainSlider/InfraMainSlider";
import MapSection from "../../shared/MapSection/MapSection";
import styled from "styled-components";
import SimpleSlider from "../../shared/sliders/SimpleSlider/SimpleSlider";

const ApparatusesBlock = styled.div`
  display: flex;
  flex-wrap: nowrap;
  .textBlock {
    width: 40%;
    padding: 40px 70px 0 20px;  
  }
  @media screen and (max-width: 700px) {
    
  }
`

const GymPage = ({bannerData, slides}) => {

    let [apparatusesTypeIndex, setApparatusesTypeIndex] = React.useState(0);
    let [apparatusIndex, setApparatusIndex] = React.useState(0);

    return <>
        <InfrastructurePageBanner bannerData={bannerData}/>

        <section className='section'>
            <InfraMainSlider title={'Совершенный уровень отдыха'} slides={slides}
                             setCurrentSlideIndex={setApparatusesTypeIndex}/>
        </section>

        <section>
            <ApparatusesBlock>
                <div className='textBlock'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ea in nam sint? Ad assumenda dolores
                    eligendi expedita explicabo fuga, iste labore libero magnam officiis porro quod similique sunt
                    velit.
                </div>
                <div className='sliderBlock'>
                    <SimpleSlider setCurrentSlideIndex={setApparatusIndex}/>
                </div>
            </ApparatusesBlock>
        </section>

        <MapSection/>
    </>
}

export default GymPage;