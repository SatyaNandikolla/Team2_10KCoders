function getData(){
    // console.log("hello get data")
    var getInfo=new XMLHttpRequest()
    getInfo.onreadystatechange=function(){
        if(getInfo.status=200 && getInfo.readyState==4){
            console.log(getInfo.response)
            let data=JSON.parse(getInfo.response)
            // console.log(data)
            localStorage.setItem("users",JSON.stringify(data))
            displayUsers(data)
        }
    }
    getInfo.open("GET","https://fakestoreapi.com/users")
    getInfo.send()
}