// Random Name Table
// Created By twitch.tv/CantFindGeorge



// CHANGE CODE BELOW //
race = "Lizardfolk";
let firstNameTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.8GJv1dTwn20C8x39');


let names = [];
let gender = [];
for(let i=0;i<5;i++){


  // determine gender
    // Gender Array
    const tableTypes = ['M','F'];

    //Find value from gender array
    const randomElement = tableTypes[Math.floor(Math.random() * tableTypes.length)];


  // roll names
    // Creates Name 1
    const firstNameDraw = await firstNameTable.draw({displayChat: false});
    const firstName = firstNameDraw.results[0].getChatText();

    const generatedGender = randomElement;

  names.push(firstName);
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