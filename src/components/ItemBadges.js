import vegetarian from "../assets/icon_vegetarian_200px.png";
import vegan from "../assets/icon_vegan_200px.png";
import balanced from "../assets/icon_balanced_200px.png";
import friendly from "../assets/howgood-climate-friendly.png";

import good from "../assets/howgood-good.png";
import great from "../assets/howgood-great.png";
import best from "../assets/howgood-best.png";

export function ItemBadges({ className, filters }) {
  const labels = filters.filter((f) => f.type === "label");

  return (
    <ul className={className + " flex flex-row"}>
      {labels.map((label) => {
        switch (label.name) {
          case "Vegetarian":
            return (
              <img
                key={label.id}
                src={vegetarian}
                alt="Vegetarian"
                className="h-6 aspect-square"
                draggable="false"
              />
            );
          case "Vegan":
            return (
              <img
                key={label.id}
                src={vegan}
                alt="Vegan"
                className="h-6 aspect-square"
                draggable="false"
              />
            );
          case "Balanced U":
            return (
              <img
                key={label.id}
                src={balanced}
                alt="Balanced"
                className="h-6 aspect-square"
                draggable="false"
              />
            );
          case "How Good Friendly":
            return (
              <img
                key={label.id}
                src={friendly}
                alt="Climate Friendly"
                className="h-6 aspect-square"
                draggable="false"
              />
            );
          case "How Good Good":
            return (
              <img
                key={label.id}
                src={good}
                alt="Good Impact"
                className="h-6 aspect-square"
                draggable="false"
              />
            );
          case "How Good Great":
            return (
              <img
                key={label.id}
                src={great}
                alt="Great Impact"
                className="h-6 aspect-square"
                draggable="false"
              />
            );
          case "How Good Best":
            return (
              <img
                key={label.id}
                src={best}
                alt="Best Impact"
                className="h-6 aspect-square"
                draggable="false"
              />
            );
          default:
            return (
              <li className={"pr-1"} key={label.id}>
                {label.name}
              </li>
            );
        }
      })}
    </ul>
  );
}
