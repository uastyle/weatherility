import React from 'react';
import useMain from './useMain';
import Headinfo from './components/Headinfo';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import CurrentConditions from './components/CurrentConditions';
import Location from './components/Location';
import DataSet from './components/DataSet';


const Main = () => {
  const {
    weatherByCityKey,
    weatherByUpdate,
    headline,
    weather,
    hourlyforecast,
    dailyforecast,
    globalStatus,
    statusGeoposition
  } = useMain();

  return(
    <React.Fragment>
      <main className='main' role='main'>

        <input type='radio' name='tab' id='tab-nav-1' />
        <label htmlFor="tab-nav-1">Історія</label>

        <input type='radio' name='tab' id='tab-nav-2' defaultChecked />
        <label htmlFor='tab-nav-2'>Погода</label>

        <input type='radio' name='tab' id='tab-nav-3' />
        <label htmlFor='tab-nav-3'>Локації</label>

        <div className='container'>

          <div className='tab'>
            <DataSet />
          </div>

          <div className='tab'>
            
            { globalStatus &&
              <React.Fragment>
              
                <section className='head'>
                  <Headinfo {...weather} />
                </section>

                <section className='hourlyforecast'>
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

                <section className='dailyforecast'>
                  { dailyforecast.map((item) => (
                    <DailyForecast 
                      date={item.Date} 
                      key={item.Date} 
                      icon={item.Icon} 
                      alt={item.IconPhrase} 
                      precipitationprobabilityday={item.PrecipitationProbability} 
                      // precipitationprobabilitynight={item.Night.PrecipitationProbability}
                      sunnyhours={item.HoursOfSun} 
                      temperaturemin={item.Minimum} 
                      temperaturemax={item.Maximum}
                    />
                  ))}
                </section>

                <section className='current-weather'>
                  <CurrentConditions {...weather} />
                </section>

                <button className='refreshbtn' onClick={weatherByUpdate}></button>

              </React.Fragment>
            }

            { !globalStatus && 
              <section className='disablelocation'>
                <h1>Please enable your geoposition or try to search location you need!</h1>
              </section>
            }
          </div>

          <div className='location tab'>
            <Location weatherByCityKey={weatherByCityKey} />
          </div>
            
        </div>

      </main>
    </React.Fragment>
  )
}

export default Main;