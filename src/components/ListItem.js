import React from "react";

export default function ListItem({item, isActive, onClick}) {
  return (
    <div className={"list-item"+(isActive ? " active":"")} onClick={onClick}>
      <span>{item.name}</span>
    </div>
  );
};