import "rxjs";
import React from "react";
import "./App.css";
import DataList from "./components/DataLists/data-list";
import rootAction from "./actions/index";

import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const fetchDataEpic = _data => {
    dispatch(rootAction.fetchDataEpic);
  };
  const { isLoading, error, articles } = useSelector(state => state.fetch);

  return (
    <div className="App">
      <button onClick={fetchDataEpic}>Fetch Articles</button>
      {isLoading && <h1>Fetching data</h1>}
      {!isLoading && !error && <DataList articles={articles} />}
      {error && <h1>{error}</h1>}
    </div>
  );
};
export default App;
