import React, { useState, useEffect } from "react";
import Details from "./components/Details";
import List from "./components/List";
import { getList } from "./functions/getData";

function App() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeItem, setActiveItem] = useState();

  useEffect(() => { 
    setIsLoading(true);
    getList().then(
      items => {
        console.log('user list loaded');
        setList(items.data);
        setIsLoading(false);
      }
    ).catch(
      err => {
        console.log('user list not loaded');
        setIsLoading(false);
      })
  }, []);

  const handleSetActiveItem = (listItem) => {
    console.log(listItem);
    setActiveItem(listItem);
  };

  return (
    <div className="container">
      <List isLoading={isLoading} list={list} activeItem={activeItem} onClick={handleSetActiveItem} />
      <Details info={activeItem} />
    </div>
  );
}

export default App;
