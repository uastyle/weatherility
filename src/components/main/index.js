import React, { Component } from 'react';
import CurrentWeather from './components/currentweather';
import DetailedWeather from './components/detailedweather';

export default class Main extends Component {
	state = {
		initialState: {
		},
		status: false
	};

	componentDidMount() {
		
		fetch('https://dataservice.accuweather.com/currentconditions/v1/324505?apikey=JgEbWxgFwhWVfUfVArF9AH6sl6E1VlNN&language=uk-ua&details=true')
		.then((res) => {
			return res.json()
		}).then((res) => {
			console.log('res', res[0]);
			const { 
				Temperature: {Metric: temperature},
				RealFeelTemperature: {Metric: realfeel},
				WeatherText: weathertext,
				LocalObservationDateTime: time,
				PrecipitationSummary: {Precipitation: {Metric: precipitation}},
				Pressure: {Metric: pressure},
				DewPoint: {Metric: dewpoint},
				RelativeHumidity: humidity,
				Visibility: {Metric: visibility},
				Wind: {Direction: winddirection},
				Wind: {Speed: {Metric: windspeed}},
				CloudCover: cloudcover,
				UVIndex: uvindex,
				UVIndexText: uvindextext,
				WeatherIcon: icon

			} = res[0];

			this.setState({
				status: true,
				initialState: {
					temperature,
					realfeel,
					weathertext,
					time,
					precipitation,
					pressure,
					dewpoint,
					humidity,
					visibility,
					winddirection,
					windspeed,
					cloudcover,
					uvindex,
					uvindextext,
					icon
				}
			})

		}).catch((err) => {
			console.log(err);
		})
	}

	render() {
		const { initialState: { temperature, time, icon }, status } = this.state;
		return(
			<React.Fragment>
				{ status && 
					<main className='main' role='main'>
						<CurrentWeather time={time} temperature={temperature} icon={icon} />
						<DetailedWeather {...this.state.initialState}  />
					</main>
				}
			</React.Fragment>
		)
	}
}