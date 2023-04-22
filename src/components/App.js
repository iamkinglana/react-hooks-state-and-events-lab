import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";
import items from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [mode, setMode]= useState (false) 
  const handleClick = () => {
    setMode(!mode)
  }

  return (
    <div className={mode ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{mode ? "App light" : "App dark"}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;