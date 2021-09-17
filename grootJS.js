var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var txtOutput = document.querySelector("#txt-output")

console.log(txtOutput.innerText)

btnTranslate.addEventListener("click", clickEventHandler => {
    console.log("clicked");
    console.log(txtInput.value);
})

