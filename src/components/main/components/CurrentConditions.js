import React from 'react';
import { useSelector } from 'react-redux';
import { localObservationDate, localObservationTime, pressuremmHg, windspeedtoms } from '../utils.js';

const CurrentConditions = ({ 	
	time,
	temperature, 
	realfeel, 
	pressure, 
	precipitation, 
	winddirection, 
	windspeed,
	humidity, 
	dewpoint, 
	visibility, 
	cloudcover, 
	ceiling,
	uvindex, 
	uvindextext
}) => {

	if (!temperature || !realfeel || !winddirection) {
		return null
	}

	return (
		<article className='current-conditions' role='article'>

			<div className='extra-info'>
				<p>Максимальний індекс УФ:</p>
				<ul className="chartlist">
					<li>
						<a href='/'>{uvindex}</a> 
						<span className="count">{uvindextext}</span>
						<span className={`index percentage-${uvindex}`}></span>
					</li>
				</ul>
			</div>

			<div>
				<div className={`progress-circle p${cloudcover}`}>
					<span>{cloudcover}%</span>
					<div className="left-half-clipper">
						<div className="first50-bar"></div>
						<div className="value-bar"></div>
					</div>
				</div>
				<div><p>Хмарний покрив</p></div>
			</div>

			<div>
				<div className={`progress-circle p${humidity}`}>
					<span>{humidity}%</span>
					<div className="left-half-clipper">
						<div className="first50-bar"></div>
						<div className="value-bar"></div>
					</div>
				</div>
				<div><p>Вологість</p></div>
			</div>

			<div>
				<div className={`progress-circle p${winddirection.Degrees}`}>
					<span>{winddirection.English}</span>
					<div className="left-half-clipper">
						<div className="first50-bar"></div>
						<div className="value-bar"></div>
					</div>
				</div>
				<div><p>Вітер <br/> {winddirection.Localized}, {Number(windspeed.Value) ? windspeedtoms(windspeed.Value) : '--'} м/с</p></div>
			</div>

			<div>
				<div className={`progress-circle p${Number(precipitation.Value) ? precipitation.Value : '0'}`}>
					<span>{Number(precipitation.Value) ? precipitation.Value : '0'} мм</span>
					<div className="left-half-clipper">
						<div className="first50-bar"></div>
						<div className="value-bar"></div>
					</div>
				</div>
				<div><p>Опади</p></div>
			</div>

			<div><p>Висота нижньої межі хмар: {ceiling.Value} м</p></div>
			<div><p>Точка роси: {dewpoint.Value}&#176;<span>{temperature.Unit}</span></p></div>
			<div><p>Видимість: {visibility.Value.toFixed()} км</p></div>
			<div><p>Тиск: {Number(pressure.Value) ? pressuremmHg(pressure.Value) : '--'} мм. рт. ст.</p></div>
	
			<div className='localobservation-date-time'>
				<time className='date'>{!!time && localObservationDate(time)}</time>
				<time className='time'>{!!time && localObservationTime(time)}</time>
			</div>
	
		</article>
	)
}

export default CurrentConditions;