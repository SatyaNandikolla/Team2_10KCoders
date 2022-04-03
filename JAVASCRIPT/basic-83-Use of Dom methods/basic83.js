{/* <li><a href="#">Comics</a></li>
<li><a href="#">Movies</a></li>
<li><a href="#">Director</a></li>
<li><a href="#">Producer</a></li>
<li><a href="#">Actors</a></li>  */}
var movieDetails=["Tel-Comics","Tel-Movies","Tel-Director","Tel-Producer","Tel-Actors"]
for(i=0;i<movieDetails.length;i++){
    // console.log(movieDetails[i])
    var li=document.createElement("li")
    var anchor=document.createElement("a")
    li.appendChild(anchor)
    anchor.innerHTML=movieDetails[i]
    document.getElementById("demo").appendChild(li)
}
