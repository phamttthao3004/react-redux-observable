import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_FAILURE,
  FETCH_ARTICLES_SUCCESS
} from "../../constants/action-types";

const initialState = {
  articles: [],
  isLoading: false,
  error: null
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        // whenever we want to fetch the whiskies, set isLoading to true to show a spinner
        isLoading: true,
        error: null
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        articles: [...action.payload],
        // whenever the fetching finishes, we stop showing the spinner and then show the data
        isLoading: false,
        error: null
      };
    case FETCH_ARTICLES_FAILURE:
      return {
        articles: [],
        isLoading: false,
        // same as FETCH_WHISKIES_SUCCESS, but instead of data we will show an error message
        error: action.payload
      };
    default:
      return state;
  }
}
