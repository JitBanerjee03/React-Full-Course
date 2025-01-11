import { createContext, useReducer } from "react";

export const DisplayTypeContext=createContext([{
    curLink:'',
    setMainContent:()=>{}
}]);

export const TourContext=createContext([{
    destArr:[],
    setDestination:()=>{},
    deleteDestination:()=>{},
    initializaDestArray:()=>{}
}]);

const TourContextProvider=({children})=>{
    
    const reducerFunc=(state,action)=>{
        if(action.type==='Add new Destination'){
            return [action.payLoad,...state];
        }else if(action.type==='Initialize Destination Array'){
            return action.payLoad;
        }
        else{
            const newDestArr=state.filter((place)=>place._id!==action.payLoad.id);
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
    
    const initializaDestArray=(initialdata)=>{
        const actionObj={
            type:'Initialize Destination Array',
            payLoad:initialdata
        }

        despatchArr(actionObj);
    }

    return(
    <>
        <TourContext.Provider value={{destinationArr,setDestination,deleteDestination,initializaDestArray}}>
            {children}
        </TourContext.Provider>
    </>
    )
}

export default TourContextProvider;
