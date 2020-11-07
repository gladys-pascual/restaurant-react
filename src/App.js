import React from "react";
import "./App.css";
import RestaurantName from "./components/RestaurantName";
import FoodList from "./components/FoodList";
import data from "./data";

const App = () => {
  return (
    <div>
      <RestaurantName {...data} />
      <FoodList {...data} />
    </div>
  );
};

export default App;
