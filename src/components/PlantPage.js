import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantsArray, setPlantsArray] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(resp => resp.json())
      .then(data => setPlantsArray(data))
  }, [])

  function addNewPlant(newPlant){
    setPlantsArray([...plantsArray, newPlant])
  }

  function changeSearch(search){
    setSearch(search)
  }

  return (
    <main>
      <NewPlantForm onAddItem={addNewPlant}/>
      <Search search={search} onSearchChange={changeSearch}/>
      <PlantList plantsArray={plantsArray} search={search}/>
    </main>
  );
}

export default PlantPage;
