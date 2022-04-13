var head = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv04Qf3s3G6vFQvG3myhrNeYjrDhpZt5eD9qcsj6y5fn5Ketg6HSgDwgY8acoHwW6LCiU&usqp=CAU";
var tail = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIjhGLesPyz5A6J7KjQVqeLMtdCvJ-AT3pgZ8iajIiwOSe20a7CCov7j2FW3gqLh5TCM&usqp=CAU";
document.querySelector("button").onclick = function () {
    var randomNumber = Math.round(Math.random())
    if (randomNumber == 1) {
        document.querySelector('img').setAttribute('src', head)
        document.querySelector('p').innerHTML = 'Congrats...You Won'
    } else {
        document.querySelector('img').setAttribute('src', tail)
        document.querySelector('p').innerHTML = 'Sorry You Lost.......Better Luck Next Time'
    }
    
}
function getTime(){
    document.querySelector("h2").innerHTML=new Date().toLocaleTimeString()
}

setInterval(()=>{
    // console.log("I Am Running Every Second")
    getTime()
},1000)