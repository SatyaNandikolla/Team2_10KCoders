// var movieDetails=["Tel-Comics","Tel-Movies","Tel-Director","Tel-Producer","Tel-Actors"]
var movieDetails=["Tam-Comics","Tam-Movies","Tam-Director","Tam-Producer","Tam-Actors"]
for(i=0;i<movieDetails.length;i++){
    //step-1:creating the element
    var li=document.createElement("li")
    var anchor=document.createElement("a")
    
    //step-2
    anchor.innerHTML=movieDetails[i]

    //step:3-append chestam
    li.appendChild(anchor)
    document.getElementById("demo").appendChild(li)
}