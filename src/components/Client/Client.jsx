import css from "./Client.module.scss";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation} from "swiper";

const Client = () => {
    return (
        <div className={css.client}>
            <div className={css.container}>
                <p className={css.title}>Отзывы клиентов</p>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "gold",
                        // "--swiper-pagination-bullet-inactive-opacity": "1",
                        // "--swiper-pagination-bullet-size": "16px",
                        // "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    pagination={{
                        type: "progressbar",
                    }}
                    slidesPerView={4}
                    spaceBetween={50}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className={css.mySwiper}
                >
                    <SwiperSlide>
                        <img src="https://magist.kz/site/templates/images/customers-reviews/rev-4.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://magist.kz/site/templates/images/customers-reviews/rev-4.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://magist.kz/site/templates/images/customers-reviews/rev-4.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://magist.kz/site/templates/images/customers-reviews/rev-4.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://magist.kz/site/templates/images/customers-reviews/rev-4.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://magist.kz/site/templates/images/customers-reviews/rev-4.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://magist.kz/site/templates/images/customers-reviews/rev-4.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://magist.kz/site/templates/images/customers-reviews/rev-4.jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};
export default Client;
