let AsianCountries=()=>{
    let CountriesArr=['India','China','Japan','Indonesia']

    return(
        <>
        <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
            Asian Countries
        </a>
        {
            CountriesArr.map((country)=>{
                return (
                    <a href="#" class="list-group-item list-group-item-action">{country}</a>
                )
            })
        }
        </div>        
        </>
    )
}

export default AsianCountries;