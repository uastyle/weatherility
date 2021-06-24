import React from 'react';
import { useSelector } from 'react-redux';

const Headinfo = ({
    city, 
    temperature, 
    icon, 
    weathertext, 
	realfeel, 
    realfeelshade
}) => {
    const headline = useSelector(state => state.currentConditions.headline);

    if (!temperature || !realfeel || !headline) {
		return null
	}
    return (
        <div className='head-info'>
            <div className='city'><span>{city}</span></div>
            <div className='temperature'><p>{ Math.round(temperature.Value)}°{temperature.Unit}</p></div>
            <div className='weather-icon'><img src={`weather-icons/${icon}-s.png`} alt='icon' /></div>
            <div className='description'><p>{weathertext}</p></div>
            <div className='realfeel'><p>Реально відчувається як {Math.round(realfeel.Value)}°
                <span>{temperature.Unit}</span>
                , у затінку немов {Math.round(realfeelshade.Value)}°
                <span>{temperature.Unit}</span>
            </p></div>
            <div className='headline'><p>{headline.Text}</p></div>
        </div>
    )
}

export default Headinfo;