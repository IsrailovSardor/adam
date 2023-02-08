import React from "react";
import css from "./Insta.module.scss";

const Insta = () => {
    return (
        <div className={css.myInst}>
            <div className={css.container}>
                <p className={css.title}>Мои Инстаграм</p>
                <div className={css.blocks}>
                    <img src="https://magist.kz/img/insta/insta-1.jpeg" alt="insta" />
                    <img src="https://magist.kz/img/insta/insta-1.jpeg" alt="insta" />
                    <img src="https://magist.kz/img/insta/insta-1.jpeg" alt="insta" />
                    <img src="https://magist.kz/img/insta/insta-1.jpeg" alt="insta" />
                </div>
                <button className={css.btn}>Подписаться</button>
            </div>
        </div>
    );
};

export default Insta;
