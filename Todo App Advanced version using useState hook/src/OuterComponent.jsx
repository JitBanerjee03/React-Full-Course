import style from './styles/OuterComponent.module.css'

let OuterComponent=(props)=>{
    return (
        <>
            <div className={`${style.outerComponent}`}>{props.children}</div>
        </>
    )
}

export default OuterComponent;