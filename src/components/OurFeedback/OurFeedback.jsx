import React, {useState} from "react";
import css from "./OurFeedback.module.scss";
import card from "../../assets/img/car.png";
import taro from "../../assets/icons/taro.png";
import ball from "../../assets/icons/ball.png";
const OurFeedback = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [isAct, setIsAct] = useState(false);
    const handlePrice = (e) => {
        e.preventDefault();
        let str = `${"Имя: " + name + " ," + " Номер: " + number + "."}`;
        const idChat = "-1001749277447";
        const tg_bot = "6248232008:AAG9u9PDi8GpOzgFvScPrUs4kpZVRESnra8";
        var url = `https://api.telegram.org/bot${tg_bot}/sendMessage?chat_id=${idChat}&text=${str} `;
        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
        setName("");
        setNumber("");
        setIsAct(true);
    };

    return (
        <div className={css.ourFeedback} id="call">
            <div className={css.container}>
                <p className={css.title}>Оставьте заявку на обратный звонок</p>
                <div className={css.blocks}>
                    <img src={taro} alt="glass" className={css.img2} />
                    <div className={css.imgs}>
                        <img src={card} alt="glass" className={css.img1} />
                        <img src={ball} alt="glass" className={css.img3} />
                    </div>
                    <form className={css.form}>
                        {isAct && <p className={css.titInput}>Данные отправлены, ждите с вами свяжуться!</p>}
                        <input type="text" placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="number" placeholder="Ваш номер телефона" value={number} onChange={(e) => setNumber(e.target.value)} />
                        <button className={css.btn} disabled={!name} onClick={(e) => handlePrice(e)}>
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
            <div className={css.police}>© 2019—2023 Dianisiya. Все права защищены.</div>
        </div>
    );
};

export default OurFeedback;