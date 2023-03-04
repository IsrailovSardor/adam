import css from "./AboutMe.module.scss";
import callIcon from "../../assets/icons/call.svg";
import WhyMe from "../WhyMe/WhyMe";
import Feedback from "../Feedback/Feedback";
import logo from "../../assets/img/logo.jpg";
const AboutMe = () => {
    return (
        <div className={css.aboutMe} id="aboutMe">
            <div className={css.container}>
                <div className={css.blockAboutMe}>
                    <div className={css.blockText}>
                        <p className={css.title}>Обо мне</p>
                        <p className={css.descr}>
                            Меня зовут - Сара. Как высококвалифицированная гадалка большим опытом чтения карт Таро, я обладаю уникальным и особенным
                            даром, который отличает меня от других. Моя способность соединяться с энергиями Вселенной и давать прозрения и указания
                            тем, кто ищет ответы, поистине замечательна. Уже с детства я чувствовала, что заметно отличаюсь от своего окружения. Могла
                            наперёд предсказать близким людям, что у них произойдёт в ближайшем будущем, но лишь спустя годы я научилась управлять
                            этой непокорной силой и использовать ее во благо людям, помогая им справиться с бедами и горестями. Моя страсть и
                            преданность своему ремеслу очевидны в результатах, которых я помогла достичь людям, включая использование ритуалов для
                            получения результата. У меня теплое и заботливое поведение, которое успокаивает других, позволяя им легко открыться и
                            поверить в мои способности. Мои проницательные и точные показания, без сомнения, помогли многим людям справиться с
                            трудностями, с которыми они сталкиваются, и обрести большую ясность и направление в своей жизни.
                        </p>
                    </div>
                    <Feedback />
                    <WhyMe />
                </div>
                <div className={css.blockImgMe}>
                    <img src={logo} alt="гадалка" className={css.img} />
                    <p className={css.name}>Сара</p>
                    <p className={css.descr}>Экстрасенс маг высшей категории, терапия души и тела, народный целитель !!!</p>
                    <a
                        target={"_blank"}
                        href="https://api.whatsapp.com/send/?phone=996700606008&text&type=phone_number&app_absent=0"
                        className={css.btn}
                    >
                        Написать
                    </a>
                    <a target={"_blank"} href="tel:+996700606008" className={css.call}>
                        <img src={callIcon} alt="гадалка" />
                        +77772446712
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
