const myForm = document.myForm

myForm.addEventListener("submit", function(event){
    event.preventDefault()
    const firstInput = Number(myForm.firstInput.value)
    const secondInput = Number(myForm.secondInput.value)
    const thirdInput = Number(myForm.thirdInput.value)
    const result = document.getElementById("results")
    result.innerHTML = (firstInput * 5) + (secondInput * 7) + (thirdInput * 11)
    console.log(firstInput + secondInput + thirdInput)

})
