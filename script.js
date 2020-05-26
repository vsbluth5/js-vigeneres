/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

const messageArea = document.querySelector("textarea");
// console.log(messageArea);
const encryptBtn = document.querySelector("button");
// console.log(encryptBtn)
const keyInput = document.querySelector("input");
// console.log(keyInput);
const encryption = document.querySelector("#encryption");
// console.log(encryption)
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H",
               "I", "J", "K", "L", "M", "N", "O", 
                "P", "Q", "R", "S", "T", "U", "V",
               "W", "X", "Y", "Z"
               ]; // Might want to add other characters later

encryptBtn.addEventListener("click", e => {
  // console.log("Encode blicked")
  // encryption.innerHTML = `<p>Encode has been clicked</p>`;
  // console.log(messageArea.value);

  //encryption.innerHTML += `<p>The message is ${messageArea.value}</p>`;
  // console.log(keyInput.value);

  // Get the message from the messageArea
  let msg = messageArea.value;
  if (msg == "") {
    msg = `You didn't enter a message to encrypt, 
          so this is your current message. 
            Delete this then type in a new message 
              and click Encode again for another try.`;
    messageArea.value = msg;
  }
  // Get the key from keyInput
  encryption.innerHTML = `<p>Your encoded message is:</p>`;
  const theKey = keyInput.value;
  let posKey = 0
  let cipher = ""
  // let msgList = msg.split()
  // console.log()
  
    // for every character in the message
  for (let i = 0; i < msg.length; i++) {
    if (alphabet.includes(msg[i])) {
      let pos = alphabet.indexOf(theKey[posKey])
      const shifted = alphabet.slice(pos).concat(alphabet.slice(0, pos))
      
      // console.log(shifted)
      // encryption.innerHTML += `<p>${msg[i]} and ${theKey[posKey]} => ${shifted[alphabet.indexOf(msg[i])]}</p>`
      cipher += shifted[alphabet.indexOf(msg[i])]
      posKey = (posKey + 1)%theKey.length;
    } else {
      cipher += msg[i]
    }
  }
  encryption.innerHTML += `${cipher}`

    
});
