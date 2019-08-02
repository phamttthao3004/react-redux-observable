import { combineEpics } from "redux-observable";
import {
  fetchDataSuccess,
  fetchDataEpic,
  fetchDataFailure
} from "./fetchs/fetch";

const rootEpic = combineEpics(
  fetchDataEpic,
  fetchDataSuccess,
  fetchDataFailure
);
export default rootEpic;
