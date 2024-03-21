

race = "Dwarf";
maleNameTable = await fromUuid('Compendium.world.roll-tables.RollTable.N4Xsq8xdF7fmMa96');
femaleNameTable = await fromUuid('Compendium.world.roll-tables.RollTable.pQBaSaioAKJu5UAb');

surnameTable = await fromUuid('Compendium.world.roll-tables.RollTable.YmczFnefxIkpvAuR');

//stuff before it.
let names = [];
for(let i=0;i<5;i++){


  // determine gender
    // Gender Array
    const tableTypes = ['Male','Female'];

    //Find value from array
    const randomElement = tableTypes[Math.floor(Math.random() * tableTypes.length)];

    // Determine Fist Name table based on gender
    let firstNameTable
        if (randomElement == "Male"){
            firstNameTable = maleNameTable;    
        } else {
            firstNameTable = femaleNameTable;
        };
  // roll names
    // Creates Name 1
    const firstNameDraw = await firstNameTable.draw({displayChat: false});
    const firstName = firstNameDraw.results[0].getChatText();

    const lastNameDraw = await surnameTable.draw({displayChat: false});
    const lastName = lastNameDraw.results[0].getChatText();

    const generatedName = firstName + " " + lastName

  names.push(generatedName);
};


// Create Chat Msg
await ChatMessage.create({
    content: `<br><h2>Random ${race} Names</h2><br>
    • ${names[0]}<br>
    • ${names[1]}<br>
    • ${names[2]}<br>
    • ${names[3]}<br>
    • ${names[4]}<br>
    <br>`,

    whisper : ChatMessage.getWhisperRecipients("GM")
});