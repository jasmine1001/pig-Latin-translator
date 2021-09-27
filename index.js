var btnTranslate = document.querySelector("#btn");
console.log(btnTranslate);
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pig-latin.json"

function getTranslateURL(text) {
    return serverURL + "?" + "text=" + text
}

function erroeHandler(error) {
    console.log("error occured", error)
    alert("something wrong with server")
}


function clickEventHandler() {
    var inputText = txtInput.value;

    //calling server
    fetch(getTranslateURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText;
        })
        .catch(erroeHandler)
};

btnTranslate.addEventListener("click", clickEventHandler);