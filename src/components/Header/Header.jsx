
import React from "react";
import css from "./Header.module.scss";
import derevo from "../../assets/icons/derevo.png";

const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.container}>
                <ul className={css.list}>
                    <li className={css.img}>
                        <img src={derevo} alt="" />
                    </li>
                    <li>
                        <a href="#aboutMe">ОБО МНЕ</a>
                    </li>
                    <li>
                        <a href="#service">УСЛУГИ</a>
                    </li>
                    <li>
                        <a href="#whyMe">ПОЧЕМУ Я</a>
                    </li>
                    <li>
                        <a href="#inst">ИНСТАГРАМ</a>
                    </li>
                    <li>
                        <a href="#client">ОТЗЫВЫ КЛИЕНТОВ</a>
                    </li>
                    <li>
                        <a href="#call">ОБРАТНАЯ СВЯЗЬ</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;