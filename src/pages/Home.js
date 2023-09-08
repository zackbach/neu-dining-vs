import axios from "axios";
import "../App.css";
import "./Home.css";
import { useEffect, useState } from "react";
import { MenuItem } from "../components/MenuItem";

function Home() {
  const [menuSteast, setMenuSteast] = useState();
  const [menuIV, setMenuIV] = useState();
  const [filterVegetarian, setFilterVegetarian] = useState(false);
  const [filterVegan, setFilterVegan] = useState(false);
  const [filterCalories, setFilterCalories] = useState(false);
  const [filterProtein, setFilterProtein] = useState(false);

  async function getMenuSteast(meal) {
    await axios
    .get(
      "https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-1a8ee05f-45c3-43dd-9157-7c07e1b36328/default/get-menu",
      { params: { hall: "steast", meal: meal } }
    )
      .then(({ data }) => {
        if (data.error) {
          console.error(data.error);
          alert("An error occurred.");
        } else {
          const flattened = data.menu.periods.categories.reduce(
            (acc, station) =>
              acc.concat(
                station.items.map((item) => {
                  item.station = station.name;
                  return item;
                })
              ),
            []
          );
          setMenuSteast(flattened);
        }
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred.");
      });
  }

  async function getMenuIV(meal) {
    await axios
      .get(
        "https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-1a8ee05f-45c3-43dd-9157-7c07e1b36328/default/get-menu",
        { params: { hall: "iv", meal: meal } }
      )
      .then(({ data }) => {
        if (data.error) {
          console.error(data.error);
          alert("An error occurred.");
        } else {
          console.log(data)
          const flattened = data.menu.periods.categories.reduce(
            (acc, station) =>
              acc.concat(
                station.items.map((item) => {
                  item.station = station.name;
                  return item;
                })
              ),
            []
          );
          setMenuIV(flattened);
        }
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred.");
      });
  }

  useEffect(() => {
    // this might be where we could do current time of day logic
    getMenuSteast("breakfast");
    getMenuIV("breakfast");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function filterItems(menuItems) {
    if (filterVegetarian === true) {
      return menuItems.filter(
        (item) =>
          item.filters.filter((filter) => filter.name === "Vegetarian").length >
          0
      );
    }
    if (filterVegan === true) {
      return menuItems.filter(
        (item) =>
          item.filters.filter((filter) => filter.name === "Vegan").length > 0
      );
    }
    // TODO: right now, we cannot unsort once we sort initially
    if (filterCalories === true) {
      // theres two ways we can do this, either combine all the stations into one and sort everything at once, or sort each station individually and include a header for each station
      return menuItems.sort((item, nextItem) =>
        item.calories < nextItem.calories
          ? 1
          : item.calories > nextItem.calories
          ? -1
          : 0
      );
    }
    if (filterProtein === true) {
      return menuItems.sort((item, nextItem) =>
        item.nutrients[1].value_numeric < nextItem.nutrients[1].value_numeric
          ? 1
          : item.nutrients[1].value_numeric >
            nextItem.nutrients[1].value_numeric
          ? -1
          : 0
      );
    }
    return menuItems;
  }

  // Steast:
  // https://api.dineoncampus.com/v1/location/586d05e4ee596f6e6c04b527/periods?platform=0&date=YYYY-MM-DD

  // IV:
  // https://api.dineoncampus.com/v1/location/5f4f8a425e42ad17329be131/periods?platform=0&date=YYYY-MM-DD

  // return <MenuItem item={testItem} />;
  return (
    <div className="bg-gray-100">
      {/* TODO: make sure that steast and IV menus are updated at the same time
                and also include some loading icon or something */}
      <div className="flex justify-center my-3">
        <button
          className="time-button"
          onClick={() => {
            // setPeriod(0);
            getMenuSteast("breakfast");
            getMenuIV("breakfast");
          }}
        >
          Breakfast
        </button>
        <button
          className="time-button"
          onClick={() => {
            // setPeriod(1);
            getMenuSteast("lunch");
            getMenuIV("lunch");
          }}
        >
          Lunch
        </button>
        <button
          className="time-button"
          onClick={() => {
            // setPeriod(2);
            getMenuSteast("dinner");
            getMenuIV("dinner");
          }}
        >
          Dinner
        </button>
      </div>
      <div className="flex pt-3 justify-center">
        <button
          className={
            filterVegetarian ? "filter-button-active" : "filter-button"
          }
          onClick={() => {
            setFilterVegetarian(!filterVegetarian);
          }}
        >
          Vegetarian
        </button>
        <button
          className={filterVegan ? "filter-button-active" : "filter-button"}
          onClick={() => {
            setFilterVegan(!filterVegan);
          }}
        >
          Vegan
        </button>
        <button
          className={filterCalories ? "filter-button-active" : "filter-button"}
          onClick={() => {
            setFilterCalories(!filterCalories);
          }}
        >
          Calories
        </button>
        <button
          className={filterProtein ? "filter-button-active" : "filter-button"}
          onClick={() => {
            setFilterProtein(!filterProtein);
          }}
        >
          Protein
        </button>
      </div>
      <div className="dining-halls-container">
        <div className="dining-hall">
          <div className="text-center text-3xl my-5">Stetson East</div>
          {menuSteast ? (
            filterItems(menuSteast).map((item) => (
              <MenuItem key={item.id} item={item} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="dining-hall">
          <div className="text-center text-3xl my-5">International Village</div>
          {menuIV ? (
            filterItems(menuIV).map((item) => (
              <MenuItem key={item.id} item={item} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
