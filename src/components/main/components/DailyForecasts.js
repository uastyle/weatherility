import React from 'react';
import { localObservationDay } from '../utils.js';

const DailyForecasts = ({
    date,//just the day of week
    icon,
    alt,
    sunnyhours,
    temperaturemin,
    temperaturemax
}) => {
    return (
        <article className='dailyforecast'>
            <div className=''>
                <time className='day'>{!!date && localObservationDay(date)}</time>
                <div className='weather-icon'><img src={`weather-icons/${icon}-s.png`} alt={`${alt}`} /></div>
                <div className='sunnyhours'>{sunnyhours}</div>
                <div className='temperaturemin'>{temperaturemin.Value}</div>
                <div className='temperaturemax'>{temperaturemax.Value}</div>
            </div>
        </article>
    )
}

export default DailyForecasts;