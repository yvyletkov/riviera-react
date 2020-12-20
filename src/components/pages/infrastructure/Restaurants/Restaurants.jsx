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
import iconTime from "../../../../img/infrastructure/restaurant/icons/time.png";
import MetaTags from 'react-meta-tags';

const Restaurants = () => {

    React.useEffect( () => document.title = `Рестораны и бары - Riviera Sunrise Resort & SPA – Алушта, Крым`, [])


    let [currentTab, setCurrentTab] = useState(0);

    const ApparatusesStyledDiv = styled.div`
      .container {
        max-width: 1200px;
        width: 100%;
        height:556px;
        display: flex;
        flex-wrap: nowrap;
      }
      
      .btnBlock {
        padding: 0;
        text-align: justify;
        display: flex;
        flex-direction:column;
      }
      
      .textLeft {
        display: flex;
        text-align: left;
      }
      
      .scheduleBlock {
        display: flex;
        width:100%;
        margin-bottom: 30px;
        align-items: center;
      }
      
      .scheduleIcon {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      
      .scheduleTime {
        display: flex;
        flex-direction: column;
      }
      
      .textDesc {
        width: 100%;
        text-align: justify;
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
        height: 476px;
        padding-bottom: 90px;
        position:absolute;
        right:-245px;
      }
      
      @media screen and (max-width: 1200px) {
        .container {
          height:unset;
        }
        .btnBlock {
          max-width: 300px;
          margin: 0 auto;
        }
        .textBlock {
          margin:0 auto;
          
          h4 {
            width: 100%;
          }
        }
        .container {
          flex-wrap: wrap;
          padding: 0;
        }
        .sliderBlock {
          position: relative;
          right: unset;
          margin:30px auto 0;
        }
      }
      
      @media screen and (max-width: 700px) {
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
          height: 240px;
          padding-bottom: 25px;
        }
      }
    `

    return (
        <>
            <MetaTags>
                <meta name="keywords" content="Ресторан в Алуште, ресторан на открытой веранде, ресторан у моря, меню ресторана, ресторан Крым, банкетный зал" />
            </MetaTags>
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
                                        text="Lobby Bar Mangup"
                                        style={{marginBottom:'14px'}}/>
                                <Button notActive={currentTab !== 4}
                                        onClick={() => setCurrentTab(4)}
                                        text="Lobby Lounge"
                                        style={{marginBottom:'14px'}}/>
                                <Button notActive={currentTab !== 5}
                                        onClick={() => setCurrentTab(5)}
                                        text="Pool Bar"
                                        style={{marginBottom:'14px'}}/>
                                <Button notActive={currentTab !== 6}
                                        onClick={() => setCurrentTab(6)}
                                        text="Мангал в саду"
                                        style={{marginBottom:'14px'}}/>
                        </div>
                        <div className='textBlock'>
                                <h4>{infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].name}</h4>
                                {
                                    infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].timeBreakfast ?
                                        <div className="scheduleBlock">
                                            <img className="scheduleIcon" src={iconTime} alt="завтрак"/>
                                            <div className="scheduleTime">
                                                <p className="textLeft">Завтрак</p>
                                                <p className="textLeft">{infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].timeBreakfast}</p>
                                            </div>
                                        </div>
                                        :
                                        <div className="scheduleBlock">
                                            <img className="scheduleIcon" src={iconTime} alt="Время"/>
                                            <div className="scheduleTime">
                                                <p className="textLeft">Время работы</p>
                                                <p className="textLeft">{infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].workingHours}</p>
                                            </div>
                                        </div>
                                }
                                {
                                    infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].timeDinner ?
                                        <div className="scheduleBlock">
                                            <img className="scheduleIcon" src={iconTime} alt="обед"/>
                                            <div className="scheduleTime">
                                                <p className="textLeft">Обед</p>
                                                <p className="textLeft">{infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].timeDinner}</p>
                                            </div>
                                        </div> : null
                                }
                                {
                                    infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].timeSupper ?
                                        <div className="scheduleBlock">
                                            <img className="scheduleIcon" src={iconTime} alt="ужин"/>
                                            <div className="scheduleTime">
                                                <p className="textLeft">Ужин</p>
                                                <p className="textLeft">{infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].timeSupper}</p>
                                            </div>
                                        </div> : null
                                }
                                <p className="textDesc"><b>
                                    {
                                        infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].kitchen ?
                                        `Кухня: ${infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].kitchen}` :
                                        `Меню: ${infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].menu}`
                                    }
                                </b></p>
                                {
                                    infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].location ?
                                        <p className="textDesc"><b>Расположение: {infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].location}</b></p>
                                        : null
                                }
                                <p className="textDesc">{infrastructurePagesData.restaurants.restaurantsContent[currentTab][0].description}</p>
                        </div>
                        <div className='sliderBlock'>
                            <SimpleSlider
                                slides={infrastructurePagesData.restaurants.restaurantsContent[currentTab][1]}
                                styleImg={window.matchMedia('(min-width:480px)').matches ?
                                    {height:'476px'} :
                                    {height:'240px'}}
                            />
                        </div>
                    </div>
                </ApparatusesStyledDiv>
            </section>
            <section className="section last">
                <MapSection/>
            </section>
        </>
    )
}

export default Restaurants;
