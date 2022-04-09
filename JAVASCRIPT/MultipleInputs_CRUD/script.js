//step-1---subjects mottom techukovali e step lo
document.querySelector("button").onclick = function () {
    let person = {
        email: " ",
        password: " ",
        phone: null,
        // subjects: [],
        // gender: ''
    }
    // console.log("You Just Clicked The Button")
    let allCheckBoxElements = document.getElementsByName("subject")
    let allRadioElements = document.getElementsByName("gender")
    for(a in person){
        person[a]=document.getElementById(a).value
    }
    person["subjects"]=[]
    //capture subjects
    allCheckBoxElements.forEach((element)=>{
        console.log(element)
        if(element.checked==true){
            person.subjects.push(element.value)
            //element.checked==true is same as element.checke
        }
    })
    person["gender"]=''
    allRadioElements.forEach((element)=>{
        if(element.checked){
            person.gender=element.value
        }
    })
    console.log(person)
}