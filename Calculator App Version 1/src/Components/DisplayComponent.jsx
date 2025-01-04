import styles from './DisplayComponent.module.css'

let DisplayComponent=()=>{
    return(
            <input type="text" className={`${styles.display}`}></input> 
    )
}

export default DisplayComponent