import { useContext, useEffect, useState } from "react";
import { TourContext } from "../store/TourContext";
import Loading from "./Loading";
const AllTour=()=>{
    const {destinationArr,deleteDestination,initializaDestArray}=useContext(TourContext);
    
    /*
    const initiateArray=async()=>{
        try{
            const res=await fetch('http://localhost:3000/getTours');

            if(!res.ok){
                console.log("Cannot fetch data from the server due to server internal error!");
                throw Error;
            }else{
                const responseData=await res.json();
                initializaDestArray(responseData);
            }
        }catch(err){
            console.log('Error occured while fetching data from the server!');
        }
    }*/
    const [loadState,setLoadState]=useState(false);

    useEffect(()=>{
        const controller=new AbortController();
        const signal=controller.signal;
        const initiateArray=async()=>{
            try{
                setLoadState(true)
                const res=await fetch('http://localhost:3000/getTours',{signal});
                
                if(!res.ok){
                    console.log("Cannot fetch data from the server due to server internal error!");
                    throw Error;
                }else{
                    const responseData=await res.json();
                    setLoadState(false);
                    initializaDestArray(responseData);
                }
            }catch(err){
                console.log('Error occured while fetching data from the server!');
            }
        } 
        initiateArray();

        return ()=>{
            controller.abort();
        }
    },[])

    return(
        <>
            {
                ( loadState && <Loading/>)
            }

            <div style={{display:"flex",gap:"10%",flexWrap:"wrap",paddingLeft:"2%"}}>
                    {destinationArr.map((destination)=>{
                        return(
                            <>  
                                <div class="card" style={{width: "18rem", marginBottom:"2%"}}>
                                <div class="card-body">
                                <div style={{marginLeft:"85%"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"
                                     onClick={()=>deleteDestination(destination._id)}
                                    >
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                    </svg>
                                </div>
                                <h1 class="card-title">{destination.place}</h1>
                                <p class="card-text">{destination.description}</p>
                                {destination.tags.map((tag)=>{
                                    return(<span className="badge rounded-pill text-bg-secondary" style={{marginLeft:"2%",marginRight:"2%"}}>{tag}</span>)
                                })}

                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <div class="list-group">
                                        <a href="#" class="list-group-item list-group-item-action list-group-item-success">{destination.price}</a>
                                        </div>
                                    </li>
                                </ul>
                                </div>
                                </div>
                            </>
                        )
                    })}
            </div>
        </>
    )
}

export default AllTour;