import React, {useEffect} from "react";
import styles from './Home.module.scss'

import { fetchCurrentWeather } from '../../../store/thunks/fetchCurrentWeather';
import { Days } from '../components/Days/Days';
import { ThisDay } from '../components/ThisDay/ThisDay';
import { ThisDayInfo } from '../components/ThisDayInfo/ThisDayInfo';
import {useCustomDispatch, useCustomSelector} from "../../../hooks/store";
import {selectCurrentWeatherData} from "../../../store/selectors";
interface Props {}

export const Home = (props: Props) => {
    const dispatch = useCustomDispatch();

    const {weather} = useCustomSelector(selectCurrentWeatherData);


    useEffect(() => {
        dispatch(fetchCurrentWeather('paris'));
    }, []);
    return (
        <div className={styles.home}>
            <div className={styles.wrapper}>
                <ThisDay weather={weather} />
                <ThisDayInfo />
            </div>
            <Days />
        </div>
    );
};