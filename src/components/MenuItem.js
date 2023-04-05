import { useState } from "react";
import { ItemBadges } from "./ItemBadges";

export function MenuItem({ item }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="mb-4 mx-2">
      <div className="bg-gray-300 relative h-20">
        <h1 className="absolute left-0 top-0">{item.name}</h1>
        <h2 className="absolute right-0 top-0">
          {item.nutrients[0].value_numeric} Calories
        </h2>
        <ItemBadges
          className="absolute left-0 bottom-0"
          filters={item.filters}
        />
        <button
          className="absolute right-0 bottom-0"
          onClick={() => setDropdown(!dropdown)}
        >
          ▼
        </button>
      </div>
      {dropdown && (
          <div className="bg-blue-300 relative">
            <p>{item.nutrients[1].value_numeric}g Protein</p>
            <p>{item.nutrients[2].value_numeric}g Carbohydrates</p>
            <p>{item.nutrients[3].value_numeric}g Sugar</p>
            <p>{item.nutrients[4].value_numeric}g Total Fat</p>
            <p>Ingredients: {item.ingredients}</p>
            <p>Station: {item.station}</p>
          </div>
        )}
    </div>
  );
}
