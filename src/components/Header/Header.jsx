import React from "react";
import css from "./Header.module.scss";
const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.container}>
                <ul className={css.list}>
                    <li>ОБО МНЕ</li>
                    <li>ОТЗЫВЫ КЛИЕНТОВ</li>
                    <li>ОБРАТНАЯ СВЯЗЬ </li>
                    <li className={css.img}>
                        <img
                            src="https://img.freepik.com/premium-vector/hand-drawn-mystical-crystal-ball-with-star-and-sun-in-line-art-magic-collection-symbol-talisman-antique-style-boho-vector-doodle-sketch-illustration-isolated-on-white-background_245580-1469.jpg?w=740"
                            alt=""
                        />
                    </li>
                    <li>УСЛУГИ</li>
                    <li>СЕРТИФИКАТЫ</li>
                    <li>ИНСТАГРАМ</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
