import React from "react";
import css from "./Header.module.scss";
const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.container}>
                <ul className={css.list}>
                    <li>
                        <a href="#aboutMe">ОБО МНЕ</a>
                    </li>

                    <li>ОТЗЫВЫ КЛИЕНТОВ</li>
                    <li>
                        <a href="#call">ОБРАТНАЯ СВЯЗЬ</a>
                    </li>

                    <li className={css.img}>
                        <img
                            src="https://img.freepik.com/premium-vector/hand-drawn-mystical-crystal-ball-with-star-and-sun-in-line-art-magic-collection-symbol-talisman-antique-style-boho-vector-doodle-sketch-illustration-isolated-on-white-background_245580-1469.jpg?w=740"
                            alt=""
                        />
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
                </ul>
            </div>
        </header>
    );
};

export default Header;
