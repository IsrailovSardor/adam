import React from "react";
import css from "./Services.module.scss";

const servicesArr = [
    {
        img: "https://s.0362.ua/section/promonewsintext/upload/images/promo/intext/000/053/771/lubonaa-magia_6115186588b38.jpg",
        title: "Любовная магия, привороты",
        descr: "🔮Обряд на скорый брак, Привлечение жениха, Возвращение любимого человека, Спасение семьи от развода, Воссоединение семьи, Отворот разлучницы, Обряд на верность",
    },
    {
        img: "https://magist.kz/img/icons-image/icon-4.jpg",
        title: "Cнятие порчи",
        descr: "🔮Избавление от пьянства, Избавление от зависимостей, Снятие порчи, сглаза, проклятия, Избавление от одиночества, Снятие венца безбрачия, Защита от завистников, Защита детей, Помощь бездетным парам, Очищение ауры и энергетики",
    },
    {
        img: "https://img.freepik.com/premium-photo/black-background-with-a-ball-and-candles-divination-and-prediction-of-fate_494741-52504.jpg",
        title: "Предсказание судьбы",
        descr: "🔮Ответы на любые вопросы, Гадание на любовь, Гадание на будущее, Гадание на ТАРО, Литье судьбы воском, Корректировка судьбы, Предсказание близкого будущего",
    },
    {
        img: "https://mn-zd.ru/wp-content/uploads/2020/12/%D1%80%D0%B8%D1%82%D1%83%D0%B0%D0%BB%D1%8B.jpg",
        title: "Обряды на прибыль",
        descr: "🔮Совет в принятии решения, Защита от недоброжелателей, Обряд на карьерный рост, Обряд на успех в любом деле, Притяжение благополучия, Обряд на финансовый успех",
    },
    {
        img: "https://magist.kz/img/icons-image/icon-6.jpg",
        title: "Магическая защита ",
        descr: "🔮Специальное воздействие любовной магии. Это ритуал или обряд, который можно выполнять разными способами и силами (белая магия, черная магия), но цель влияния — защитить имеющиеся между людьми взаимосвязи и отношения от внешних опасностей и угроз.",
    },
    {
        img: "https://magist.kz/img/icons-image/icon-9.jpg",
        title: "Без греха",
        descr: "🔮Помощь в самых безвыходных ситуациях без вреда и греха. Исправлю работу недобросовестных лже магов и шарлатанов.",
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
