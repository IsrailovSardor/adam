import React from "react";
import css from "./Feedback.module.scss";
import call from "../../assets/icons/call.svg";
import ins from "../../assets/icons/ins.svg";
import wha from "../../assets/icons/wha.svg";

const feedback = [
    {
        icon: call,
        title: "+996502772777",
        link: "+996502772777",
    },
    {
        icon: wha,
        title: "+996502772777 Whatsapp",
        link: "https://api.whatsapp.com/send?phone=+996502772777",
    },
    {
        icon: ins,
        title: "@israilov02_",
        link: "https://www.instagram.com/israilov02_/",
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

            <p className={css.time}>Работаю каждый день с 8:00 утра до 2:00 ночи.</p>
        </div>
    );
};

export default Feedback;
