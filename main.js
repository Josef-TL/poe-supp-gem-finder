const button = document.querySelector('button');
const textInput = document.querySelector('#fridge');
const apiInput = document.querySelector('#api-input')
const olElement = document.querySelector('#gem-list');


function commasToList(string) {
    const splitString = string.split(",")


    splitString.forEach((value)=>{
        const liElement = document.createElement("li")
        liElement.textContent = value;

        olElement.appendChild(liElement)
    })

}


button.addEventListener("click", () => {
    button.disabled = true
    fetchText(textInput.value,apiInput.value)
        .then(generatedText =>{
            commasToList(generatedText)
            button.disabled = false
        })

});




