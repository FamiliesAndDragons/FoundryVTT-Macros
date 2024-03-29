// Random Name Table
// Created By twitch.tv/CantFindGeorge



// CHANGE CODE BELOW //
race = "Human";
firstNameTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.US7E8IBzC0333jx3');

surnameTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.1buUO3KXApJ01Kgn');
// CHANGE CODE ABOVE //



let names = [];
let gender = [];
for(let i=0;i<5;i++){


  // determine gender
    // Gender Array
    const tableTypes = ['M','F'];

    //Find value from gender array
    const randomElement = tableTypes[Math.floor(Math.random() * tableTypes.length)];

    // Creates Name 1
    const firstNameDraw = await firstNameTable.draw({displayChat: false});
    const firstName = firstNameDraw.results[0].getChatText();

    const lastNameDraw = await surnameTable.draw({displayChat: false});
    const lastName = lastNameDraw.results[0].getChatText();

    const generatedName = firstName + " " + lastName;
    const generatedGender = randomElement;

  names.push(generatedName);
  gender.push(generatedGender);
};


// Create Chat Msg
await ChatMessage.create({
    content: `<br><h2>Random ${race} Names</h2><br>
    • ${names[0]} (${gender[0]})<br>
    • ${names[1]} (${gender[1]})<br>
    • ${names[2]} (${gender[2]})<br>
    • ${names[3]} (${gender[3]})<br>
    • ${names[4]} (${gender[4]})<br>
    <br>`,

    whisper : ChatMessage.getWhisperRecipients("GM")
});