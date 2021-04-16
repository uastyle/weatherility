import React from 'react';
import { localObservationHour } from '../../utils.js';

const HourlyForecast = ({
    date,//just the local hour of observation
    icon,
    alt,
    precipitationprobability,
    temperature
}) => {
    return (
        <article className='hourlyforecast'>
            <div className=''>
                <time className='hour'>{!!date && localObservationHour(date)}</time>
                <div className='weather-icon'><img src={`weather-icons/${icon}-s.png`} alt={`${alt}`} /></div>
                <div className='precipitationprobability'>{precipitationprobability}</div>
                {
                    !!temperature &&
                    <div className='temperature'>{ Math.round(temperature.Value) }</div>
                }
                
            </div>
        </article>
    )
}

export default HourlyForecast;