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
      
      .text-left {
        display: flex;
        text-align: left;
        flex-direction: column;
        margin-bottom: 20px;
      }
      
      .schedule-block {
        display: flex;
        margin-bottom: 30px;
      }
      
      .schedule-icon {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
      
      .schedule-time {
        display: flex;
        flex-direction: column;
      }
      
      .text-desc {
        width: 100%;
        text-align: justify;
        font-size: 16px;
        padding-bottom: 10px;
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
          padding-bottom: 25px;
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
                                    style={{marginRight:'40px', width:'150px'}}/>
                            <Button notActive={currentTab !== 1}
                                    onClick={() => setCurrentTab(1)}
                                    text="Для детей"
                                    style={{marginRight:'40px', width:'150px'}}/>
                            <Button notActive={currentTab !== 2}
                                    onClick={() => setCurrentTab(2)}
                                    text="Абонементы"
                                    style={{marginRight:'40px', width:'150px'}}/>
                        </div>
                        <div className="textBlock">
                            <h4>{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].name}</h4>
                            <div className="schedule-block">
                                <img className="schedule-icon" src={weekendIcon} alt="выходные дни"/>
                                <div className="schedule-time">
                                    <div className="text-left">
                                        <p>{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].text1}</p>
                                        <p><b>{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].price1}</b></p>
                                    </div>
                                    <div className="text-left">
                                        <p>{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].text2}</p>
                                        <p><b>{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].price2}</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-block">
                                <img className="schedule-icon" src={weekDaysIcon} alt="будние дни"/>
                                <div className="schedule-time">
                                    <div className="text-left">
                                        <p>{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].text3}</p>
                                        <p><b>{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].price3}</b></p>
                                    </div>
                                    <div className="text-left">
                                        <p>{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].text4}</p>
                                        <p><b>{infrastructurePagesData.spaPrices.spaPricesContent[currentTab][0].price4}</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='sliderBlock'>
                            <SimpleSlider
                                slides={infrastructurePagesData.spaPrices.spaPricesContent[currentTab][1]}
                                styleImg={{height:'476px'}}
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
