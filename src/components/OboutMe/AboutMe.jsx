import css from "./AboutMe.module.scss";
import callIcon from "../../assets/icons/call.svg";
import WhyMe from "../WhyMe/WhyMe";
import Feedback from "../Feedback/Feedback";

const AboutMe = () => {
    return (
        <div className={css.aboutMe}>
            <div className={css.container}>
                <div className={css.blockAboutMe}>
                    <div className={css.blockText}>
                        <p className={css.title}>Обо мне</p>
                        <p className={css.descr}>
                            Меня зовут - Нина, я потомственная гадалка, моя цель в жизни - помогать растерянным и утратившим веру в себя людям. Уже с
                            детства я чувствовала, что заметно отличаюсь от своего окружения. Могла наперёд предсказать близким людям, что у них
                            произойдёт в ближайшем будущем, но лишь спустя годы я научилась управлять этой непокорной силой и использовать ее во благо
                            людям, помогая им справиться с бедами и горестями. При помощи гадания и магических ритуалов, передаваемых веками в моем
                            роду Вы сможете узнать ответы на давно волнующие Вас вопросы и найти выход даже из самой сложной жизненной ситуации. В
                            жизни много ситуаций, которые нельзя объяснить логикой и сознанием. Пока у нас все хорошо, кажется, что мы сами управляем
                            своей жизнью и можем предопределять судьбу.
                        </p>
                    </div>
                    <Feedback />
                    <WhyMe />
                </div>
                <div className={css.blockImgMe}>
                    <img src="https://magist.kz/img/img-owner-1.jpeg" alt="гадалка" className={css.img} />
                    <p className={css.name}>Matvienko Adam</p>
                    <p className={css.descr}>Легендарная ясновидищая и знахарка</p>
                    <button className={css.btn}>Написать</button>
                    <a href="tel:+996500772777" className={css.call}>
                        <img src={callIcon} alt="гадалка" />
                        0502772777
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
