import {infrastructurePagesData} from "../../../../data";
import InfrastructurePageBanner from "../InfrastructurePageBanner/InfrastructurePageBanner";
import React, {useState} from "react";
import MapSection from "../../../shared/MapSection/MapSection";
import SimpleSlider from "../../../shared/sliders/SimpleSlider/SimpleSlider";
import styled from "styled-components";
import Button from "../../../shared/Button/Button";


const Restaurants = () => {
    const {bannerData, mainSlides, apparatusesSlides, subscriptionsSlides} = infrastructurePagesData.gymPage;

    let [currentTab, setCurrentTab] = useState(0);

    const ApparatusesStyledDiv = styled.div`
      .container {
        max-width: 1200px;
        width: 100%;
        display: flex;
        height:490px;
        flex-wrap: nowrap;
      }
      
      .btnBlock {
        padding: 0;
        text-align: justify;
        display: flex;
        flex-direction:column;
      }
      
      .textBlock {
        padding: 0 60px 0;  
        text-align: justify;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width:375px;
     
        
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
        position:absolute;
        right:-245px;
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

    return (
        <>
            <InfrastructurePageBanner bannerData={infrastructurePagesData.restaurants.bannerData}/>
            <section className='section first'>
                <ApparatusesStyledDiv>
                    <div className='container'>
                        <div className='btnBlock'>
                                <Button notActive={currentTab !== 0}
                                        onClick={() => setCurrentTab(0)}
                                        text="Шведский стол"
                                        style={{marginBottom:'14px'}}/>
                                <Button notActive={currentTab !== 1}
                                        onClick={() => setCurrentTab(1)}
                                        text="Ресторан «Tavrika»"
                                        style={{marginBottom:'14px'}}/>
                                <Button notActive={currentTab !== 2}
                                    onClick={() => setCurrentTab(2)}
                                    text="Ресторан «La Veranda»"
                                    style={{marginBottom:'14px'}}/>
                                <Button notActive={currentTab !== 3}
                                        onClick={() => setCurrentTab(3)}
                                        text="Лобби-бар «Mungup»"
                                        style={{marginBottom:'14px'}}/>
                                <Button notActive={currentTab !== 4}
                                        onClick={() => setCurrentTab(4)}
                                        text="Лобби-лаундж"
                                        style={{marginBottom:'14px'}}/>
                                <Button notActive={currentTab !== 5}
                                        onClick={() => setCurrentTab(5)}
                                        text="Pool-бар"
                                        style={{marginBottom:'14px'}}/>
                                <Button notActive={currentTab !== 6}
                                        onClick={() => setCurrentTab(6)}
                                        text="Мангал в саду"
                                        style={{marginBottom:'14px'}}/>
                                <Button notActive={currentTab !== 7}
                                        onClick={() => setCurrentTab(7)}
                                        text="Караоке-бар"
                                        style={{marginBottom:'14px'}}/>
                        </div>
                        <div className='textBlock'>
                                <h4>{infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].name}</h4>
                                <p>{infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].description}</p>
                        </div>
                        <div className='sliderBlock'>
                            <SimpleSlider slides={infrastructurePagesData.restaurants.restaurantsContent[currentTab][1]}/>
                        </div>
                    </div>
                </ApparatusesStyledDiv>
            </section>
            <MapSection/>
        </>
    )
}

export default Restaurants;
