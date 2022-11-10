import React from "react";

export default function ItemDetails({item}) {
  if (item === undefined) {return null};
  return (
    <div className="item">
      <img src={item.avatar} alt="avatar" />
      <span>{item.name}</span>
      <span>City: {item.details.city}</span>
      <span>Company: {item.details.company}</span>
      <span>Position: {item.details.position}</span>
    </div>
  );
};