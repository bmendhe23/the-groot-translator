var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var txtOutput = document.querySelector("#txt-output")

var serverURL = "https://api.funtranslations.com/translate/groot.json";

function errorHandler(error){
    console.log("error occured: " + error);
}

function generateTranslationURL(text){
    return serverURL + "?text=" + text;
}

btnTranslate.addEventListener("click", clickEventHandler => {

    var inputTxt = txtInput.value;
    
    fetch(generateTranslationURL(inputTxt))
    .then(response => response.json())
    .then(translated => {
        txtTranslated = translated.contents.translated;
        txtOutput.innerText = txtTranslated;
    })
    .catch(errorHandler);
})

