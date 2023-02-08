import React from "react";
import css from "./OurFeedback.module.scss";

const OurFeedback = () => {
    return (
        <div className={css.ourFeedback}>
            <div className={css.container}>
                <p className={css.title}>Оставьте заявку на обратный звонок</p>
                <div className={css.blocks}>
                <img src="https://magist.kz/site/templates/images/hotpng.com.png" alt="glass" className={css.img2} />

                    <div className={css.imgs}>
                        <img src="https://magist.kz/site/templates/images/hotpng.com.png" alt="glass" className={css.img1} />
                        <img src="https://magist.kz/site/templates/images/hotpng.com.png" alt="glass" className={css.img3} />
                    </div>
                    <form className={css.form}>
                        <input type="text" placeholder="Ваше имя" />
                        <input type="text" placeholder="Ваш номер телефона" />
                        <button className={css.btn}>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OurFeedback;
