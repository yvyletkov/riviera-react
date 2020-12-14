import React from "react";
import s from "./VacanciesPage.module.scss";
import MapSection from "../../shared/MapSection/MapSection";

const VacanciesPage = () => {

    let [currentTab, setCurrentTab] = React.useState(0);
    const tabs = ['Номера и проживание', 'Медицинский центр', 'Транспорт', 'Питание', 'Разное']

    return ( <>
            <section className='section'>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <div className={s.topRow}>
                            <h4 className={s.title}>
                                <span>Часто задаваемые</span>
                                <span>вопросы</span>
                            </h4>
                            <div className={s.textContent}>
                                <p>ул. Ленина 2, Алушта, Крым</p>
                                <p>GPS координаты: 44.667638, 34.411936</p>
                                <p>Воспользуйтесь услугой трансфер, заказать вы можете по телефону <b><a style={{whiteSpace: "nowrap"}} href="tel:8 800 550 98 24" target={'_blank'}>8 800 550 98 24</a></b>
                                </p>

                            </div>
                        </div>

                        <div className={s.tabsWrapper}>
                            {tabs.map( (item, index) => (
                                <div key={index} onClick={ () => setCurrentTab(index)} className={index === currentTab ? s.tab + ' ' + s.active : s.tab}>{item}</div>
                            ))}
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

export default VacanciesPage;
