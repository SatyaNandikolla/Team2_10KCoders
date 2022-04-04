function validate() {
    console.log("you just pressed a key")
    let formValid = true;
    for (a in person) {
        let userInput = document.getElementById(a).value
        if (a !== 'email') {
            if (userInput.length == 0) {
                formValid = false;
            }
        }
        else{
            var emailPattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        if(!emailPattern.test (userInput)){
            formValid=false;
        }
        }
    }
    if (formValid) {
        document.querySelector("button").removeAttribute("disabled")
    }
    else {
        document.querySelector("button").setAttribute("disabled", true)
    }
}