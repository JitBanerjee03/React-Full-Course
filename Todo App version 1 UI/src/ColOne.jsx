function ColOne(){
    return ( 
    <div class="row One">
        <div class="col">
            <input type="text" placeholder="Enter your todo"></input>
        </div>
        <div class="col">
            <input type="date"></input>
        </div>
        <div class="col">
        <button type="button" class="btn btn-success AddBtn">Add</button>
        </div>
    </div>  
    )   
}

export default ColOne;