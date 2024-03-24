// Random Name Table
// Created By twitch.tv/CantFindGeorge



// CHANGE CODE BELOW //
race = "Elf";
maleNameTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.DGM3UyI5IPXBLpck');
femaleNameTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.2nst7BTsW55jKLeA');
kidNameTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.vTWTGRFEeCRB8S0I');

surnameTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.h74XNK0uhSuu5veQ');
// CHANGE CODE ABOVE //



let names = [];
let gender = [];
for(let i=0;i<5;i++){


  // determine gender
    // Gender Array
    const tableTypes = ['M','F','Kid'];

    //Find value from array
    const randomElement = tableTypes[Math.floor(Math.random() * tableTypes.length)];
    // Determine Fist Name table based on gender
    let firstNameTable
        if (randomElement == "M"){
            firstNameTable = maleNameTable;    
        } else if(randomElement == "Kid") {
            firstNameTable = kidNameTable;
        } else {
            firstNameTable = femaleNameTable;
        };
  // roll names
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