import React from "react";
import s from "./VacanciesPage.module.scss";
import MapSection from "../../shared/MapSection/MapSection";
import Headline from "../../shared/Headline/Headline";
import vacationsImg from "../../../img/vacancies/1.jpg";
import Button from "../../shared/Button/Button";
import {vacanciesPageData} from "../../../data";
import PopupContactForm from "../../additional/ContactForm/PopupContactForm";
import VacanciesSlider from "../../shared/sliders/VacanciesSlider/VacanciesSlider";

const VacanciesPage = () => {

    React.useEffect( () => document.title = `Вакансии – Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    let [currentTab, setCurrentTab] = React.useState(0);
    const [popupOpen, setPopupOpen] = React.useState(false);
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
                <VacanciesSlider sliders={vacanciesPageData}
                                 popupOpen={popupOpen}
                                 setPopupOpen={setPopupOpen}/>
                <PopupContactForm popupOpen={popupOpen} setPopupOpen={setPopupOpen}
                                  popupTitleText={'Для этого, пожалуйста, оставьте свои контактные данные️'}
                                  submitBtnText='Отправить резюме'
                                  formName={`Форма со страницы вакансий`}
                                  swalText={'мы свяжемся с Вами ближайшее время'}
                                  withPhone
                                  withMessage
                                  textAreaPlaceholder={"Вставьте ссылку на резюме"}/>
            </section>


            <section className='section last'>
                <MapSection/>
            </section>
        </>
    );
}

export default VacanciesPage;
