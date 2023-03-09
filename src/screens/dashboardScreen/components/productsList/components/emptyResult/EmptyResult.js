import React from "react";
import "./EmptyResult.css";

function EmptyResult() {
  return (
    <div className="empty-result">
      <img
        src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result_still_2x.gif?compress=1&resize=400x300"
        height={"400px"}
        alt={"No result found"}
      />
    </div>
  );
}

export default EmptyResult;
