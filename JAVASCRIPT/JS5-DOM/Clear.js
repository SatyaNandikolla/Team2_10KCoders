  //clear the form
  function clearForm(){       
    // document.getElementById("fname").value=""
    // document.getElementById("lname").value=""
    // document.getElementById("email").value=""  
    var person={
    fname:"",
    lname:"",
    email:""
} 
for(a in person){
    person[a]=document.getElementById(a).value=""
}       
}