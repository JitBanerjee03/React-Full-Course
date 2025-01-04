let EuropeanCountries=()=>{
    let CountryArr=['France','Germany','Romania','Italy']
    return(
        <>
        <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
            European Countries
        </a>
        {
            CountryArr.map((country)=>{
                return (
                    <a href="#" class="list-group-item list-group-item-action">{country}</a>
                )
            })
        }
        </div>
        </>
    )
}

export default EuropeanCountries;