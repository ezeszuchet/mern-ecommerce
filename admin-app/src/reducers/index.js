import authReducers from './auth';
import userReducer from './user';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducers,
    user: userReducer
});

export default rootReducer;