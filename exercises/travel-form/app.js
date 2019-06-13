    
var myForm = document.myForm

myForm.addEventListener("submit", function(event){
    event.preventDefault()

var firstName = myForm.firstName.value
var lastName = myForm.lastName.value
var age = myForm.age.value
var radioInput = myForm.radioInput.value
var selectInput = myForm.selectInput.value
//var diets = myForm.diets.value
var checkboxArr = myForm.diets
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
Gender: ${radioInput}
Travel: ${selectInput}
Dietary Restriction: ${checkedRestriction}
`)



})

