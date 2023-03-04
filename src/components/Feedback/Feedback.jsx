import React from "react";
import css from "./Feedback.module.scss";
import call from "../../assets/icons/call.svg";
import ins from "../../assets/icons/ins.png";
import wha from "../../assets/icons/wha.svg";

const Feedback = () => {
    return (
        <div className={css.whyMe}>
            <p className={css.title}>Частые вопросы</p>
            <div className={css.arrowBlock}>
                <div className={css.blockAccordion}>
                    <div className={css.desrc}>
                        <img src={call} alt="arrow" className={css.arrow} />
                        <a target="_blank" href="tel:+996700606008" className={css.des}>
                            +996700606008
                        </a>
                    </div>
                    <div className={css.desrc}>
                        <img src={wha} alt="arrow" className={css.arrow} />
                        <a
                            target="_blank"
                            href="https://api.whatsapp.com/send/?phone=996700606008&text&type=phone_number&app_absent=0"
                            className={css.des}
                        >
                            +996700606008 Whatsapp
                        </a>
                    </div>
                    <div className={css.desrc}>
                        <img src={ins} alt="arrow" className={css.arrow} />
                        <a target="_blank" href="https://www.instagram.com/sara722328/" className={css.des}>
                            @sara722328
                        </a>
                    </div>
                </div>
            </div>

            <p className={css.time}>*Результат может отличаться в каждом индивидуальном (отдельном) случае.</p>
        </div>
    );
};

export default Feedback;
