import React from "react";
import css from "./Swiper.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const arrSwiper = [
    {
        img: "https://thumb.tildacdn.com/tild3536-3366-4265-b333-343831306466/-/resize/400x400/-/format/webp/156763.jpg",
        title: "Потомственная ясновидящая",
        descr: "Принадлежу к древнему северному роду. Наследственный дар, знания и опыт передавались от поколения к поколению.",
    },
    {
        img: "https://thumb.tildacdn.com/tild3362-3934-4862-b236-383432653435/-/resize/400x400/-/format/webp/maxresdefault.jpg",
        title: "Магия на расстоянии",
        descr: "Оказываю результативную магическую помощь в любых сложных ситуациях. Помогаю на расстоянии по всему МИРУ!",
    },
    {
        img: "https://thumb.tildacdn.com/tild3164-3862-4463-a463-373765346162/-/resize/400x400/-/format/webp/podderzhka.jpg",
        title: "Помощь в нестандартных ситуациях",
        descr: "Большой опыт и многолетняя практика. В практике используется более 50 проверенных временем методов.",
    },
    {
        img: "https://thumb.tildacdn.com/tild6233-3637-4434-a562-343634353439/-/resize/400x400/-/format/webp/4e4214d1324cf1713380.jpg",
        title: "Решаю проблемы любой сложности",
        descr: "Вы получаете практически сразу ответ на беспокоящий вас вопрос.",
    },
    {
        img: "https://thumb.tildacdn.com/tild6462-6330-4939-a336-316533316464/-/resize/400x600/-/format/webp/WhatsApp_Image_2021-.jpeg",
        title: "Без греха",
        descr: "Помощь в самых безвыходных ситуациях без вреда и греха. Исправлю работу недобросовестных лже магов и шарлатанов.",
    },
    {
        img: "https://thumb.tildacdn.com/tild3532-3361-4933-b261-623634623731/-/resize/400x600/-/format/webp/WhatsApp_Image_2021-.jpeg",
        title: "Личный или онлайн прием",
        descr: "Оставьте заявку и я вам перезвоню.",
    },
];

const SwiperBlock = () => {
    return (
        <div className={css.swiper} id="whyMe">
            <p className={css.globalTitlle}>Почему стоит обратиться ко мне?</p>

            <Swiper
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                }}
                modules={[Autoplay, Pagination]}
                className={css.mySwiper}
            >
                {arrSwiper.map((item, index) => (
                    <SwiperSlide className={css.block} key={index}>
                        <img className={css.img} src={item.img} alt="гадание" />
                        <div className={css.blockText}>
                            <p>{item.title}</p>
                            <p>{item.descr}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperBlock;
