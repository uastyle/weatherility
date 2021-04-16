import { combineReducers } from 'redux';
import currentReducer from './currentReducer';

const rootReducer = combineReducers({
	currentConditions: currentReducer
});

export default rootReducer;