import { useState } from "react";
import "./App.css"
import Content from "./components/Content";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import 'bootstrap/dist/css/bootstrap.min.css';
import AllTour from "./components/AllTour";
import AddNewTour from "./components/AddNewTour";
import TourContextProvider, { DisplayTypeContext } from "./store/TourContext";

function App() {
  
  const [curLink,setLink]=useState('All Tours');
  
  const setMainContent=(data)=>{
    setLink(data)
  }
  
  return (
    <>
      <TourContextProvider>
        <DisplayTypeContext.Provider value={{curLink,setMainContent}}>
          <div className="outerDiv">  
            <Sidebar></Sidebar> 
            <div className="innerDiv">
            <Header></Header>
            <Content>
              {curLink==='All Tours'?<AllTour/>:<AddNewTour/>}
            </Content>
            <Footer></Footer>  
            </div>
          </div>
        </DisplayTypeContext.Provider>
      </TourContextProvider>
    </>
  )
}

export default App;
