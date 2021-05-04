/*

What does this page do? ❔
  - Modifies user input to be more responsive to coding languages
  - Creates chatbot output for global user input variable

*/

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

function output(input) {
  let product;

  // regex remove non word/space chars
  // trim trailing whitespce
  // remove digits (not good but: solves problem of entering something like "hi1")

  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/ r /g, " are ")
    .replace(/ u /g, " you ")
    .replace(/u r/g, "you are")
    .replace(/r u/g, "are you")
    ;

  if (compare(prompts, replies, text)) { 
    // first, search for exact match in `prompts`
    product = compare(prompts, replies, text);
    // if no match, second, check if message contains text matches ("thank", "rona", etc.)
  } else if (text.match(/thank/gi)) {
    product = "welcome!"
  } else if (text.match(/(rona|covid)/gi)) {
    product = "stay home if unvaccinated", "wear a mask, save lives", "coronavirus changed things", "do what you could to stay happy & social" // edited code
    //product = coronavirus[Math.floor(Math.random() * coronavirus.length)]; // original code
  } else {
    // if all else fails, third, send random alternative
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  // update DOM
  addChat(input, product);
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // stop inner loop when input value matches prompts 
        break;
      }
    }
    if (replyFound) {
      // stop outer loop when reply is found instead of interating through the entire array 
      break;
    }
  }
  return reply;
}

// layout of msgs
function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot"; 
  botImg.src = "bot-mini.png"; 
  botImg.className = "avatar"; 
  botDiv.className = "bot response"; 
  botText.innerText = "•   •   •"; 
  botDiv.appendChild(botText); 
  botDiv.appendChild(botImg); 
  messagesContainer.appendChild(botDiv);
  // keep messages at bottom/most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // fake delay to feel real (act like imessage 🧡)
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 1250
  )

}
