import React from 'react';
import {pressuremmHg, windspeedtoms, icons} from '../../utils.js';

const DetailedWeather = (
	{ 
		temperature, 
		realfeel, 
		weathertext, 
		icon, 
		pressure, 
		precipitation, 
		winddirection, 
		windspeed,
		humidity, 
		dewpoint, 
		visibility, 
		cloudcover, 
		uvindex, 
		uvindextext
	}) => {

	return (
		<section className='detailed-weather'>
			<p className='weather-type'>Поточна погода</p>
			
			<div className='head-info'>
				<div>
					<h1 className='temperature'>{Math.round(temperature.Value)}&#176;{temperature.Unit}</h1>
					<p className='realfeel'>Відчувається як: <span>{Math.round(realfeel.Value)}&#176;{temperature.Unit}</span></p>
					<p className='description'>{weathertext}</p>
				</div>
				<div className='weather-icon'>
					<img src={`weather-icons/${icon}-s.png`} alt='icon' />
				</div>
			</div>

			<div className='extra-info'>
				<p>Тиск: <span>{Number(pressure.Value) ? pressuremmHg(pressure.Value) : '---'} мм. рт. ст.</span></p>
				<p>Опади: <span>{Number(precipitation.Value) ? precipitation.Value : '---'} мм</span></p>
				<p>Вітер <span>{winddirection.Localized}, {Number(windspeed.Value) ? windspeedtoms(windspeed.Value) : '---'} м/с</span></p>
				<p>Вологість: <span>{humidity}%</span></p>
				<p>Точка роси: <span>{dewpoint.Value}&#176;{temperature.Unit}</span></p>
				<p>Видимість: <span>{visibility.Value.toFixed()} км</span></p>
				<p>Хмарний покрив: <span>{cloudcover}%</span></p>
				<p>Індекс УФ: <span>{uvindex} ({uvindextext})</span></p>
			</div>
		</section>
	)
}

export default DetailedWeather;