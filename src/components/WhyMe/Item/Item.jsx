import React, {useState} from "react";
import arrow from "../../../assets/icons/arrow.svg";
import css from "../WhyMe.module.scss";

const Item = ({index, item}) => {
    const [count, setCount] = useState(true);
    return (
        <div
            key={index}
            className={css.blockAccordion}
            style={{
                height: count ? "30px" : "auto",
            }}
        >
            <div className={css.desrc} onClick={() => setCount(!count)}>
                <img
                    src={arrow}
                    alt="arrow"
                    className={css.arrow}
                    style={{
                        transition: "0.4s",
                        transform: count ? "rotate(0deg)" : "rotate(90deg)",
                    }}
                />
                <p className={css.des}>{item.title}</p>
            </div>
            <p
                style={{
                    opacity: count ? "0" : "1",
                    transition: "0.4s",
                    transform: count ? " translateX(-1000%)" : "scale(1)",
                }}
                className={css.descrBlock}
            >
                {item.descr}
            </p>
        </div>
    );
};

export default Item;
