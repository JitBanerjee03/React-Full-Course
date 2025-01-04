let EuropeCountries=()=>{
    let countryArr=['France','Germany','Ukrane','Poland'];
    //let countryArr=[];
    return (
        <>
        <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
            European Countries
        </a>
        
        {countryArr.length===0 && <h1>Currently Europe's CountryArr is Empty</h1>}

        {
            countryArr.map((country)=>{
                return (
                    <a href="#" class="list-group-item list-group-item-action">{country}</a>
                )
            })
        }
        </div>
        </>
    )
}

export default EuropeCountries;