import React from "react";
import ListItem from "./ListItem";

import "../css/list.css";
import Spinner from "./Spinner";

export default function List({ isLoading, list, activeItem, onClick }) {
  return (
    <div className="list">
      <Spinner isLoading={isLoading} />
      {list.map((item, index) =>
        <ListItem
          key={item.id}
          item={item}
          isActive={activeItem?.id === item.id}
          onClick={() => onClick(item)}
        />
        )
      }
    </div>
  );
};