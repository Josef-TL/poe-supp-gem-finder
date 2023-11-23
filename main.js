const button = document.querySelector('button');
const textInput = document.querySelector('#gem');
const apiInput = document.querySelector('#api-input')
const olElement = document.querySelector('#gem-list');
const formElement = document.querySelector("form")



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

textInput.addEventListener("input",(e)=>{if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
    console.log("HI")}
})


