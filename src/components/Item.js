import React, {useState} from "react";

function Item({ name, category }) {

  const [isAdded, setIsAdded] = useState(false)
  const addClass = isAdded ? "in-cart" : ""
  const inCart = isAdded ? "Remove from Cart" : "Add to Cart"

  return (
    <li className={addClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isAdded ? "remove" : "add"} onClick={()=>setIsAdded(!isAdded)}>{inCart}</button>
    </li>
  );
}

export default Item;
