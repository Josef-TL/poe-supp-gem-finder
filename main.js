console.log("Hi")


const button = document.querySelector('button');
const input = document.querySelector('input');

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
    fetchText(input.value)
        .then(generatedText =>{
            console.log(generatedText)
            commasToList(generatedText)
        })

});




