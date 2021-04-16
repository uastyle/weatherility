import React from 'react';
import { localObservationDate, localObservationTime, pressuremmHg, windspeedtoms } from '../../utils.js';

const CurrentConditions = ({ 	
	time,
	city,
	temperature, 
	realfeel, 
	realfeelshade, 
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
	ceiling,
	uvindex, 
	uvindextext
}) => {
	if (!temperature || !realfeel || !winddirection) {
		return null
	}

	return (
		<article className='current-conditions' role='article'>

			<div className='head-info'>
				<p className='city'>{city}</p>
				<p className='weather-type'>Поточні умови</p>
				<p className='temperature'>{ Math.round(temperature.Value)}°{temperature.Unit}</p>
				<div className='weather-icon'><img src={`weather-icons/${icon}-s.png`} alt='icon' /></div>
				<p className='description'>{weathertext}</p>
				<p className='realfeel'>Відчувається як {Math.round(realfeel.Value)}°<span>{temperature.Unit}</span>, у затінку немов {Math.round(realfeelshade.Value)}°<span>{temperature.Unit}</span></p>
			</div>

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

			{
				!!winddirection &&

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
			}

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

			<div className='precipitation'>
				<dl>
					<dt>Деталі</dt>
					<dd className={`percentage percentage-${humidity}`}><span className="text">Вологість: {humidity}%</span></dd>
					<dd className={`percentage percentage-${cloudcover}`}><span className="text">Хмарний покрив: {cloudcover}%</span></dd>
					<dd className={`percentage percentage-${uvindex}`}><span className="text">Максимальний індекс УФ: {uvindex} ({uvindextext})</span></dd>
					<dd className={`percentage percentage-${Number(precipitation.Value) ? precipitation.Value : '0'}`}><span className="text">Опади: {Number(precipitation.Value) ? precipitation.Value : '0'} мм</span></dd>
				</dl>
			</div>
			
		</article>
	)
}

export default CurrentConditions;