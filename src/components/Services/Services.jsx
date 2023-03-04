import React from "react";
import css from "./Services.module.scss";
import a1 from "../../assets/service/1.jpg";
import a2 from "../../assets/service/2.jpg";
import a3 from "../../assets/service/3.avif";
import a4 from "../../assets/service/4.jpg";
import a5 from "../../assets/service/5.jpg";
import a6 from "../../assets/service/7.jpg";

const servicesArr = [
    {
        img: a2,
        title: "Cнятие порчи",
        descr: "Избавление от пьянства, Избавление от зависимостей, Снятие порчи, сглаза, проклятия, Избавление от одиночества, Снятие венца безбрачия, Защита от завистников, Защита детей, Помощь бездетным парам, Очищение ауры и энергетики",
    },
    {
        img: a6,
        title: "Без греха",
        descr: "Помощь в самых безвыходных ситуациях без вреда и греха. Исправлю работу недобросовестных лже магов и шарлатанов.",
    },
    {
        img: a3,
        title: "Предсказание судьбы",
        descr: "Ответы на любые вопросы, Гадание на любовь, Гадание на будущее, Гадание на ТАРО, Литье судьбы воском, Корректировка судьбы, Предсказание близкого будущего",
    },
    {
        img: a5,
        title: "Магическая защита ",
        descr: "Специальное воздействие любовной магии. Это ритуал или обряд, который можно выполнять разными способами и силами (белая магия, черная магия), но цель влияния — защитить имеющиеся между людьми взаимосвязи и отношения от внешних опасностей и угроз.",
    },
    {
        img: a4,
        title: "Обряды на прибыль",
        descr: "Совет в принятии решения, Защита от недоброжелателей, Обряд на карьерный рост, Обряд на успех в любом деле, Притяжение благополучия, Обряд на финансовый успех",
    },
    {
        img: a1,
        title: "Любовная магия, привороты",
        descr: "Обряд на скорый брак, Привлечение жениха, Возвращение любимого человека, Спасение семьи от развода, Воссоединение семьи, Отворот разлучницы, Обряд на верность",
    },
];

const Services = () => {
    return (
        <>
            <div className={css.services} id="service">
                <div className={css.container}>
                    <p className={css.title}>Мои услуги</p>
                    <div className={css.blocks}>
                        {servicesArr.map((item, index) => (
                            <a
                                target={"_blank"}
                                href="https://api.whatsapp.com/send/?phone=77772446712&text&type=phone_number&app_absent=0"
                                className={css.block}
                                key={index}
                            >
                                <div className={css.anim}>
                                    <img src={item.img} alt="img" className={css.img} />
                                </div>

                                <p className={css.titleText}>{item.title}</p>
                                <p className={css.descr}>{item.descr}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
