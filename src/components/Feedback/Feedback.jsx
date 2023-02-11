import React from "react";
import css from "./Feedback.module.scss";
import call from "../../assets/icons/call.svg";
import ins from "../../assets/icons/ins.png";
import wha from "../../assets/icons/wha.svg";

const feedback = [
    {
        icon: call,
        title: "+77772446712",
        link: "+77772446712",
    },
    {
        icon: wha,
        title: "+77772446712 Whatsapp",
        link: "https://api.whatsapp.com/send/?phone=77772446712&text&type=phone_number&app_absent=0",
    },
    {
        icon: ins,
        title: "@mag_dianisiya",
        link: "https://www.instagram.com/mag_dianisiya/",
    },
];

const Feedback = () => {
    return (
        <div className={css.whyMe}>
            <p className={css.title}>Частые вопросы</p>
            <div className={css.arrowBlock}>
                {feedback.map((item, index) => (
                    <div key={index} className={css.blockAccordion}>
                        <div className={css.desrc}>
                            <img src={item.icon} alt="arrow" className={css.arrow} />
                            <a href={item.link} className={css.des}>
                                {item.title}
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <p className={css.time}>*Результат может отличаться в каждом индивидуальном (отдельном) случае.</p>
        </div>
    );
};

export default Feedback;
