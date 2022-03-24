var users=[]
function addUser(){
    //     var person={
    //         fname:document.getElementById("fname").value,
    //         lname:document.getElementById("lname").value,
    //         email:document.getElementById("email").value
    //     } 
    //     console.log(person)
    var person={
            fname:"",
            lname:"",
            email:""
        }  
        for(a in person){
            person[a]=document.getElementById(a).value
        } 
        users.push(person)
        console.log(users)
        displayUsers()
        clearForm()            
     }