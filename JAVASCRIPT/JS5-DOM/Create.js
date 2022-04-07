       //create the form 
       var person={
        fname:"",
        lname:"",
        email:""
    }
    //    var persons=[]
    var persons=JSON.parse(localStorage.getItem("persons"))
       function createPerson(){
         
           for(a in person){
               person[a]=document.getElementById(a).value
           }
           //create a copy of person
           persons.push({...person})
           var convertedPersons=JSON.stringify(persons)
        //    persons.push(person)
        //    console.log(person)
        localStorage.setItem("persons",convertedPersons)
           clearPerson()
           displayPersons()
           validate()
       }
