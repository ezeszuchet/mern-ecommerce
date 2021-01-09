import authReducers from './auth';
import userReducer from './user';
import productReducer from './product';
import categoryReducer from './category';
import orderReducer from './order';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducers,
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    order: orderReducer
});

export default rootReducer;