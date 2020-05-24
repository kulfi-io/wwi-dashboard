import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import testReducer from './test/reducer';
import authReducer from './authenticate/reducer';
import { logger } from 'redux-logger';

const rootReducer = combineReducers({
    form: formReducer,
    test: testReducer,
    auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(logger));
