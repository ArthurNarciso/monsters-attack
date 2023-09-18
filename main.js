const input = require("prompt-sync")({ sigint: true });

let textInput;
let english;
let portuguese;
let language;

english = ["english"];
portuguese = ["portuguese"];

console.log("\nSelect a language:\n");
console.log("\n  [1]English\n");
console.log("\n  [2]Portuguese\n");
textInput = input();
setLanguage(parseInt(textInput));

console.log(language);

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
            setLanguage();
            break;
    }
}