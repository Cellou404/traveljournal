import React from "react";

export default function Journal(props) {
  return (
    <div className="journals">
      <div className="journal-banner">
        <img
          src={`../images/${props.item.image}`}
          alt="Journal"
          className="journal--image"
        />
      </div>
      <div className="journal--inner">
        <p className="location">
          <span className=""><i className="far fa-map-marker-alt red"></i> {props.item.location} </span> 
          <a className="gray" href={`${props.item.gooleMapsUrl}`}>View on Google Maps</a>
        </p>
        <h2>{props.item.title}</h2>
        <div className="date">
          <span className="bold">{props.item.startDate}-{props.item.endDate}</span>
        </div>
        <div className="descriptin">
          <small>{props.item.description}</small>
        </div>
        
      </div>
    </div>

  );
}
