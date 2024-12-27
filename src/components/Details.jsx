import React from "react";
import Avatar from "./Avatar";

function Details(props) {
  return (
    <div className="bottom">
      <p className="info">{props.phone}</p>
      <p className="info">{props.email}</p>
    </div>
  );
}
export default Details;
