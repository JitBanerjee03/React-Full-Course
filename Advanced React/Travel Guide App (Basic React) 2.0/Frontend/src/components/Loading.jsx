const StartMessage=({initiateArray})=>{
    return(
        <>
            <center className="startmessageClass">
                <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                </div>
            </center>
        </>
    )
}

export default StartMessage;