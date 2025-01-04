let BtnContainer=({btnArr,setOnbtnClick})=>{
    return (
        <>
            <div class="container text-center">
              <div class="row row-cols-4 row-gap-2">

                {btnArr.map((btn)=>{
                    return(
                        <div class="col"><button type="button" class="btn btn-outline-secondary" onClick={(event)=>setOnbtnClick(event,btn)}>{btn}</button></div>
                    )
                })}
              </div>
            </div>
        </>
    )
}

export default BtnContainer;