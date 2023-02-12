import { useState } from "react";
import { ItemBadges } from "./ItemBadges"

export function MenuItem({ item }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div>
      <h1>{item.name}</h1>
      <h2>{item.nutrients[0].value} Calories</h2>
      <ItemBadges filters={item.filters}/>
      <button onClick={() => setDropdown(!dropdown)}>▼</button>
      {dropdown ? (
        <div>
          <p>{item.nutrients[1].value}g Protein</p>
          <p>{item.nutrients[2].value} Total Carbohydrates</p>
          <p>{item.nutrients[3].value}g Sugar</p>
          <p>{item.nutrients[4].value}g Total Fat</p>
          <p>Ingedients: {item.ingredients}</p>
        </div>
      ) : (
        <p>Not Dropped Down</p>
      )}
    </div>
  );
}
