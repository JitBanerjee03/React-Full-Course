import styles from './TodoRow.module.css'
let TodoRow=({TodoJob,TodoDate})=>{
    return (
        <div class={`container text-center ${styles.increase}`}>
        <div class="row">
          <div class="col">
            {TodoJob}
          </div>
          <div class="col">
          {TodoDate}
          </div>
          <div class="col">
          <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    )
}

export default TodoRow;