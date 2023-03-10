import { useState } from "react";
import { ItemBadges } from "./ItemBadges";

export function MenuItem({ item }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div>
      <h1>{item.name}</h1>
      <h2>{item.nutrients[0].value_numeric} Calories</h2>
      <ItemBadges filters={item.filters} />
      <button onClick={() => setDropdown(!dropdown)}>▼</button>
      {dropdown && (
        <div>
          <p>{item.nutrients[1].value_numeric}g Protein</p>
          <p>{item.nutrients[2].value_numeric}g Carbohydrates</p>
          <p>{item.nutrients[3].value_numeric}g Sugar</p>
          <p>{item.nutrients[4].value_numeric}g Total Fat</p>
          <p>Ingredients: {item.ingredients}</p>
        </div>
      )}
    </div>
  );
}
