import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

//2. Extract the contact card as a reusable Card component.
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>Card {props.number}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar src={props.src} />
      </div>
      <Details phone={props.phone} email={props.email} />
    </div>
  );
}
export default Card;
