/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

const messageArea = document.querySelector("textarea");
console.log(messageArea);
const encryptBtn = document.querySelector("button");
// console.log(encryptBtn)
const keyInput = document.querySelector("input");
console.log(keyInput);
const encryption = document.querySelector("#encryption");
// console.log(encryption)

encryptBtn.addEventListener("click", e => {
  // console.log("Encode blicked")
  // encryption.innerHTML = `<p>Encode has been clicked</p>`;
  // console.log(messageArea.value);

  //encryption.innerHTML += `<p>The message is ${messageArea.value}</p>`;
  // console.log(keyInput.value);

  // Get the message from the messageArea
  const msg = messageArea.value;
  if (msg == "") {
    msg = `You didn't enter a message to encrypt, 
          so this is your current message. 
            Delete this then type in a new message 
              and click Encode again for another try.`;
    messageArea.value = msg;
  }
  // Get the key from keyInput
  // encryption.innerHTML += `<p>The key is ${keyInput.value}</p>`;
  const theKey = keyInput.value;
  
});
