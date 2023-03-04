import React from "react";
import css from "./Insta.module.scss";
import img1 from "../../assets/gallery/eight.jpg";
import img2 from "../../assets/gallery/five.jpg";
import img3 from "../../assets/gallery/four.jpg";
import img4 from "../../assets/gallery/one.jpg";
import img5 from "../../assets/gallery/seven.jpg";
import img6 from "../../assets/gallery/six.jpg";
import img7 from "../../assets/gallery/three.jpg";
import img8 from "../../assets/gallery/two.jpg";

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
                    <img src={img5} alt="insta" />
                    <img src={img6} alt="insta" />
                    <img src={img7} alt="insta" />
                    <img src={img8} alt="insta" />
                </div>
                <a target={"_blank"} href="https://www.instagram.com/sara722328/" className={css.btn}>
                    Подписаться
                </a>
            </div>
        </div>
    );
};

export default Insta;
