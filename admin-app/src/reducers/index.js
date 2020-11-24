import authReducers from './auth';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducers
});

export default rootReducer;