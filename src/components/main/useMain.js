import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { APIKEY } from './types';
import { setCurrentConditions, setHourlyForecast, setHeadline, setDailyForecast } from './actions/currentAction';
import { saveHoursOfSunToLocalStorage } from './utils';

const useMain = () => {
  const [state, setState] = useState({
    geopositionStatus: null,
    locationKey: null
  });

  const {
    geopositionStatus,
    locationKey
  } = state;

  useEffect(() => {
    getGeoPosition()
  },[]);

  const currentConditions = useSelector(state => state.currentConditions);

  const dispatch = useDispatch();

  const setThisCurrentConditions = (weather) => dispatch(setCurrentConditions(weather));
  const { weather: { city }, status: globalStatus, headline, weather, hourlyforecast, dailyforecast } = currentConditions;

  const setThisHourlyForecast = (hourlyforecast) => dispatch(setHourlyForecast(hourlyforecast));
  const setThisHeadline = (headline) => dispatch(setHeadline(headline));
  const setThisDailyForecast = (dailyforecast) => dispatch(setDailyForecast(dailyforecast));

  const getCurrentConditions = (key, city) => {
    fetch(`https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${APIKEY}&language=uk-ua&details=true`)
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      // console.log('weather', res[0]);

      const {
        LocalObservationDateTime: time,
        Temperature: {Metric: temperature},
        RealFeelTemperature: {Metric: realfeel},
        RealFeelTemperatureShade: {Metric: realfeelshade},
        WeatherText: weathertext,
        WeatherIcon: icon,
        PrecipitationSummary: {Precipitation: {Metric: precipitation}},
        Pressure: {Metric: pressure},
        DewPoint: {Metric: dewpoint},
        RelativeHumidity: humidity,
        Visibility: {Metric: visibility},
        Wind: {Direction: winddirection},
        Wind: {Speed: {Metric: windspeed}},
        CloudCover: cloudcover,
        Ceiling: {Metric: ceiling},
        UVIndex: uvindex,
        UVIndexText: uvindextext
      } = res[0];

      setThisCurrentConditions({
        status: true,
        weather: {
          city,
          time,
          temperature,
          realfeel,
          realfeelshade,
          weathertext,
          icon,
          precipitation,
          pressure,
          dewpoint,
          humidity,
          visibility,
          winddirection,
          windspeed,
          cloudcover,
          ceiling,
          uvindex,
          uvindextext
        }
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const getHourlyForecast = (key) => {
    fetch(`https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${key}?apikey=${APIKEY}&language=uk-ua&details=true&metric=true`)
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      console.log('12 hours forecast', res);

      setThisHourlyForecast({
        status: true,
        hourlyforecast: res
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const getDailyForecast = (key) => {
    fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${APIKEY}&language=uk-ua&details=true&metric=true`)
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      console.log('headline', res.Headline);
      console.log('dailyforecast', res.DailyForecasts);
      
      const {
        Headline: headline,
        DailyForecasts: dailyforecast
      } = res;

      saveHoursOfSunToLocalStorage(dailyforecast);

      setThisHeadline({
        status: true,
        headline
      })

      setThisDailyForecast({
        status: true,
        dailyforecast
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const getKeyLocation = (latitude, longitude) => {
    fetch(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${APIKEY}&q=${latitude}%2C${longitude}&language=uk-Ua&details=true&toplevel=true`)
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      setState((state) => ({
        ...state,
        locationKey: res.Key
      }))
      getCurrentConditions(res.Key, res.LocalizedName);
      getHourlyForecast(res.Key);
      getDailyForecast(res.Key);
    });
  }

  const getGeoPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
    
      getKeyLocation(latitude, longitude);
          
      setState((state) => ({
        ...state,
        geopositionStatus: 'success'
      }))
    },
    () => {
      setState((state) => ({
      ...state,
      geopositionStatus: 'error'
      }))
    })
  }

  const weatherByUpdate = () => {
    if (!locationKey) {
      return
    }
    setState((state) => ({
      ...state,
      locationKey
    }))
    getCurrentConditions(locationKey, city);
    getHourlyForecast(locationKey);
    getDailyForecast(locationKey);
  }

  const weatherByCityKey = (key, localizedName) => {
    if (!key) {
      return
    }
    setState((state) => ({
      ...state,
      locationKey: key
    }))
    getCurrentConditions(key, localizedName);
    getHourlyForecast(key);
    getDailyForecast(key);
  }

  return {
    weatherByCityKey,
    weatherByUpdate,
    locationKey,
    city,
    headline,
    weather,
    hourlyforecast,
    dailyforecast,
    globalStatus,
    geopositionStatus
  }
}

export default useMain;