import React from 'react';
import css from './Feedback.module.scss';
import call from '../../assets/icons/call.svg';
import ins from '../../assets/icons/ins.png';
import wha from '../../assets/icons/wha.svg';

const Feedback = () => {
  return (
    <div className={css.whyMe}>
      <p className={css.title}>Частые вопросы</p>
      <div className={css.arrowBlock}>
        <div className={css.blockAccordion}>
          <div className={css.desrc}>
            <img src={call} alt="arrow" className={css.arrow} />
            <a target="_blank" href="tel:+77772446712" className={css.des} rel="noreferrer">
              +77772446712
            </a>
          </div>
          <div className={css.desrc}>
            <img src={wha} alt="arrow" className={css.arrow} />
            <a
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=77772446712&text&type=phone_number&app_absent=0"
              className={css.des} rel="noreferrer"
            >
              +77772446712 Whatsapp
            </a>
          </div>
          <div className={css.desrc}>
            <img src={ins} alt="arrow" className={css.arrow} />
            <a
              target="_blank"
              href="https://www.instagram.com/mag_dianisiya/"
              className={css.des} rel="noreferrer"
            >
              @mag_dianisiya
            </a>
          </div>
        </div>
      </div>

      <p className={css.time}>
        *Результат может отличаться в каждом индивидуальном (отдельном) случае.
      </p>
    </div>
  );
};

export default Feedback;
