import style from './TravelItem.module.css'
let TravelItem=({travelDestination,btnOnClick})=>{
    return (
        <>
            <div class={`container text-center ${style.expandItemSize}`}>
            <div class="row">
                <div class="col">
                {travelDestination}
                </div>
                <div class="col">
                <button type="button" class="btn btn-info" onClick={(event)=>btnOnClick(event,travelDestination)}>Travel</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default TravelItem;