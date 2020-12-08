import {infrastructurePagesData} from "../../../../data";
import InfrastructurePageBanner from "../InfrastructurePageBanner/InfrastructurePageBanner";
import React, {useState} from "react";
import MapSection from "../../../shared/MapSection/MapSection";
import SimpleSlider from "../../../shared/sliders/SimpleSlider/SimpleSlider";
import styled from "styled-components";
import Button from "../../../shared/Button/Button";
import iconBreakfast from "../../../../img/infrastructure/restaurant/icons/breakfast.png";
import iconDinner from "../../../../img/infrastructure/restaurant/icons/dinner.png";
import iconSupper from "../../../../img/infrastructure/restaurant/icons/supper.png";


const Restaurants = () => {
    const {bannerData, mainSlides, apparatusesSlides, subscriptionsSlides} = infrastructurePagesData.gymPage;

    let [currentTab, setCurrentTab] = useState(0);

    const ApparatusesStyledDiv = styled.div`
      .container {
        max-width: 1200px;
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
      }
      
      .btnBlock {
        padding: 0;
        text-align: justify;
        display: flex;
        flex-direction:column;
      }
      
      .text-left {
        display: flex;
        text-align: left;
      }
      
      .schedule-block {
        display: flex;
        width:100%;
        margin-bottom: 30px;
        align-items: center;
      }
      
      .schedule-icon {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      
      .schedule-time {
        display: flex;
        flex-direction: column;
      }
      
      .text-desc {
        width: 100%;
        text-align: left;
        font-size: 16px;
        padding-bottom: 10px;
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
        height: 546px;
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
                                <div className="schedule-block">
                                    <img className="schedule-icon" src={iconBreakfast} alt="завтрак"/>
                                    <div className="schedule-time">
                                        <p className="text-left">Завтрак</p>
                                        <p className="text-left">{infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].timeBreakfast}</p>
                                    </div>
                                </div>
                                <div className="schedule-block">
                                    <img className="schedule-icon" src={iconDinner} alt="обед"/>
                                    <div className="schedule-time">
                                        <p className="text-left">Обед</p>
                                        <p className="text-left">{infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].timeDinner}</p>
                                    </div>
                                </div>
                                <div className="schedule-block">
                                    <img className="schedule-icon" src={iconSupper} alt="ужин"/>
                                    <div className="schedule-time">
                                        <p className="text-left">Ужин</p>
                                        <p className="text-left">{infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].timeSupper}</p>
                                    </div>
                                </div>
                                <p className="text-desc"><b>
                                    {
                                        infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].kitchen ?
                                        `Кухня: ${infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].kitchen}` :
                                        `Меню: ${infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].menu}`
                                    }
                                </b></p>
                                <p className="text-desc"><b>Расположение: {infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].location}</b></p>
                                <p className="text-desc">{infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].description}</p>
                        </div>
                        <div className='sliderBlock'>
                            <SimpleSlider
                                slides={infrastructurePagesData.restaurants.restaurantsContent[currentTab][1]}
                                styleImg={{height:'546px'}}/>
                        </div>
                    </div>
                </ApparatusesStyledDiv>
            </section>
            <section className="section first">
                <MapSection/>
            </section>
        </>
    )
}

export default Restaurants;
