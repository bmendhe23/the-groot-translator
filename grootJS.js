var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")

btnTranslate.addEventListener("click", clickEventHandler => {
    console.log("clicked");
    console.log(txtInput.value);
})