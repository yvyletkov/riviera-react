import React from "react";
import s from "./VacanciesPage.module.scss";
import MapSection from "../../shared/MapSection/MapSection";
import Headline from "../../shared/Headline/Headline";
import vacationsImg from "../../../img/vacancies/1.jpg";
import Button from "../../shared/Button/Button";

const VacanciesPage = () => {

    React.useEffect( () => document.title = `Вакансии – the Shored SPA - Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    let [currentTab, setCurrentTab] = React.useState(0);
    const tabs = ["Служба питания", "Хозяйственная служба"]

    return ( <>
            <section className="section">
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <div className={s.topRow}>
                            <Headline title="В Riviera Sunrise" subtitle="Карьера" />
                            <div className={s.textContent}>
                                <p>Один из лучших отелей России приглашает в команду единомышленников, умеющих работать на результат, мотивированных на развитие и решение непростых, но очень интересных задач. Мы гарантируем: стабильную заработную плату, официальное трудоустройство, работу в дружной команде профессионалов, скидки для сотрудников на пользование инфраструктурой центра, возможность бесплатного проживания и питания.</p>
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

            <section className="section">
                <div className={s.cardWrapper}>
                    <div className={s.card}>
                        <div className={s.description}>
                            <h2>Повар</h2>
                            <p><b>Опыт работы:</b> от 1 года</p>
                            <br />
                            <p><b>Зарплата:</b> от 25 тыс</p>
                            <br />
                            <p><b>Должностные обязанности:</b></p>
                            <ul className={s.listBlock}>
                                <li>Приготовление блюд из меню раскладок.</li>
                                <li>Управление технологическим процессом и контроль выхода блюд (старший повар).</li>
                            </ul>
                            <br />
                            <p><b>Требования:</b></p>
                            <ul className={s.listBlock}>
                                <li>Образование средне-специальное, специальность: повар.</li>
                                <li>Опыт работы в учреждениях с детским питанием приветствуется.</li>
                                <li>Умение читать технологические карты, знание норм и требований СанПина детского оздоровительного лагеря — желательно.</li>
                                <li>Понимание всех технологических процессов кухни.</li>
                                <li>Личностные качества: ответственность, обязательность, гибкость, любовь к своему делу.</li>
                                <li>Наличие действующей мед.книжки обязательно.</li>
                            </ul>
                            {window.matchMedia('(max-width:992px)').matches ? null : <Button style={{marginTop:'30px'}} text="Оставить резюме"/> }
                        </div>
                        <div className={s.imgBlock}>
                            <img className={s.image} src={vacationsImg} alt="Вакансия" />
                        </div>
                        {window.matchMedia('(min-width:992px)').matches ? null : <Button text="Оставить резюме"/>}
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
