//Getting data from local storage

function displayUsers(users) {
    document.querySelector("tbody").innerHTML = " ";
    users.forEach((person, i) => {
        //creating the tr
        var myTr = document.createElement("tr")
        var indextd = document.createElement("td")
        indextd.innerHTML = i + 1
        myTr.appendChild(indextd)
        for (a in person) {
            if (a !== "address" && a !== "id" && a !== "name" && a!=="__v") {
                var myTd = document.createElement("td")
                myTd.innerHTML = person[a]
                myTr.appendChild(myTd)
            }
            else if (a === "name") {
                var myTd = document.createElement("td")
                myTd.innerHTML = person[a].firstname + " " + person[a].lastname
                myTr.appendChild(myTd)
            }
        }
        //edit td
        var editTd = document.createElement("td")
        var editBtn = document.createElement("button")
        editBtn.setAttribute("class", "btn btn-warning")
        editBtn.setAttribute("onClick", 'editPerson(' + i + ')')
        editBtn.innerHTML = "Edit"
        editTd.appendChild(editBtn)
        myTr.appendChild(editTd)
        //delete td
        var deleteTd = document.createElement("td")
        var deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("class", "btn btn-danger")
        deleteBtn.setAttribute("onClick", 'deletePerson(' + i + ')')
        deleteBtn.innerHTML = "Delete"
        deleteTd.appendChild(deleteBtn)
        myTr.appendChild(deleteTd)

        document.querySelector("tbody").appendChild(myTr)
    })
}
displayUsers()//this will display the users by default