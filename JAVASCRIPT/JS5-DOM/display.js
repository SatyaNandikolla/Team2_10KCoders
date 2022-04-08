//Getting data from local storage

function displayPersons() {
    document.querySelector("tbody").innerHTML = ""
    persons.forEach((person, i) => {
        //creating the tr
        var myTr = document.createElement("tr")
        var indextd = document.createElement("td")
        indextd.innerHTML = i + 1
        myTr.appendChild(indextd)
        for (a in person) {
            var myTd = document.createElement("td")
            myTd.innerHTML = person[a]
            myTr.appendChild(myTd)
        }
        //edit td
        var editTd = document.createElement("td")
        var editBtn = document.createElement("button")
        editBtn.setAttribute("class", "btn btn-warning")
        editBtn.setAttribute("onClick", 'editPerson('+ i +')')
        editBtn.innerHTML = "Edit"
        editTd.appendChild(editBtn)
        myTr.appendChild(editTd)
        //delete td
        var deleteTd = document.createElement("td")
        var deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("class", "btn btn-danger")
        deleteBtn.setAttribute("onClick", 'deletePerson('+ i +')')
        deleteBtn.innerHTML = "Delete"
        deleteTd.appendChild(deleteBtn)
        myTr.appendChild(deleteTd)

        document.querySelector("tbody").appendChild(myTr)
    })
}
displayPersons()//this will display the users by default
