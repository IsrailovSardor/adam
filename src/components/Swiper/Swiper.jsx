import React from "react";
import css from "./Swiper.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Parallax, Pagination, Navigation} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperBlock = () => {
    return (
        <div className={css.swiper}>
            <p className={css.globalTitlle}>Отзывы клиентов</p>

            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className={css.mySwiper}
            >
                <div
                    slot="container-start"
                    className={css.parallaxBg}
                    style={{
                        backgroundImage:
                            'url("https://img.freepik.com/premium-photo/black-background-with-a-ball-and-candles-divination-and-prediction-of-fate_494741-49852.jpg")',
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div className={css.block}>
                        <img className={css.img} src="https://magist.kz/site/assets/files/1100/what-i-do-1.jpg" alt="" />
                        <p>Избавление от алкоголической зависимости.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={css.block}>
                        <img className={css.img} src="https://magist.kz/site/assets/files/1100/what-i-do-1.jpg" alt="" />
                        <p>
                            Чистка денежного канала, обряды на открытие и расширение бизнеса, которые будут воздействовать на привлечение клиентов и
                            на увеличение продаж.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={css.block}>
                        <img className={css.img} src="https://magist.kz/site/assets/files/1100/what-i-do-1.jpg" alt="" />
                        <p>Поиск и решения проблем, касающихся здоровья.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={css.block}>
                        <img className={css.img} src="https://magist.kz/site/assets/files/1100/what-i-do-1.jpg" alt="" />
                        <p>Избавление от алкоголической зависимости.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperBlock;
