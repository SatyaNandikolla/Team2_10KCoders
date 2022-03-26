{/* <li><a href="#">Comics</a></li>
<li><a href="#">Movies</a></li>
<li><a href="#">Director</a></li>
<li><a href="#">Producer</a></li>
<li><a href="#">Actors</a></li> */}
var movieDetails=["Tel-Comics","Tel-Movies","Tel-Director","Tel-producer","Tel-Actors"]
for(i=0;i<movieDetails.length;i++){
    //step-1
var li=document.createElement("li")
var anchor=document.createElement("a")
//step-2
anchor.innerHTML=movieDetails[i]
//step-3
li.appendChild(anchor)
document.getElementById("demo").appendChild(li)
}