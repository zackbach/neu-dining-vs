import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { MenuItem } from "./components/MenuItem";

function App() {
  const [menuSteast, setMenuSteast] = useState();
  const [menuIV, setMenuIV] = useState();

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

  async function getMenuIV() {
    await axios
      .get(
        "https://api.dineoncampus.com/v1/location/5f4f8a425e42ad17329be131/periods?platform=0&date=2023-2-26"
      )
      .then(({ data }) => {
        if (data.error) {
          console.error(data.error);
          alert("An error occurred.");
        } else {
          setmenuIV(data);
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

  useEffect(() => {
    getMenuIV();
  }, []);

  // Steast:
  // https://api.dineoncampus.com/v1/location/586d05e4ee596f6e6c04b527/periods?platform=0&date=YYYY-MM-DD

  // IV:
  // https://api.dineoncampus.com/v1/location/5f4f8a425e42ad17329be131/periods?platform=0&date=YYYY-MM-DD

  // return <MenuItem item={testItem} />;
  return (
    <div>
      <div>
        {menuSteast ? (
          menuSteast.menu.periods.categories.map((station) =>
            station.items.map((item) => <MenuItem item={item} />)
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
        {menuIV ? (
          menuIV.menu.periods.categories.map((station) =>
            station.items.map((item) => <MenuItem item={item} />)
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
