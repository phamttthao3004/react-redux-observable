import React from "react";

const Whisky = ({ article }) => (
  <div>
    <img style={{ width: "300px", height: "300px" }} src={article.url} />
    <h3>{article.title}</h3>
  </div>
);

export default Whisky;
