import React from "react";

import emptyResultImage from "../../../../../../../src/assets/images/emptyResultImage.webp";
import "./EmptyResult.css";

function EmptyResult() {
  return (
    <div className="empty-result">
      <img src={emptyResultImage} height={"400px"} alt={"No result found"} />
    </div>
  );
}

export default EmptyResult;
