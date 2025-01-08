import { createContext, useState } from "react";

export const DisplayTypeContext=createContext([{
    curLink:'',
    setMainContent:()=>{}
}]);

export const TourContext=createContext([{
    destArr:[],
    setDestination:()=>{}
}]);

const TourContextProvider=({children})=>{
    
    const [destArr,setDestArr]=useState([]);
      
    const setDestination=(id,place,description,price,tags)=>{
        const newDestArray=[{
            id:id,
            place:place,
            description:description,
            price:price,
            tags:tags
        },...destArr];

        setDestArr(newDestArray);
    }

    const deleteDestination=(id)=>{
        const newDestArr=destArr.filter((destination)=>destination.id!==id)

        setDestArr(newDestArr);
    }
    
    return(
    <>
        <TourContext.Provider value={{destArr,setDestination,deleteDestination}}>
            {children}
        </TourContext.Provider>
    </>
    )
}

export default TourContextProvider;
