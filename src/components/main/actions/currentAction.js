import { SET_HEADLINE } from '../types';
import { SET_CURRENT_CONDITIONS } from '../types';
import { SET_HOURLY_FORECAST } from '../types';
import { SET_DAILY_FORECAST } from '../types';

export const setHeadline = (headline) => ({
  type: SET_HEADLINE,
  payload: headline
});

export const setCurrentConditions = (weather) => ({
  type: SET_CURRENT_CONDITIONS,
  payload: weather
});

export const setHourlyForecast = (hourlyforecast) => ({
  type: SET_HOURLY_FORECAST,
  payload: hourlyforecast
});

export const setDailyForecast = (forecast) => ({
  type: SET_DAILY_FORECAST,
  payload: forecast
});