import icon_1 from '../../images/weather-icons/01-s.png';
import icon_2 from '../../images/weather-icons/02-s.png';
import icon_3 from '../../images/weather-icons/03-s.png';
import icon_4 from '../../images/weather-icons/04-s.png';
import icon_5 from '../../images/weather-icons/05-s.png';
import icon_6 from '../../images/weather-icons/06-s.png';
import icon_7 from '../../images/weather-icons/07-s.png';
import icon_8 from '../../images/weather-icons/08-s.png';
import icon_11 from '../../images/weather-icons/11-s.png';
import icon_12 from '../../images/weather-icons/12-s.png';
import icon_13 from '../../images/weather-icons/13-s.png';
import icon_14 from '../../images/weather-icons/14-s.png';
import icon_15 from '../../images/weather-icons/15-s.png';
import icon_16 from '../../images/weather-icons/16-s.png';
import icon_17 from '../../images/weather-icons/17-s.png';
import icon_18 from '../../images/weather-icons/18-s.png';
import icon_19 from '../../images/weather-icons/19-s.png';
import icon_20 from '../../images/weather-icons/20-s.png';
import icon_21 from '../../images/weather-icons/21-s.png';
import icon_22 from '../../images/weather-icons/22-s.png';
import icon_23 from '../../images/weather-icons/23-s.png';
import icon_24 from '../../images/weather-icons/24-s.png';
import icon_25 from '../../images/weather-icons/25-s.png';
import icon_26 from '../../images/weather-icons/26-s.png';
import icon_29 from '../../images/weather-icons/29-s.png';
import icon_30 from '../../images/weather-icons/30-s.png';
import icon_31 from '../../images/weather-icons/31-s.png';
import icon_32 from '../../images/weather-icons/32-s.png';
import icon_33 from '../../images/weather-icons/33-s.png';
import icon_34 from '../../images/weather-icons/34-s.png';
import icon_35 from '../../images/weather-icons/35-s.png';
import icon_36 from '../../images/weather-icons/36-s.png';
import icon_37 from '../../images/weather-icons/37-s.png';
import icon_38 from '../../images/weather-icons/38-s.png';
import icon_39 from '../../images/weather-icons/39-s.png';
import icon_40 from '../../images/weather-icons/40-s.png';
import icon_41 from '../../images/weather-icons/41-s.png';
import icon_42 from '../../images/weather-icons/42-s.png';
import icon_43 from '../../images/weather-icons/43-s.png';
import icon_44 from '../../images/weather-icons/44-s.png';

const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 
								'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];

export const localObservationTime = (date) => {
	const currentTime = new Date(date);

	const hours = currentTime.getHours();
	const minutes = currentTime.getMinutes();

	return `${hours} : ${minutes}`;
};

export const localObservationDate = (date) => {
	const currentDate = new Date(date);

	return `${currentDate.toLocaleDateString('uk-UA', { weekday: 'long' })}, ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
};

export const pressuremmHg = function(num) {
	return Math.round(num*0.750061683);
}

export const windspeedtoms = (num) => {
	if (Number(num)) {
		return Math.round(num*1000/3600);
	}
	else {
		return '---';
	}
}

export const icons = {
	icon_1,
	icon_2,
	icon_3,
	icon_4,
	icon_5,
	icon_6,
	icon_7,
	icon_8,
	icon_11,
	icon_12,
	icon_13,
	icon_14,
	icon_15,
	icon_16,
	icon_17,
	icon_18,
	icon_19,
	icon_20,
	icon_21,
	icon_22,
	icon_23,
	icon_24,
	icon_25,
	icon_26,
	icon_29,
	icon_30,
	icon_31,
	icon_32,
	icon_33,
	icon_34,
	icon_35,
	icon_36,
	icon_37,
	icon_38,
	icon_39,
	icon_40,
	icon_41,
	icon_42,
	icon_43,
	icon_44
}