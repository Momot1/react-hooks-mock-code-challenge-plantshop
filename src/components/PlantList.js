import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsArray, search}) {
  const plantsElements = plantsArray
    .filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
    .map(plant => <PlantCard plant={plant} key={plant.id}/>)

  return (
    <ul className="cards">{plantsElements}</ul>
  );
}

export default PlantList;
