import { createContext, useReducer } from "react";

export const DisplayTypeContext=createContext([{
    curLink:'',
    setMainContent:()=>{}
}]);

export const TourContext=createContext([{
    destArr:[],
    setDestination:()=>{}
}]);

const TourContextProvider=({children})=>{
    
    const reducerFunc=(state,action)=>{
        if(action.type==='Add new Destination'){
            return [action.payLoad,...state];
        }else{
            const newDestArr=state.filter((place)=>place.id!==action.payLoad.id);
            return newDestArr;
        }
    }

    const [destinationArr,despatchArr]=useReducer(reducerFunc,[]);

    const setDestination=(id,place,description,price,tags)=>{
        const actionObj={
            type:'Add new Destination',

            payLoad:{
                id:id,
                place:place,
                description:description,
                price:price,
                tags:tags
            }
        };

        despatchArr(actionObj);
    }

    const deleteDestination=(id)=>{
        const actionObj={
            type:'Delete Destination',

            payLoad:{
                id:id
            }
        }

        despatchArr(actionObj);
    }
    
    return(
    <>
        <TourContext.Provider value={{destinationArr,setDestination,deleteDestination}}>
            {children}
        </TourContext.Provider>
    </>
    )
}

export default TourContextProvider;
