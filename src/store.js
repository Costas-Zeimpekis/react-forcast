import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from './reducers';
import ReduxPromise from 'redux-promise';

const initialState = {};
const middleware = [ReduxPromise];
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
