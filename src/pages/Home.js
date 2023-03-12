import axios from "axios";
import "../App.css";
import "./Home.css";
import { useEffect, useState } from "react";
import { MenuItem } from "../components/MenuItem";
import moment from 'moment';


function Home() {
  // TODO: default state should be based on time of day
  // const [curPeriod, setPeriod] = useState(0);
  const [periodsSteast, setPeriodsSteast] = useState([
    { id: "" },
    { id: "" },
    { id: "" },
  ]);
  const [periodsIV, setPeriodsIV] = useState([
    { id: "" },
    { id: "" },
    { id: "" },
  ]);
  const [menuSteast, setMenuSteast] = useState();
  const [menuIV, setMenuIV] = useState();


  async function getMenuSteast(index) {
    await axios
      .get(
        "https://api.dineoncampus.com/v1/location/586d05e4ee596f6e6c04b527/periods/" +
          periodsSteast[index].id +
          "?platform=0&date=" + moment().format("YYYY-M-D")
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

  async function getMenuIV(index) {
    await axios
      .get(
        "https://api.dineoncampus.com/v1/location/5f4f8a425e42ad17329be131/periods/" +
          periodsIV[index].id +
          "?platform=0&date=" + moment().format("YYYY-M-D")
      )
      .then(({ data }) => {
        if (data.error) {
          console.error(data.error);
          alert("An error occurred.");
        } else {
          setMenuIV(data.menu.periods.categories);
          setPeriodsIV(data.periods);
        }
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred.");
      });
  }

  useEffect(() => {
    // this might be where we could do current time of day logic
    getMenuSteast(0);
    getMenuIV(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Steast:
  // https://api.dineoncampus.com/v1/location/586d05e4ee596f6e6c04b527/periods?platform=0&date=YYYY-MM-DD

  // IV:
  // https://api.dineoncampus.com/v1/location/5f4f8a425e42ad17329be131/periods?platform=0&date=YYYY-MM-DD

  // return <MenuItem item={testItem} />;
  return (
    <div>
      <button
        onClick={() => {
          // setPeriod(0);
          getMenuSteast(0);
          getMenuIV(0);
        }}
      >
        Breakfast
      </button>
      <button
        onClick={() => {
          // setPeriod(1);
          getMenuSteast(1);
          getMenuIV(1);
        }}
      >
        Lunch
      </button>
      <button
        onClick={() => {
          // setPeriod(2);
          getMenuSteast(2);
          getMenuIV(2);
        }}
      >
        Dinner
      </button>
      <div className="dining-halls-container">
        <div className="dining-hall">
          {menuSteast ? (
            menuSteast.map((station) =>
              station.items.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))
            )
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="dining-hall">
          {menuIV ? (
            menuIV.map((station) =>
              station.items.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))
            )
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
