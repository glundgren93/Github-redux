import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';

const logger = createLogger();
const router = routerMiddleware(browserHistory);

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk, router, logger)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
