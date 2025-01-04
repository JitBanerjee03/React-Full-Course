import styles from './TodoFormat.module.css'
let TodoFormat=()=>{
    return (
        <>
        <div class={`container text-center ${styles.increase}`}>
          <div class="row">
            <div class="col">
              <input type="text" placeholder="Enter your Todo"/>
            </div>
            <div class="col">
            <input type="date" placeholder="Enter your Todo"/>
            </div>
            <div class="col">
            <button type="button" class={`btn btn-success ${styles.btnLarge}`}>Add</button>
            </div>
          </div>
        </div>        
        </>
    )
}

export default TodoFormat;