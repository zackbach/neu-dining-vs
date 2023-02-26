import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { MenuItem } from "./components/MenuItem";

function App() {
  // TODO: default state should be based on time of day
  const [curPeriod, setPeriod] = useState(0);
  const [periodsSteast, setPeriodsSteast] = useState([{id: ""}, {id: ""}, {id: ""}]);
  const [menuSteast, setMenuSteast] = useState();

  async function getMenuSteast() {
    await axios
      .get(
        "https://api.dineoncampus.com/v1/location/586d05e4ee596f6e6c04b527/periods/" 
        + periodsSteast[curPeriod].id + "?platform=0&date=2023-2-26"
      )
      .then(({ data }) => {
        if (data.error) {
          console.error(data.error);
          alert("An error occurred.");
        } else {
          setMenuSteast(data.menu.periods.categories);
          setPeriodsSteast(data.periods);
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
      menuSteast.map((station) =>
        station.items.map((item) => <MenuItem item={item} />)
      )
    ) : (
      <p>Loading...</p>
    )}
  </div>  
  );
}

export default App;
