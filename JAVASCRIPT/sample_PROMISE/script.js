// function getNewBall(){}
// function startPlay(){}

// getNewBall()
// startPlay()

let users = []
function getAllUsersFromServer() {
    return new Promise((success, failure) => {
        let getData = new XMLHttpRequest()
        getData.onreadystatechange = function () {
            if (getData.readyState == 4 && getData.status == 200) {
                users = JSON.parse(getData.response);
                success()
                // displayAllUsers()
            }
            // else{
            //     failure()
            // }
        }
        getData.open("GET", "https://jsonplaceholder.typicode.com/users")
        getData.send()
    })

}



function displayAllUsers() {
    console.log(users)
}

// getAllUsersFromServer()
// displayAllUsers()
// getAllUsersFromServer().then(()=>{
//     displayAllUsers()
// })
// .catch(()=>{
//     console.log("some error message")
// })
