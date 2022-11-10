import React, { useEffect, useState } from "react";
import Hint from "./Hint";
import ItemDetails from "./ItemDetails";
import Spinner from "./Spinner";
import { getItem } from "../functions/getData";

export default function Details({ info }) {
  //const [loadedItemID, setLoadedItemID] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState();

  useEffect(() => {
    if(info?.id === undefined || isLoading || item?.id === info?.id) {
      // not initialized or already loaded
      return;
    }    
    setIsLoading(true);
    getItem(info.id).then(
      item => {
        console.log('loaded item:', item);
        setItem(item.data);
        setIsLoading(false);
      }
    ).catch(
      err => {
        console.log('error loading item', err);
        setIsLoading(false);
      })
  }, [info?.id, isLoading, item?.id]);

  return (
    <div className="details">
      <Spinner isLoading={isLoading} />
      {info === undefined && <Hint text="Please select a user" />}
      {!isLoading && <ItemDetails item={item} />}
    </div>
  );
};