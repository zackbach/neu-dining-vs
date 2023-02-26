import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { MenuItem } from "./components/MenuItem";

function App() {
  const testItem = {
    id: "61f477c98f3eb63e4832e33a",
    name: "Scrambled Eggs",
    mrn: "2032",
    rev: "23",
    mrn_full: "2032.23",
    desc: "Cooked to perfection.",
    webtrition_id: 611472224,
    sort_order: 1,
    portion: "1/2 cup",
    qty: null,
    ingredients: "Liquid Egg, Canola Oil",
    nutrients: [
      {
        id: "63e928f3c625af073616e647",
        name: "Calories",
        value: "200",
        uom: "kcal",
        value_numeric: "200",
      },
      {
        id: "63e928f3c625af073616e648",
        name: "Protein (g)",
        value: "14",
        uom: "g",
        value_numeric: "14",
      },
      {
        id: "63e928f3c625af073616e649",
        name: "Total Carbohydrates (g)",
        value: "less than 1 gram",
        uom: "g",
        value_numeric: "1",
      },
      {
        id: "63e928f3c625af073616e64a",
        name: "Sugar (g)",
        value: "0",
        uom: "g",
        value_numeric: "0",
      },
      {
        id: "63e928f3c625af073616e64b",
        name: "Total Fat (g)",
        value: "15",
        uom: "g",
        value_numeric: "15",
      },
      {
        id: "63e928f3c625af073616e64c",
        name: "Saturated Fat (g)",
        value: "4",
        uom: "g",
        value_numeric: "4",
      },
      {
        id: "63e928f3c625af073616e64d",
        name: "Cholesterol (mg)",
        value: "420",
        uom: "mg",
        value_numeric: "420",
      },
      {
        id: "63e928f3c625af073616e64e",
        name: "Dietary Fiber (g)",
        value: "0",
        uom: "g",
        value_numeric: "0",
      },
      {
        id: "63e928f3c625af073616e64f",
        name: "Sodium (mg)",
        value: "160",
        uom: "mg",
        value_numeric: "160",
      },
      {
        id: "63e928f3c625af073616e650",
        name: "Potassium (mg)",
        value: "160",
        uom: "mg",
        value_numeric: "160",
      },
      {
        id: "63e928f3c625af073616e651",
        name: "Calcium (mg)",
        value: "60",
        uom: "mg",
        value_numeric: "60",
      },
      {
        id: "63e928f3c625af073616e652",
        name: "Iron (mg)",
        value: "2",
        uom: "mg",
        value_numeric: "2",
      },
      {
        id: "63e928f3c625af073616e653",
        name: "Trans Fat (g)",
        value: "0",
        uom: "g",
        value_numeric: "0",
      },
      {
        id: "63e928f3c625af073616e654",
        name: "Vitamin D (IU)",
        value: "90",
        uom: "IU",
        value_numeric: "90",
      },
      {
        id: "63e928f3c625af073616e655",
        name: "Vitamin C (mg)",
        value: "0",
        uom: "mg",
        value_numeric: "0",
      },
      {
        id: "63e928f3c625af073616e656",
        name: "Calories From Fat",
        value: "140",
        uom: "kcal",
        value_numeric: "140",
      },
      {
        id: "63e928f3c625af073616e657",
        name: "Vitamin A (RE)",
        value: "120",
        uom: "RE",
        value_numeric: "120",
      },
      {
        id: "63e928f3c625af073616e658",
        name: "Saturated Fat + Trans Fat (g)",
        value: "5",
        uom: "g",
        value_numeric: "5",
      },
    ],
    filters: [
      {
        id: "5934c5723191a24f12b52fd2",
        name: "Vegetarian",
        type: "label",
        icon: false,
        remote_file_name: null,
        custom_icons: [],
      },
      {
        id: "5934c5733191a24f12b52ff1",
        name: "Egg",
        type: "allergen",
        icon: false,
        remote_file_name: null,
        custom_icons: [],
      },
      {
        id: "5a67f531a4227a2fac230c8e",
        name: "Balanced U",
        type: "label",
        icon: false,
        remote_file_name: null,
        custom_icons: [],
      },
    ],
    custom_allergens: [],
    calories: 200,
  };

  const [menuSteast, setMenuSteast] = useState();

  async function getMenuSteast() {
    await axios
      .get(
        "https://api.dineoncampus.com/v1/location/586d05e4ee596f6e6c04b527/periods?platform=0&date=2023-2-26"
      )
      .then(({ data }) => {
        if (data.error) {
          console.error(data.error);
          alert("An error occurred.");
        } else {
          setMenuSteast(data);
        }
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred.");
      });
  }

  useEffect(() => {
    getMenuSteast();
  }, []);

  // Steast:
  // https://api.dineoncampus.com/v1/location/586d05e4ee596f6e6c04b527/periods?platform=0&date=YYYY-MM-DD

  // IV:
  // https://api.dineoncampus.com/v1/location/5f4f8a425e42ad17329be131/periods?platform=0&date=YYYY-MM-DD

  // return <MenuItem item={testItem} />;
  return (
    <div>
      {menuSteast ? (
        menuSteast.menu.periods.categories.map((station) =>
          station.items.map((item) => <MenuItem item={item} />)
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
