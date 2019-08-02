import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
// import { browserHistory } from "react-router";
// import { routerMiddleware } from "react-router-redux";
import rootEpic from "../actions/index";
import rootReducer from "../reducers/reducer";

// const router = routerMiddleware(browserHistory);

const epicMiddleware = createEpicMiddleware();
export default createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);
