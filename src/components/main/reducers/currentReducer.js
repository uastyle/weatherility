import { SET_HEADLINE } from '../types';
import { SET_CURRENT_CONDITIONS  } from '../types';
import { SET_HOURLY_FORECAST } from '../types';
import { SET_DAILY_FORECAST } from '../types';

const initState = {
	status: false,
	headline: {},
	weather: {},
	hourlyforecast: [],
	dailyforecast: []
};

const currentReducer = (state = initState, action) => {
	if (action.type === SET_HEADLINE) {
		console.log('SET_HEADLINE', action);
		return {...state, status: action.payload.status, headline: action.payload.headline};
	}
	if (action.type === SET_CURRENT_CONDITIONS) {
		console.log(action);
		return {...state, status: action.payload.status, weather: action.payload.weather};
	}
	if (action.type === SET_HOURLY_FORECAST) {
		console.log('SET_HOURLY_FORECAST', action);
		return {...state, hourlyforecast: action.payload.hourlyforecast.map((item) => ({
			Date: item.DateTime,
			Icon: item.WeatherIcon,
			Alt: item.IconPhrase,
			PrecipitationProbability: item.PrecipitationProbability,
			Temperature: item.Temperature
		}))};
	}
	if (action.type === SET_DAILY_FORECAST) {
		console.log(action);
		return {...state, dailyforecast: action.payload.dailyforecast.map((item) => ({
			Date: item.Date,
			Icon: item.Day.Icon,
			HoursOfSun: item.HoursOfSun,
			Minimum: item.Temperature.Minimum,
			Maximum: item.Temperature.Maximum,
			IconPhrase: item.Day.IconPhrase
		}))};
	}
	return state;
};

export default currentReducer;