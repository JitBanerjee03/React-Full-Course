import AppName from "./AppName"
import ColOne from "./ColOne"
import ColTwo from "./ColTwo"
import ColThree from "./ColThree"
import './App.css'

function App() {
  return <>
    <center className="Container">
    <AppName/>
      <div class="container text-center">
      <ColOne/>
      <ColTwo/>
      <ColThree/>
      </div>
    </center>
  </>  
}

export default App
