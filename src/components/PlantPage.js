import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [newName, setNewName] = useState("")
  const [newUrl, setNewUrl] = useState("")
  const [newPrice, setNewPrice] = useState(0)
  const [newPlant, setNewPlant] = useState({})

  function handleUpdateName(event){
    setNewName(event.target.value)
    handleUpdateNewPlant()
  }

  function handleUpdateUrl(event){
    setNewUrl(event.target.value)
    handleUpdateNewPlant()
  }

  function handleUpdatePrice(event){
    setNewPrice(event.target.value)
    handleUpdateNewPlant()
  }

  function handleUpdateNewPlant(){
    const tempObject = {
      name: newName,
      image: newUrl,
      price: newPrice
    }
    setNewPlant(tempObject)
    
  }

  function handleSubmitPlant(event){

    event.preventDefault()

    const tempObject = {
      name: newName,
      image: newUrl,
      price: newPrice
    }
    
    setNewPlant(tempObject)

    fetch("http://localhost:6001/plants", {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
    .then(updateComponent())
  }


  const [importedServerData, setImportedServerData] = useState([])
  const [allData, setAllData] = useState([])
  const [test, setTest] = useState(true)

  useEffect( () => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        setImportedServerData(data)
      })
  }, [test])


  const [filteredName, setFilteredName] = useState("")

  function updateFilteredName(event){
    setFilteredName(event.target.value)
  }

  function updateComponent(){
    setTest(!test)
  }

  return (
    <main>
      <NewPlantForm onUpdateName={handleUpdateName} onUpdateUrl={handleUpdateUrl} onUpdatePrice={handleUpdatePrice} submitNewPlant={handleSubmitPlant}/>
      <Search onSearch={updateFilteredName} />
      <PlantList plantData={importedServerData.filter((item) => {
        if(filteredName === "") return true

        return (item.name.toLowerCase().includes(filteredName.toLowerCase()))
      })}/>
    </main>
  );
}

export default PlantPage;
