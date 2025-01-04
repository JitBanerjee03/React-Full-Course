import style from './MainComponent.module.css'

let MainComponent=(props)=>{
    return (
        <div className={`${style.mainDivContainer}`}>
            {props.children}
        </div>
    )
}

export default MainComponent