import { useContext, useRef } from "react";
import { TourContext } from "../store/TourContext";

const AddNewTour=()=>{

    const {setDestination}=useContext(TourContext)

    let Place=useRef('');
    let Description=useRef('');
    let Price=useRef('');
    let Tags=useRef('');

    const AddNewDestination=(event)=>{
        event.preventDefault();
        setDestination(Date.now(),Place.current.value,Description.current.value,Price.current.value,Tags.current.value.split(' '));
        Place.current.value='';
        Description.current.value='';
        Price.current.value='';
        Tags.current.value='';
    }

    return(
        <> 
            <form action="" style={{paddingLeft:"20%",paddingRight:"20%"}} onSubmit={AddNewDestination}>
                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Place</label>
                <input ref={Place} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Country"/>
                </div>
                <br />
                <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea ref={Description} class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                </div>
                <br />
                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Price</label>
                <input ref={Price} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Price"/>
                </div>
                <br />
                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Tags</label>
                <input ref={Tags} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter tags by space"/>
                </div>
                
                <br />
                <button type="submit" class="btn btn-secondary">Submit</button>
            </form>
        </>
    )
}

export default AddNewTour;