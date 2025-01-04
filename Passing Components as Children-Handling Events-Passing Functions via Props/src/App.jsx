import { cloneElement } from "react";
import AddNewItem from "./Components/AddNewItem"
import TravelDestination from "./Components/TravelDestination"
import MainComponent from "./Components/MainComponent";

function App() {
  let countryArr=['France','Germany','South Korea','India','Russia','United States of America']
  
  let onChangeDestination=(event)=>{
    console.log(event.target.value);
  }

  return (
    <>  
      <MainComponent>
          <center>
              <h1>Travel Destination App</h1> 
              <AddNewItem onChangeDestination={onChangeDestination}></AddNewItem> 
              <TravelDestination countryArr={countryArr}></TravelDestination>
            </center>
      </MainComponent> 
    </>
  )
}

export default App
