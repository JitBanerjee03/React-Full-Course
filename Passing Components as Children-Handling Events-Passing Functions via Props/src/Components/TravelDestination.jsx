import TravelItem from "./TravelItem"

let TravelDestination=({countryArr})=>{
    
    let btnOnClick=(event,country)=>{
        console.log(event);
        console.log(`Travelling to ${country}`)
    }

    return (
        <>
            {
                countryArr.map((country)=>{
                    return (
                    <TravelItem travelDestination={country} btnOnClick={btnOnClick}></TravelItem>
                    )
                })
            }
        </>
    )
}

export default TravelDestination