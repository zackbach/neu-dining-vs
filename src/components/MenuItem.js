import { useState } from "react";
import { ItemBadges } from "./ItemBadges";

export function MenuItem({ item }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="bg-gray-300 mb-4 mx-16 px-4 py-2 rounded-lg">
      <div className="">
        <div className="flex justify-between mb-8">
          <h1 className="">{item.name}</h1>
          <h2 className="">{item.nutrients[0].value_numeric} Calories</h2>
        </div>
        <div className="flex justify-between">
          <ItemBadges
            className=""
            filters={item.filters}
          />
          <button
            className=""
            onClick={() => setDropdown(!dropdown)}
          >
            ▼
          </button>
        </div>
      </div>
      {dropdown && (
        <div className="bg-gray-400 px-4 rounded-md mt-4">
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
