import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [categories, setCategories] = useState("All")
  
  const handleClick = (event) => {
    setCategories(event.target.value);
  }

  const filteredItems = items.filter((itemCat) => {
    if(categories === "All") return true;
    
    return itemCat.category === categories;
  })
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleClick}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
