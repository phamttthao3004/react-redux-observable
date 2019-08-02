import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE
} from "../../constants/action-types";
import { Observable } from "rxjs";
import "rxjs/util/pipe";
import "rxjs/add/observable/dom/ajax";
import { mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";

export const fetchDataSuccess = res => {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    res
  };
};
export const fetchDataFailure = res => {
  return {
    type: FETCH_ARTICLES_FAILURE,
    res
  };
};

export const fetchDataEpic = action$ => {
  return action$.pipe(
    ofType(FETCH_ARTICLES),
    mergeMap(action => {
      Observable.ajax({
        crossDomain: true,
        url: `https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=1f786742b00c448f86e480f27cbef264`
      })
        .map(response => fetchDataSuccess(response.articles))
        .catch(error => Observable.of(fetchDataFailure(error.message)));
    })
  );
};
