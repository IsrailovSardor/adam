import React from "react";
import css from "./Insta.module.scss";
import img1 from "../../assets/img/photo_1_2023-02-11_16-17-37.jpg";
import img2 from "../../assets/img/photo_2_2023-02-11_16-17-37.jpg";
import img3 from "../../assets/img/photo_3_2023-02-11_16-17-37.jpg";
import img4 from "../../assets/img/photo_4_2023-02-11_16-17-37.jpg";
const Insta = () => {
    return (
        <div className={css.myInst} id="inst">
            <div className={css.container}>
                <p className={css.title}>Мои Инстаграм</p>
                <div className={css.blocks}>
                    <img src={img3} alt="insta" />
                    <img src={img1} alt="insta" />
                    <img src={img2} alt="insta" />
                    <img src={img4} alt="insta" />
                </div>
                <a target={"_blank"} href="https://www.instagram.com/mag_dianisiya/" className={css.btn}>
                    Подписаться
                </a>
            </div>
        </div>
    );
};

export default Insta;
