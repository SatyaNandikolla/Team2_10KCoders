let API_URL = "http://localhost:3000/users/";
var allUsers = [];
function getAllUsers() {
    return new Promise((success) => {
        var getInfo = new XMLHttpRequest();
        getInfo.onreadystatechange = function () {
            if (getInfo.readyState == 4 && getInfo.status == 200) {
                // allUsers = JSON.parse(getInfo.response);
                // console.log(allUsers);
                success(JSON.parse(getInfo.response))
            }
        };
        getInfo.open("GET", API_URL);
        getInfo.send();
    })
}
// getAllUsers()
// console.log("Hello Javascript")
async function handleGetUsers() {
    allUsers = await getAllUsers();
    displayUsers()
    // getAllUsers().then((success)=>{
    //     displayUsers()
    // })
}
handleGetUsers()