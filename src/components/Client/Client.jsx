import css from './Client.module.scss';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import a from '../../assets/otzv/a.jpg';
import aa from '../../assets/otzv/aa.jpg';
import aaa from "../../assets/otzv/aaa.jpg";
import aaaa from "../../assets/otzv/aaaa.jpg";
import aaaaa from "../../assets/otzv/aaaaa.jpg";

const Client = () => {
  return (
    <div className={css.client} id="client">
      <div className={css.container}>
        <p className={css.title}>Отзывы клиентов</p>
        <Swiper
          style={{
            '--swiper-pagination-color': 'gold',
          }}
          pagination={{
            type: 'progressbar',
          }}
          slidesPerView={4}
          spaceBetween={50}
          modules={[Pagination, Navigation]}
          className={css.mySwiper}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <img src={a} alt="a" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={aa} alt="a" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={aaa} alt="a" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={aaaa} alt="a" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={aaaaa} alt="a" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={css.police}>
        © 2019—2023 Dianisiya. Все права защищены.
      </div>
    </div>
  );
};
export default Client;
