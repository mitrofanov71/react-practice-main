import {applyMiddleware, createStore} from "redux";
import {reducer} from "./reducers/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "./sagas/rootSaga";

const sagasMiddleware = createSagaMiddleware()

export const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(sagasMiddleware)))
sagasMiddleware.run(rootSaga)