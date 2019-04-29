import React from 'react';
import {localObservationTime, localObservationDate, icons} from '../../utils.js';

const CurrentWeather = ({ time, temperature, icon }) => {
	return (
		<section className='current-information'>
			<div className='left-side'>
				<h2 className='city'>Київ</h2>
				<p className='date'>{localObservationDate(time)}</p>
			</div>
			<div className='right-side'>
				<div className='weather-icon'>
					<img src={icons['icon_'+icon]} alt='icon' />
				</div>

				<div>
					<p className='temperature'>{Math.round(temperature.Value)}&#176;</p>
					<p>{localObservationTime(time)}</p>
				</div>
			</div>
		</section>
	)
}

export default CurrentWeather;