import React from 'react';
import { localObservationDay } from '../utils.js';

const DailyForecast = ({
    date,//just the day of week
    icon,
    alt,
    precipitationprobabilityday,
    // precipitationprobabilitynight,
    sunnyhours,
    temperaturemin,
    temperaturemax
}) => {
    return (
        <article className='dailyforecast__item'>
            <div className=''>
                <time className='day'>{ !!date && localObservationDay(date) }</time>
                <div title={`${alt}`} className='weather-icon'><img src={`weather-icons/${icon}-s.png`} alt={`${alt}`} /></div>

                <div className='sunnyhours'>{sunnyhours}</div>
                
                <div className='precipitationprobability'>{precipitationprobabilityday}</div>
                {/* <div className='precipitationprobability'>{precipitationprobabilitynight}</div> */}

                <div className='temperaturemax'>{ Math.round (temperaturemax.Value) }</div>
                <div className='temperaturemin'>{ Math.round (temperaturemin.Value) }</div>
            </div>
        </article>
    )
}

export default DailyForecast;