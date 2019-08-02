import React from "react";

import DataItem from "./data-item";

const DataList = props => {
  const { articles = [] } = props;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
      {articles.map(article => (
        <DataItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default DataList;
