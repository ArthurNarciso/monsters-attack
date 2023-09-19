console.clear();

const input = require("prompt-sync")({ sigint: true });

const english = [
  "Select a language:",
  "ERROR:",
  "Invalid command!",
  "Start",
  "Change language",
  "Rules",
  "MONSTER:",
  "Rat",
  "Spider",
  "Zombie",
];
const portuguese = [
  "Selecione uma língua:",
  "ERRO:",
  "Comando inválido!",
  "Começar",
  "Trocar de língua",
  "Regras",
  "MONSTRO:",
  "Rato",
  "Aranha",
  "Zumbi",
];

const quitWords = ["quit", "sair"];

let game;
let mode;
let textInput;
let language;
let monsters;
let monster;
let monsterNum;

language = english;

game = true;
mode = "language";

monsters = [language[7], language[8], language[9]];

monsterNum = Math.floor(Math.random() * monsters.length);

while (game) {
  switch (mode) {
    case "language":
      console.log(`\n${language[0]}\n`);
      console.log("\n  [1]English\n");
      console.log("\n  [2]Português\n");
      makeInput();
      setLanguage(textInput);

      break;
    case "rules":
      console.log("\n(Rules)\n");

      break;
    case "menu":
      console.log("\nMONSTERS ATTACK\n");
      console.log(`\n  [1]${language[3]}\n`);
      console.log(`\n  [2]${language[4]}\n`);
      console.log(`\n  [3]${language[5]}\n`);
      makeInput();

      switch (textInput) {
        case "1":
          mode = "game";
          break;
        case "2":
          mode = "language";
          break;
        case "3":
          mode = "rules";
          break;
        default:
          error(language[2]);
          break;
      }

      break;
    case "game":
      console.log(`\n${language[6]}\n`);
      console.log(`\n${monster}\n`);

      makeInput();

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
        error(language[2]);
      }
      break;
  }
  monsters = [language[7], language[8], language[9]];
  monster = monsters[monsterNum];
}

function error(message) {
  console.log(`\n${language[1]} ${message}\n`);
}
