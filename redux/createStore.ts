import { createStore as createReduxStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import reduxSagaSSRMiddleware from "../utils/reduxSagaSSRMiddleware";
import rootSaga from "./sagas";

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
