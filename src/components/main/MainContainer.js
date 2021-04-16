import { connect } from 'react-redux';
import Component from './Main';
import { setCurrentConditions, setHourlyForecast,setHeadline,setDailyForecast } from './actions/currentAction';

const mapStateToProps  = (state) => ({
  currentConditions: state.currentConditions
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentConditions: (weather) => dispatch(setCurrentConditions(weather)),
  setHourlyForecast: (hourlyforecast) => dispatch(setHourlyForecast(hourlyforecast)),
  setHeadline: (headline) => dispatch(setHeadline(headline)),
  setDailyForecast: (forecast) => dispatch(setDailyForecast(forecast))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);