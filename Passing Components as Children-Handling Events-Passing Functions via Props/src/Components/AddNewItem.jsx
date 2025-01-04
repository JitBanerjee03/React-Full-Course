import style from './AddNewItem.module.css'
let AddNewItem=({onChangeDestination})=>{
    return (
        <>
        <div class={`input-group input-group-lg ${style.inputExpand}`}>
        <span class="input-group-text" id="inputGroup-sizing-lg">Destination :</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={(event)=>onChangeDestination(event)}></input>
        </div>
        </>
    )
}

export default AddNewItem;