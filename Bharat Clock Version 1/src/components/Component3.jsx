let component3=()=>{
    const date=new Date();
    return <p className="">
        The correct time of Bharat is : {date.toLocaleDateString()} - {date.toLocaleTimeString()} 
    </p>
}

export default component3