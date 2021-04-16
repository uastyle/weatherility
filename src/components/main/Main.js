import React, { Component } from 'react';
import { APIKEY } from './types';

import CurrentConditions from './components/CurrentConditions';

import Headline from './components/Headline';

import HourlyForecast from './components/HourlyForecast';
import DailyForecasts from './components/DailyForecasts';
import ChooseLocation from './components/ChooseLocation';

import { saveHoursOfSunToLocalStorage } from './utils';

import DataSet from './components/DataSet';


export default class Main extends Component {
  state = {
    initialState: {},
    geoposition: null,
    geopositionStatus: null,
    locationKey: null,
    status: false
  };

  componentDidMount() {
    this.getGeoPosition();
  }

  getGeoPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      this.getKeyLocation(latitude, longitude);
      
      this.setState((state) => ({
        ...state,
        geopositionStatus: 'success'
    }))},
    () => {
      this.setState((state) => ({
        ...state,
        geopositionStatus: 'error'
    }))})
  }

  getKeyLocation = (latitude, longitude) => {
    fetch(
        `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${APIKEY}&q=${latitude}%2C${longitude}&language=uk-Ua&details=true&toplevel=true`
    ).then((res) => {
      return res.json()
    })
    .then((res) => {
        this.setState((state) => ({
          ...state,
          locationKey: res.Key
        }))
        this.getCurrentConditions(res.Key, res.LocalizedName);
        this.getHourlyForecast(res.Key);
        this.getDailyForecast(res.Key);
    });
  }

  weatherByCityKey = (key, city) => {
    if (!key) {
      return
    }
    this.setState((state) => ({
      ...state,
      locationKey: key
    }))
    this.getCurrentConditions(key, city);
    this.getHourlyForecast(key);
    this.getDailyForecast(key);
  }

  getCurrentConditions = (key, city) => {
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

        this.props.setCurrentConditions({
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
      }
    )
  }

  getHourlyForecast = (key) => {
    fetch(`https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${key}?apikey=${APIKEY}&language=uk-ua&details=true&metric=true`)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        console.log('12 hours forecast', res);

        this.props.setHourlyForecast({
          status: true,
          hourlyforecast: res
        })
      })
      .catch((err) => {
        console.log(err);
    })
  }

  getDailyForecast = (key) => {
    fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${APIKEY}&language=uk-ua&details=true&metric=true`)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        console.log('headline', res.Headline);
        console.log('forecast', res.DailyForecasts);
        
        const {
          Headline: headline,
          DailyForecasts: forecast
        } = res;

        saveHoursOfSunToLocalStorage(forecast);

        this.props.setHeadline({
          status: true,
          headline
        })

        this.props.setDailyForecast({
          status: true,
          forecast
        })
      })
      .catch((err) => {
        console.log(err);
    })
  }

  render() {
    const { statusGeoposition, locationKey } = this.state;
    const { weather: { city }, status, headline, weather, hourlyforecast, forecast } = this.props.currentConditions;
    console.log('hourlyforecast', hourlyforecast);
    // const {Minimum, Maximum} = item.Temperature;
    // const {Temperature: {Minimum, Maximum}} = item;

    return(
      <React.Fragment>
        <section className='main'>

          <input type="radio" name="tab" id="tab-nav-1" />
          <label htmlFor="tab-nav-1">Історія</label>
          <input type="radio" name="tab" id="tab-nav-2" defaultChecked />
          <label htmlFor="tab-nav-2">Погода</label>
          <input type="radio" name="tab" id="tab-nav-3" />
          <label htmlFor="tab-nav-3">Локації</label>
          <button className='refreshbtn' onClick={this.weatherByCityKey.bind(this, locationKey, city)}></button>

          <div className='container'>

            <div className='tab'>
              <DataSet />
            </div>

            <div className='tab'>
            { status &&

              <main className='' role='main'>

                <section className='current-weather'>
                  <Headline {...headline} />

                  <CurrentConditions {...weather}  />
                </section>

                <section className='weatherforecast'>
                  { hourlyforecast.map((item) => (
                    <HourlyForecast 
                      date={item.Date}
                      key={item.Date} 
                      icon={item.Icon} 
                      alt={item.Alt} 
                      precipitationprobability={item.PrecipitationProbability}
                      temperature={item.Temperature}
                    />
                  ))}
                </section>

                <section className='dailyforecasts'>
                  { forecast.map((item) => (
                    <DailyForecasts 
                      date={item.Date} 
                      key={item.Date} 
                      icon={item.Icon} 
                      alt={item.IconPhrase} 
                      sunnyhours={item.HoursOfSun} 
                      temperaturemin={item.Minimum} 
                      temperaturemax={item.Maximum}
                    />
                  ))}
                </section>

              </main>
            }

            </div>
            
            
            { statusGeoposition === 'error' && 
            <section className='disablelocation'>
              <h1>Please Enable your Location!</h1>
            </section>
            }

            <div className='location tab'>
              <ChooseLocation weatherByCityKey={this.weatherByCityKey} />
            </div>
            
          </div>

        </section>
      </React.Fragment>
    )
  }
}