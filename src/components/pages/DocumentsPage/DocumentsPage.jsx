import React from "react";
import s from "./DocumentsPage.module.scss";
import MapSection from "../../shared/MapSection/MapSection";


const DocumentsPage = () => {

    React.useEffect(() => document.title = `Официальные документы - Riviera Sunrise Resort & SPA – Алушта, Крым`, [])


    return (<>
            <section className='section'>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <div className={s.topRow}>
                            <h2 className={s.title}>
                                <span>Документы</span>
                                <span>Riviera Sunrise</span>
                            </h2>
                            <div className={s.textContent}>
                                <p>Для удобства наших гостей мы разместили важную документацию объекта в данном разделе.
                                    Если Вам необходима дополнительная информация – напишите нам на почту <a style={{textDecoration: 'underline'}} target='_blank' href="mailto:info.alushta@rivierasunrise.com">info.alushta@rivierasunrise.com</a></p>
                            </div>
                        </div>
                        <div className={s.links}>
                            <ul>
                                <li><a target='_blank' href="/documents/Pravila-prozhivaniya-RiveraNEW.pdf">Правила предоставления гостиничных услуг</a></li>
                                <li><a target='_blank' href="/documents/pravila-spa.pdf">Правила посещения СПА-центра и открытой Аквазоны</a></li>
                                <li><a target='_blank' href="/documents/Prikaz-53-O-priostanovke-deyatelnosti-1.pdf">Приказ №53 О приостановке деятельности</a></li>
                                <li><a target='_blank' href="/documents/prikaz-99.pdf">Приказ №99 об утверждении перечня документов, необходимых для заезда в отель в период с 28.12.2020г. по 15.01.2021г.</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <section className='section last'>
                <MapSection/>
            </section>
        </>
    );
}

export default DocumentsPage;
