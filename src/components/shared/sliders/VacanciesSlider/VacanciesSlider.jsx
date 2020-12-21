import s from "./VacanciesSlider.module.scss";
import Slider from "react-slick";
import React from "react";
import arrowImg from "../../../../img/sliderArrows/arrowThin.png";
import Button from "../../Button/Button";

function NextArrow({style, onClick}) {
    return <div className={s.nextArrow}
                style={{...style, backgroundImage: 'url(' + arrowImg + ')'}}
                onClick={onClick}
    />
}

function PrevArrow({style, onClick}) {
    return <div className={s.prevArrow}
                style={{...style, backgroundImage: 'url(' + arrowImg + ')'}}
                onClick={onClick}
    />
}

const VacanciesSlider = ({sliders, popupOpen, setPopupOpen}) => {

    const settings = {
        infinite: false,
        slidesToShow: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: false,
                    variableWidth: true,
                    slidesToShow: 1,
                    dots: true,
                }
            },
        ]
    };

    return <div className={s.wrapper}>
        <div className={s.container}>

            <div className={s.sliderWrapper}>
                <Slider {...settings}>
                    {sliders.map((item, index) => {
                        return <div key={index}>
                            <div className={s.cardWrapper}>
                                <div className={s.card}>
                                    <div className={s.description}>
                                        <h2>{item.vacancy}</h2>
                                        <p><b>Опыт работы: </b>{item.experience}</p>
                                        <br />
                                        <p><b>Зарплата: </b>{item.salary}</p>
                                        <br />
                                        <p><b>Должностные обязанности:</b></p>
                                        <ul className={s.listBlock}>
                                            {item.duties.map((e) => {
                                                return <li>{e}</li>
                                            })}
                                        </ul>
                                        <br />
                                        <p><b>Требования:</b></p>
                                        <ul className={s.listBlock}>
                                            {item.demands.map((e) => {
                                                return <li>{e}</li>
                                            })}
                                        </ul>
                                        {window.matchMedia('(max-width:992px)').matches ? null :
                                            <Button style={{marginTop:'30px'}}
                                                    text="Оставить резюме"
                                                    onClick={ () => setPopupOpen(true) } /> }
                                    </div>
                                    <div className={s.imgBlock}>
                                        <img className={s.image} src={item.img} alt="Вакансия" />
                                    </div>
                                    {window.matchMedia('(min-width:992px)').matches ? null :
                                        <Button text="Оставить резюме"
                                                onClick={ () => setPopupOpen(true)}/>
                                    }
                                </div>
                            </div>
                        </div>
                    })}
                </Slider>
            </div>

        </div>
    </div>
};

export default VacanciesSlider;
