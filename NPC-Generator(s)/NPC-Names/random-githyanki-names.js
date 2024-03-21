// Random Name Table
// Created By twitch.tv/CantFindGeorge



// CHANGE CODE BELOW //
race = "Githyanki";
maleNameTable = await fromUuid('Compendium.world.roll-tables.RollTable.ZZhiCHYC8rwzypOa');
femaleNameTable = await fromUuid('Compendium.world.roll-tables.RollTable.EhDBiHFjU86TRS0Q');

// CHANGE CODE ABOVE //



let names = [];
let gender = [];
for(let i=0;i<5;i++){


  // determine gender
    // Gender Array
    const tableTypes = ['M','F'];

    //Find value from array
    const randomElement = tableTypes[Math.floor(Math.random() * tableTypes.length)];
    // Determine Fist Name table based on gender
    let firstNameTable
        if (randomElement == "M"){
            firstNameTable = maleNameTable;    
        } else {
            firstNameTable = femaleNameTable;
        };
  // roll names
    // Creates Name 1
    const firstNameDraw = await firstNameTable.draw({displayChat: false});
    const firstName = firstNameDraw.results[0].getChatText();

    const generatedName = firstName;
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