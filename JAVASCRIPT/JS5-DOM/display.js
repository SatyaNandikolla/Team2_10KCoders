function displayUsers(){
    // console.log("Users in display users",users)
    //clear the table body
    document.querySelector("tbody").innerHTML=""
    users.forEach((user)=>{
        //creating a tr
        var myTr=document.createElement("tr")
        document.querySelector("tbody").appendChild(myTr)
    })
}