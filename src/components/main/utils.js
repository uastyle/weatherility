// The debounce function receives our function as a parameter
const debounce = (fn) => {

	// This holds the requestAnimationFrame reference, so we can cancel it if we wish
	let frame;

	// The debounce function returns a new function that can receive a variable number of arguments
	return (...params) => {

		// If the frame variable has been defined, clear it now, and queue for next frame
		if (frame) { 
			cancelAnimationFrame(frame);
		}
		
		// Queue our function call for the next frame
		frame = requestAnimationFrame(() => {

			// Call our function and pass any params we received
			fn(...params);
		});

	} 
};
// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
	document.documentElement.dataset.scroll = window.scrollY;
}
// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });
// Update scroll position for first time
storeScroll();





const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 
								'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];

export const localObservationDate = (date) => {
	const currentDate = new Date(date);

	return `${currentDate.toLocaleDateString('uk-UA', { weekday: 'long' })}, ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
};

export const localObservationTime = (date) => {
	const currentTime = new Date(date);

	const hours = currentTime.getHours();
	const minutes = currentTime.getMinutes();

	return `${hours} : ${minutes}`;
};

export const localObservationHour = (date) => {
	const currentDate = new Date(date);

	return `${currentDate.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' })}`;
};

export const localObservationDay = (date) => {
	const currentDate = new Date(date);

	return `${currentDate.toLocaleDateString('uk-UA', { weekday: 'short' })}`;
};

export const pressuremmHg = function(num) {
	return Math.round(num*0.750061683);
};

export const windspeedtoms = (num) => {
	if (Number(num)) {
		return Math.round(num*1000/3600);
	}
	else {
		return '--';
	}
};

export const saveHoursOfSunToLocalStorage = (dailyforecast) => {
	const localStorageHoursOfSun = JSON.parse(localStorage.getItem('hoursOfSun')) || [];
	
	console.log('localStorageHoursOfSun', localStorageHoursOfSun);
	console.log('Daily forecasts', dailyforecast);

	dailyforecast.forEach(element => {
		// debugger
		const found = localStorageHoursOfSun.findIndex(item => item.Date === element.Date);
		
		if (found > 1) {
			localStorageHoursOfSun[found] = {Date: element.Date, HoursOfSun: element.HoursOfSun}
		} else {
			localStorageHoursOfSun.push({Date: element.Date, HoursOfSun: element.HoursOfSun});
		}
	});

	console.log('localStorageHoursOfSun', localStorageHoursOfSun);
	
	localStorage.setItem('hoursOfSun', JSON.stringify(localStorageHoursOfSun));
};