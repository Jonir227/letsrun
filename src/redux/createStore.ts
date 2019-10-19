import { applyMiddleware, createStore as createReduxStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxSagaSSRMiddleware from '../utils/reduxSagaSSRMiddleware';
import rootReducer from './reducers';
import rootSaga from './sagas';

const createStore = (initialState: any) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createReduxStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware, reduxSagaSSRMiddleware)
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default createStore;
