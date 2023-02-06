import React from "react";
import css from "./Services.module.scss";

const servicesArr = [
    {
        img: "https://magist.kz/img/icons-image/icon-1.jpg",
        title: "Проведение обрядов",
        descr: "очищение помещений, магазинов. очищение от негативных воздействий.",
    },
    {
        img: "https://magist.kz/img/icons-image/icon-6.jpg",
        title: "Помощь в бизнесе",
        descr: "помощь в определении и выборе вашего будущего бизнеса, открытие канала на денежный поток",
    },
    {
        img: "https://magist.kz/img/icons-image/icon-3.jpg",
        title: "Снятие негативных воздействий",
        descr: "очищение от всех негативных воздействий белой и черной магии, установка защиты и оберега",
    },
    {
        img: "https://magist.kz/img/icons-image/icon-9.jpg",
        title: "Снятие зависимости",
        descr: "снятие зависимости любой сложности: игромании, алкоголизма, зависимости к человеку и т. д.",
    },
    {
        img: "https://magist.kz/img/icons-image/icon-4.jpg",
        title: "Гадание на будущее",
        descr: "предсказание будущих событий или определение их характера",
    },
    {
        img: "https://magist.kz/img/icons-image/icon-2.jpg",
        title: "Снятие чужих чар",
        descr: "избавление от чужих приворотов",
    },
];

const Services = () => {
    return (
        <div className={css.services}>
            <div className={css.container}>
                <p className={css.title}>Мои услуги</p>
                <div className={css.blocks}>
                    {servicesArr.map((item, index) => (
                        <div className={css.block} key={index}>
                            <img src={item.img} alt="гадание" className={css.img} />
                            <p className={css.titleText}>{item.title}</p>
                            <p className={css.descr}>{item.descr}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
