import style from './ButtonComponent.module.css'
let ButtonComponent=()=>{
    let CalArray=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

    return (
        <div className={`${style.btnDiv}`}>

        <div class={`d-flex flex-row bd-highlight mb-3 ${style.flexBoxDiv}`}>
            {
                CalArray.map((keys)=>{
                    return (
                        <button class={`p-2 bd-highlight ${style.ownBtn}`}>{keys}</button>
                    )
                })
            }
        </div>
  
        </div>
    )
}

export default ButtonComponent