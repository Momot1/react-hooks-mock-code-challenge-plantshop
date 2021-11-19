import React, {useState} from "react";

function PlantCard({plant}) {
  const {price,  image, name} = plant
  const [isInStock, setIsInStock] = useState(true)

  function changeStock(){
    setIsInStock(!isInStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={changeStock}>In Stock</button>
      ) : (
        <button onClick={changeStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
