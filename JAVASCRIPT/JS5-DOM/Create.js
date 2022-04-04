       //create the form 
       var person={
        fname:"",
        lname:"",
        email:""
    }
       var persons=[]
       function createPerson(){
         
           for(a in person){
               person[a]=document.getElementById(a).value
           }
           //create a copy of person
           persons.push({...person})
        //    persons.push(person)
        //    console.log(person)
           clearPerson()
           displayPersons()
           validate()
       }
