import css from './DisplayComponent.module.css'

let DisplayComponent=({displayValue})=>{
    return (
        <>
            <div class="input-group input-group-lg">
            <input type="text" class={`form-control ${css.disPalyBorder}`} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value={displayValue} readonly/>
            </div>        
        </>
    )
}

export default DisplayComponent;