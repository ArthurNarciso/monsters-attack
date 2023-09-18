const input = require("prompt-sync")({ sigint: true });

let game;
let textInput;
let mode;
let english;
let portuguese;
let language;

game = true;
english = ["Start", "Change Language"];
portuguese = ["Começar", "Trocar de Língua"];
mode = "menu";

console.log("\nSelect a language:\n");
console.log("\n  [1]English\n");
console.log("\n  [2]Portuguese\n");
textInput = input();
setLanguage(parseInt(textInput));

console.clear();

while (game) {
  switch (mode) {
    case "menu":
      console.log("\nMONSTERS ATTACK\n");
      console.log(`\n[1]${language[0]}\n`);
      console.log(`\n[2]${language[1]}\n`);
      textInput = input();
      break;
    case "game":
      break;
    case "end":
      break;
  }
}

function setLanguage(inputLanguage) {
  switch (inputLanguage) {
    case 1:
      language = english;
      break;
    case 2:
      language = portuguese;
      break;
    default:
      console.log("\nERROR: Choice again!\n");
      textInput = input();
      setLanguage(parseInt(textInput));
      break;
  }
}
