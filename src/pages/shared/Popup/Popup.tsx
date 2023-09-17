import React from "react";
import styles from './Popup.module.scss'
import {ThisDayItem} from "../../home/components/ThisDayInfo/ThisDayItem";
import {Item} from "../../home/components/ThisDayInfo/ThisDayInfo";
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSwgSilector";
interface Props {}

export const Popup = ({}: Props) => {
    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: '20° - ощущается как 17°',
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: '765 мм ртутного столба - нормальное',
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: 'Без осадков',
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: '3 м/с юго-запад - легкий ветер',
        },
    ];
    return (
      <>
        <div className={styles.blur}></div>
        <div className={styles.popup}>
            <div className={styles.day}>
                <div className={styles.day_temp}>20</div>
                <div className={styles.day_name}>Среда</div>
                <div className={styles.img}>
                    <GlobalSvgSelector id="sun" />
                </div>
                <div className={styles.day_time}>Время:
                    <span>11:12</span></div>
                <div className={styles.day_sity}>Город:<span>Нижний Новгород</span></div>
            </div>
            <div className={styles.this__day_info_items}>
                {items.map((item: Item) => (
                    <ThisDayItem key={item.icon_id} item={item} />
                ))}
            </div>
            <div className={styles.close}>
                <GlobalSvgSelector id="close"/>
            </div>
        </div>
      </>
    );
};