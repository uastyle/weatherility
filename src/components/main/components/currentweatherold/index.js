import React from 'react';
import {localObservationTime, localObservationDate} from '../../utils.js';
import ChooseLocation from './location';

const CurrentWeather = ({ weatherByCityKey, time, temperature, icon }) => {
	return (
		<section className='current-weather'>
			<div className='left-side'>
				<ChooseLocation weatherByCityKey={weatherByCityKey} />
				<time className='date'>{!!time && localObservationDate(time)}</time>
			</div>
			<div className='right-side'>
				<div className='weather-icon'>
					<img src={`weather-icons/${icon}-s.png`} alt='icon' />
				</div>
				<div className='current-info'>
					<p className='temperature'>{temperature && !!temperature.Value && Math.round(temperature.Value)}°</p>
					<time className='time'>{!!time && localObservationTime(time)}</time>
				</div>
			</div>
		</section>
	)
}

export default CurrentWeather;



document.addEventListener('DOMContentLoaded', () => {
	const markeeElements = document.querySelectorAll('markee');

	console.log(markeeElements);

	markeeElements.forEach(function() {
		const span = document.querySelectorAll(`<span> ${markeeElements.textContent} </span>`);
		console.log(span);

		span.style.visibility = 'hidden';

		const body = document.getElementsByTagName('body')[0];
		span.insertAdjacentHTML('beforeend', body);

		if (span.clientWidth > markeeElements.clientWidth) {
			
			setInterval(() => {
				const sl = markeeElements.scrollLeft(markeeElements.scrollLeft + 1);

				if (sl == markeeElements.scrollLeft) {
					markeeElements.scrollLeft = 0
				}
			}, 200);
		}
		span.remove();
	});
});