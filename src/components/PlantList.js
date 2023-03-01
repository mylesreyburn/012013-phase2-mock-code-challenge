import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {plantData} ) {
  return (
    <ul className="cards">{
      plantData.map((item) => {
        return <PlantCard key={item.id} name={item.name} image={item.image} price={item.price}/>
      })}
      </ul>
  );
}

export default PlantList;
