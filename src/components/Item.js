import React, { useState } from "react";

function Item({ name, category }) {
  const [listClass, setListClass ] = useState('');
  const [buttonText, setButtonText] = useState('Add to Cart')
  function changeListClass(){
    if(listClass === ''){
      setListClass('in-cart');
      setButtonText('Remove From Cart')
    }else{
      setListClass('');
      setButtonText('Add to Cart')
    }
  }

  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={changeListClass}>{buttonText}</button>
    </li>
  );
}

export default Item;
