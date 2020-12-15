import {infrastructurePagesData} from "../../../data";
import InfrastructurePageBanner from "./InfrastructurePageBanner/InfrastructurePageBanner";
import React, {useState} from "react";
import MapSection from "../../shared/MapSection/MapSection";
import SimpleSlider from "../../shared/sliders/SimpleSlider/SimpleSlider";
import styled from "styled-components";
import Button from "../../shared/Button/Button";
import weekendIcon from "../../../img/infrastructure/spaPage/prices/icons/1.png";
import weekDaysIcon from "../../../img/infrastructure/spaPage/prices/icons/2.png";

const SpaPrices = () => {

    React.useEffect( () => document.title = `SPA-услуги и цены – the Shored SPA - Riviera Sunrise Resort & SPA – Алушта, Крым`, [])


    let [currentTab, setCurrentTab] = useState(0);

    const ApparatusesStyledDiv = styled.div`
      .container {
        max-width: 1200px;
        width: 100%;
        height:556px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
      }
      
      .btnBlock {
        padding: 0;
        text-align: justify;
        display: flex;
        margin-bottom: 70px;
        max-width: 720px;
      }
      
      .textBlock {
        display: flex;
        text-align: left;
        flex-direction: column;
        margin-bottom: 20px;
      }
      
      .scheduleBlock {
        display: flex;
        margin-bottom: 30px;
      }
      
      .titleSubscription {
        margin-bottom: 20px;
      }
      
      .descSubscription {
        display: flex;
        width:300px;
      }
      
      .scheduleIcon {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
      
      .text {
        margin:0 0 10px auto;
      }
      
      .subscriptionIcon {
        width: 30px;
        height: 30px;
        margin-right: 20px;
      }
      
      .scheduleTime {
        display: flex;
        flex-direction: column;
      }
      
      .textBlock {
        text-align: justify;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width:720px;
     
        
        h4 {
          font-family: "Helvetica Neue Bold", sans-serif;
          font-size: 30px;
          margin-bottom: 20px;
          text-transform: uppercase;
          width: 100%;
        }
      }
      
      .textBlockPrice {
        text-align: justify;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin:0 0 0 auto;
      }
      
      .sliderBlock {
        width: 60%;
        height: 476px;
        padding-bottom: 90px;
        position:absolute;
        right:-245px;
      }
      
      @media screen and (max-width: 1200px) {
        .textBlockPrice {
          margin:0;
          padding: 0 5px;
        }
        
        .text {
          margin:0 auto;
        }
        
        .container {
          height:unset;
        }
        .btnBlock {
          margin: 0 auto 40px;
          flex-direction: column;
          width:280px;
        }
        .subscriptionIcon {
            margin:0;
        }
        
        .descSubscription {
          width: 100%;
        }
        
        .textBlock {
          margin:0 auto;
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
        .sliderBlock {
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
          height:240px;
        }
      }
    `

    return (
        <>
            <InfrastructurePageBanner bannerData={infrastructurePagesData.spaPrices.bannerData}/>
            <section className='section first'>
                <ApparatusesStyledDiv>
                    <div className='container'>
                        <div className='btnBlock'>
                            <Button notActive={currentTab !== 0}
                                    onClick={() => setCurrentTab(0)}
                                    text="Для взрослых"
                                    style={window.matchMedia('(min-width:1201px)').matches ? {marginRight: '20px'} : {marginBottom: '20px'}}/>
                            <Button notActive={currentTab !== 1}
                                    onClick={() => setCurrentTab(1)}
                                    text="Для детей"
                                    style={window.matchMedia('(min-width:1201px)').matches ? {marginRight: '20px'} : {marginBottom: '20px'}}/>
                            <Button notActive={currentTab !== 2}
                                    onClick={() => setCurrentTab(2)}
                                    text="Абонементы"
                                    style={window.matchMedia('(min-width:1201px)').matches ? {marginRight: '20px'} : {marginBottom: '20px'}}/>
                        </div>
                        <div className="textBlock">
                            <h4>{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].name}</h4>
                            {infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].subscription ?
                                    <>
                                        <h6 className="titleSubscription">{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].textTitleChildren}</h6>
                                        <div className="scheduleBlock">
                                            <img className="subscriptionIcon" src={weekendIcon} alt="выходные дни"/>
                                            <div className="descSubscription">
                                                <div className="textBlockPrice" style={{margin: '0'}}>
                                                    <p className="text">{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].subscriptionAdult1}</p>
                                                    <p className="text">{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].subscriptionAdult2}</p>
                                                    <p className="text">{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].subscriptionAdult3}</p>
                                                </div>
                                                <div className="textBlockPrice">
                                                    <p className="text">{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].priceAdult1}</p>
                                                    <p className="text">{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].priceAdult2}</p>
                                                    <p className="text">{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].priceAdult3}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="titleSubscription">{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].textTitleAdult}</h6>
                                        <div className="scheduleBlock">
                                            <img className="subscriptionIcon" src={weekendIcon} alt="выходные дни"/>
                                            <div className="descSubscription">
                                                <div className="textBlockPrice" style={{margin: '0'}}>
                                                    <p className="text">{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].subscriptionChild1}</p>
                                                    <p className="text">{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].subscriptionChild2}</p>
                                                    <p className="text">{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].subscriptionChild3}</p>
                                                </div>
                                                <div className="textBlockPrice">
                                                    <p className="text">{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].priceChild1}</p>
                                                    <p className="text">{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].priceChild2}</p>
                                                    <p className="text">{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].priceChild3}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="scheduleBlock">
                                            <img className="scheduleIcon" src={weekendIcon} alt="выходные дни"/>
                                            <div className="scheduleTime">
                                                <div className="textBlock">
                                                    <p>{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].text1}</p>
                                                    <p>
                                                        <b>{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].price1}</b>
                                                    </p>
                                                </div>
                                                <div className="textBlock">
                                                    <p>{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].text2}</p>
                                                    <p>
                                                        <b>{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].price2}</b>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="scheduleBlock">
                                            <img className="scheduleIcon" src={weekDaysIcon} alt="будние дни"/>
                                            <div className="scheduleTime">
                                                <div className="textBlock">
                                                    <p>{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].text3}</p>
                                                    <p>
                                                        <b>{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].price3}</b>
                                                    </p>
                                                </div>
                                                <div className="textBlock">
                                                    <p>{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].text4}</p>
                                                    <p>
                                                        <b>{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].price4}</b>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </>}
                        </div>
                        <div className='sliderBlock'>
                            <SimpleSlider
                                slides={infrastructurePagesData.spaPrices.spaPricesContent[currentTab][1]}
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

export default SpaPrices;
