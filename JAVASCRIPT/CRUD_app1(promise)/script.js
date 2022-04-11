let API_URL = "http://localhost:3000/fill/"
var getAllUsers = []
function getData() {
    return new Promise((success) => {
        var getInfo = new XMLHttpRequest();
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                getAllUsers = JSON.parse(getInfo.response);
                console.log(getAllUsers);
                success()
            }

        }
        getInfo.open("GET", API_URL);
        getInfo.send();
    })
}
getData().then(() => {
    display()
})