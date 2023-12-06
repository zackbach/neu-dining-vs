import axios from "axios";

export async function getMenuSteast(meal) {
  try {
    const response = await axios.get(
      "https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-1a8ee05f-45c3-43dd-9157-7c07e1b36328/default/get-menu",
      { params: { hall: "steast", meal: meal } }
    );

    const { data } = response;

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
      return flattened;
    }
  } catch (err) {
    console.error(err);
    alert("An error occurred.");
    return [];
  }
}

export async function getMenuIV(meal) {
  try {
    const response = await axios.get(
      "https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-1a8ee05f-45c3-43dd-9157-7c07e1b36328/default/get-menu",
      { params: { hall: "iv", meal: meal } }
    );

    const { data } = response;

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
      return flattened;
    }
  } catch (err) {
    console.error(err);
    alert("An error occurred.");
    return [];
  }
}
