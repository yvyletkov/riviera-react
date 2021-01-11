import React from "react";
import s from "./SinglePromotionPage.module.scss";
import MapSection from "../../../shared/MapSection/MapSection";
import walletImg from "../../../../img/wallet.png";

const SinglePromotionPage = ({bannerImg, title, description, hiddenDescription, firstCol, secondCol}) => {

    console.log(title)

    React.useEffect( () => document.title = `${title[0]} ${title[1]} – Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    const [showDescr, setShowDescr] = React.useState(false);


    return (<>
            <section className='section'>
                <div className={s.wrapper} style={{background: `center top url(${bannerImg})`}}/>
            </section>


            <section className='section'>
                <div className={s.contentWrapper}>
                    <div className={s.container}>

                        <div className={s.topRow}>
                            <h1 className={s.title}>
                                <span>{title[0]}</span>
                                <span dangerouslySetInnerHTML={{__html: title[1]}}/>
                            </h1>
                            <div className={s.textContent}>
                                <p dangerouslySetInnerHTML={{__html: description}}/>
                                <div className={s.btn} onClick={() => setShowDescr(!showDescr)}><b>Политика оплаты</b>
                                </div>
                                <div className={showDescr ? s.description + ' ' + s.active : s.description}>
                                    <img src={walletImg} alt="Кошелек"/>
                                    <div dangerouslySetInnerHTML={{__html: hiddenDescription}}/>
                                </div>
                            </div>
                        </div>

                        <div className={s.flexWrapper}>

                            <div dangerouslySetInnerHTML={{__html: firstCol}} className={s.col}/>
                            <div dangerouslySetInnerHTML={{__html: secondCol}} className={s.col}/>

                        </div>

                    </div>
                </div>
            </section>

            <section className='section last'>
                <MapSection/>
            </section>
        </>
    );
};

export default SinglePromotionPage;
