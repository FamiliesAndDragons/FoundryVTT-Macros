// Random Name Table -- Created By CantFindGeorge


// CHANGE THIS CODE //
race = "Dragonborn";

maleNameTable = await fromUuid('Compendium.world.roll-tables.RollTable.SKAJDFB1BQ9XXeRS');
femaleNameTable = await fromUuid('Compendium.world.roll-tables.RollTable.E2gJvhC0iwawTAMT');

surnameTable = await fromUuid('Compendium.world.roll-tables.RollTable.vM9Kep9nCKxwZZVh');

const tableTypes = ['Male','Female'];
// CHANGE THIS CODE


//Find value from array
const randomElement = tableTypes[Math.floor(Math.random() * tableTypes.length)];

// Determine Fist Name table based on gender
let firstNameTable

    if (randomElement == "Male"){
        firstNameTable = maleNameTable;    
    } else {
        firstNameTable = femaleNameTable;
    };


// Creates Name 1
const firstNameDraw1 = await firstNameTable.draw({displayChat: false});
const firstName1 = firstNameDraw1.results[0].getChatText();

const lastNameDraw1 = await surnameTable.draw({displayChat: false});
const lastName1 = lastNameDraw1.results[0].getChatText();


// Creates Name 2
const firstNameDraw2 = await firstNameTable.draw({displayChat: false});
const firstName2 = firstNameDraw2.results[0].getChatText();

const lastNameDraw2 = await surnameTable.draw({displayChat: false});
const lastName2 = lastNameDraw2.results[0].getChatText();


// Creates Name 3
const firstNameDraw3 = await firstNameTable.draw({displayChat: false});
const firstName3 = firstNameDraw3.results[0].getChatText();

const lastNameDraw3 = await surnameTable.draw({displayChat: false});
const lastName3 = lastNameDraw3.results[0].getChatText();


// Creates Name 4
const firstNameDraw4 = await firstNameTable.draw({displayChat: false});
const firstName4 = firstNameDraw4.results[0].getChatText();

const lastNameDraw4 = await surnameTable.draw({displayChat: false});
const lastName4 = lastNameDraw4.results[0].getChatText();


// Creates Name 5
const firstNameDraw5 = await firstNameTable.draw({displayChat: false});
const firstName5 = firstNameDraw5.results[0].getChatText();

const lastNameDraw5 = await surnameTable.draw({displayChat: false});
const lastName5 = lastNameDraw5.results[0].getChatText();


// Create Chat Msg
await ChatMessage.create({
    content: `<br><h2>Random ${randomElement} ${race} Names</h2><br>• ${firstName1} ${lastName1}<br>• ${firstName2} ${lastName2}<br>• ${firstName3} ${lastName3}<br>• ${firstName4} ${lastName4}<br>• ${firstName5} ${lastName5}<br><br>`,

    whisper : ChatMessage.getWhisperRecipients("GM")
});