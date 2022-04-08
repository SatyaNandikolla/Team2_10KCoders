function deletePerson(i) {
    console.log("delete person called", +i)
    persons.splice(i,1)
    localStorage.setItem("persons",JSON.stringify(persons))
    displayPersons()
}