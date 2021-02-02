import React from "react";
import InfrastructurePageBanner from "./InfrastructurePageBanner/InfrastructurePageBanner";
import InfraMainSlider from "../../shared/sliders/InfraMainSlider/InfraMainSlider";
import {infrastructurePagesData} from "../../../data";
import Headline from "../../shared/Headline/Headline";
import styled from "styled-components"
import phoneIcon from "../../../img/phone.svg"
import mailIcon from "../../../img/mail.svg"


const TextBlock = styled.div`
  .textBlockWrapper {
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    
   

    .background {
      position: absolute;
      z-index: -1;
      height: 465px;
      background-color: #f6f6f6;
      width: 100vw;
      right: 150px;
      top: 50%;
      transform: translateY(-50%);
    }

    .container {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      width: 100%;
      box-sizing: border-box;
      margin: 0 auto;
      height: 595px;
      padding-right: 80px;
      //overflow: hidden;



      .textContent {
        position: relative;
        padding: 100px 50px 100px 0;
        max-width: 50%;
        box-sizing: border-box;

        p {
          text-align: justify;
          margin: 15px 0 18px;
          
          a.link {
            display: block;
            margin-bottom: 7px;
          }
          
        }

        h5 {
          margin-top: 25px;
          margin-bottom: 10px;
        }

        .icon {
          width: 17px;
          margin-right: 8px;
          position: relative;
          top: 3px;
        }

      }

      .map {
        width: 970px;
        margin-right: -430px;
        height: 595px;
        object-fit: cover;
        border-radius: 5px;
        //box-shadow: -9.629px 12.778px 27px 0px rgba(23, 23, 23, 0.09);

        @media (max-width: 768px) {
          border-radius: 0;
        }
      }

    }

    @media screen and (max-width: 1200px) {
      .container {
        padding-right: 10px;
        padding-left: 0;

        .textContent {
          padding: 0 20px;
          margin-bottom: 20px;
        }

        .map {
          margin-right: unset;
          max-width: 50%;
        }

      }

    }

    @media screen and (max-width: 768px) {

      .container {
        display: block;
        padding: 30px 0 30px 0;
        height: unset;
        background-color: #f7f7f7;

        .background {
          display: none;
        }

        .textContent {
          padding: 0 0 0 20px;
          margin-bottom: 20px;
          max-width: unset;

          p {
            padding-right: 20px;
            
          }
          
         
        }

        .map {
          max-width: 100%;
          width: 100vw;
          height: calc(100vw * 1.07);
          position: relative;
        }

      }

    }

  }
`

const SpaPage = () => {

    React.useEffect(() => document.title = `SPA комплекс – the Shored SPA – Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    return <>
        <InfrastructurePageBanner bannerData={infrastructurePagesData.spaPage.bannerData}/>

        <section className='section first'>
            <InfraMainSlider title={'Совершенный уровень отдыха'} slides={infrastructurePagesData.spaPage.slides}/>
        </section>

        <section className='section'>

            <TextBlock>
                <div className={'textBlockWrapper'}>

                    <div className={'container'}>
                        <div className={'textContent'}>
                            <Headline subtitle={'Контакты'} title={'SPA комплекса'}/>

                            <p>Мы заботимся о комфортном пребывании гостей в SPA-комплексе, для этого просим соблюдать <a
                                style={{textDecoration: 'underline', color: '#000'}} target='_blank'
                                href="/documents/pravila-spa.pdf">несколько простых
                                правил</a>, которые сделают Ваш отдых и отдых других гостей максимально приятным.
                            </p>
                            <p>
                                <a className='link' target='_blank'
                                   href="mailto:spa.alushta@rivierasunrise.com">
                                    <img className={'icon'} src={mailIcon} alt=""/>spa.alushta@rivierasunrise.com
                                </a>
                                <a className='link' href="tel:89789153591">
                                    <img className={'icon'} src={phoneIcon} alt=""/>8 978 915 35 91
                                </a>
                            </p>

                        </div>
                        <div className={'map'}>
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae544672a9bb4a672beb2acd7bbbfc620c689249d0fc5b400fd8fc5d3817c2247&amp;source=constructor"
                                    width="100%" height="100%" frameBorder="0"/>
                        </div>

                    </div>
                </div>
            </TextBlock>

        </section>

    </>
}

export default SpaPage;
