/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

const messageArea = document.querySelector("textarea")
console.log(messageArea)
const encryptBtn= document.querySelector("button")
// console.log(encryptBtn)
const keyInput = document.querySelector("input")
console.log(keyInput)
const encryption = document.querySelector("#encryption")
// console.log(encryption)

encryptBtn.addEventListener("click", (e)=>{
  // console.log("Encode blicked")
  encryption.innerHTML = `Encode has been clicked`
  // Get the message from the messageArea
  encryption.innerHTML += `The message is: ${messageArea.value}`
  // Get the key from keyInput
  encryption.innerHTML += `The key is ${keyInput.value}`
  
  
  
  encryption.innerHTML = `Encode has been clicked`
  
})
