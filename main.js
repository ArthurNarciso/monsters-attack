const input = require("prompt-sync")({ sigint: true });
const english = ["Select a language:", "ERROR:", "Choice again!", "Start", "Change language"];
const portuguese = ["Selecione uma língua:", "ERRO:", "Escolha novamente!", "Começar", "Trocar de língua"];
const quitWords = ["quit", "sair"];

let game;
let textInput;
let mode;
let language;

game = true;
mode = "introduction";
language = english;

console.log(`\n${language[0]}\n`);
console.log("\n  [1]English\n");
console.log("\n  [2]Português\n");

console.clear();

while (game) {
  switch (mode) {
    case "introduction":
      console.log(`\n${language[0]}\n`);
      console.log("\n  [1]English\n");
      console.log("\n  [2]Português\n");

      makeInput();
      setLanguage(textInput);
      break;
    case "menu":
      console.log("\nMONSTERS ATTACK\n");
      console.log(`\n  [1]${language[3]}\n`);
      console.log(`\n  [2]${language[4]}\n`);
      makeInput();


      break;
    case "game":
      break;
    case "end":
      break;
  }
}

function makeInput() {
  textInput = input();
  checkQuit(textInput);
  console.clear();
}

function checkQuit(input) {
  if (quitWords.includes(input)) {
    game = false;
  }
}

function setLanguage(inputLanguage) {
  switch (inputLanguage) {
    case "1":
      language = english;
      mode = "menu";
      break;
    case "2":
      language = portuguese;
      mode = "menu";
      break;
    default:
      if (game) {
        console.log(`\n${language[1]} ${language[2]}\n`);
      }
      break;
  }
}

