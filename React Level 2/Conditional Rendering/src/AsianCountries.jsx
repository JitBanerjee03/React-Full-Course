let AsianCountries=()=>{
    
    let CountryArr=['India','China','Japan','South Korea','Indonesia'];
    //let CountryArr=[];
    return(
        <>
        <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
            Asian Countries
        </a>

        {CountryArr.length===0?<h1>Currently the Asian's CountryArr is empty</h1>:null}

        {CountryArr.map((country)=>{
            return(
                <a href="#" class="list-group-item list-group-item-action">{country}</a>   
            )
        })}

        </div>
        </>
    )
}

export default AsianCountries;