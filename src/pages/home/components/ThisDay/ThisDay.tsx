import React from "react";
import styles from './ThisDay.module.scss'
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSwgSilector";
import {Weather} from "../../../../store/types/types";
interface Props {
    weather: Weather;
}

export const ThisDay = ({weather}: Props) => {
    return (
        <div className={styles.thisDay}>
            <div className={styles.top__block}>
                <div className={styles.top__block_wrapper}>
                    <div className={styles.this__temp}>{Math.floor(weather.main.temp)}°</div>
                    <div className={styles.this__day}>Сегодня</div>
                </div>
                <GlobalSvgSelector id="sun"/>

            </div>
            <div className={styles.bottom__block}>
                <div className={styles.this__time}>Время: <span>12:15</span></div>
                <div className={styles.this__time}>Город: <span>Нижний Новгород</span></div>
            </div>
        </div>
    )
}