var airlineForm = document.airlineForm

airlineForm.addEventListener("submit", function(event){
    event.preventDefault()

// var form = document.getElementByID("arline-form");
// var submit = document.getElementByID(submit);
// var query = document.querySelector;


    var firstName = airlineForm.firstName.value;
    var lastName = airlineForm.lastName.value;
    var age = airlineForm.age.value;
    var gender = airlineForm.gender.value;
    var location = airlineForm.travelLocation.value;
    var checkboxArr = airlineForm.diet
    var checkedRestriction = []

    for(var i = 0; i < checkboxArr.length; i++){
        if(checkboxArr[i].checked){
    checkedRestriction.push(checkboxArr[i].value)
        }
    }

window.alert(`
First Name: ${firstName}
Last Name: ${lastName}
Age: ${age}
Gender: ${gender}
Travel: ${location}
Diet: ${checkedRestriction}
`)

    // alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
})


// submit.addEventListener("click", formalert);

