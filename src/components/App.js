import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  const [truthy, setTruthy] = useState(false)

  function DarkModeToggle(){
    if(!truthy){
      setTruthy(true);
    }else{
      setTruthy(false);
    }
    return truthy;
  }
  // this will be used for the Dark Mode Toggle feature
  const appClass = truthy ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={DarkModeToggle}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
