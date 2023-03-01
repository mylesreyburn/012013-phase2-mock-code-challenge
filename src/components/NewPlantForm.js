import React from "react";

function NewPlantForm( { onUpdateName, onUpdateUrl, onUpdatePrice, submitNewPlant }) {



  
  return (
    <div className="new-plant-form" >
      <h2>New Plant</h2>
      <form onSubmit={submitNewPlant}>
        <input type="text" name="name" placeholder="Plant name" onChange={onUpdateName}/>
        <input type="text" name="image" placeholder="Image URL" onChange={onUpdateUrl}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={onUpdatePrice}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
