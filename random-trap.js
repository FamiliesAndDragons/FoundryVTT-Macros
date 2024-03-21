// Create a Random Trap
// Created By twitch.tv/CantFindGeorge

// Assigns table values
trapTypeTable = await fromUuid('Compendium.world.roll-tables.RollTable.hKNG0BbJ8lmpuFk4');
trapFlavorTable = await fromUuid('Compendium.world.roll-tables.RollTable.FBz3s3phe5kflM2k');
trapTriggerTable = await fromUuid('Compendium.world.roll-tables.RollTable.2RkZRvqr1MSw00BU');


// creates arrays and runs loop
let trapsTypes = [];
let trapsFlavors = [];
let trapsTriggers = [];
for(let i=0;i<5;i++){
  // roll traps
    // Roll Trap Type
    const table1Draw = await trapTypeTable.draw({displayChat: false});
    const result1 = table1Draw.results[0].getChatText();

    // Roll Trap Flavor
    const table2Draw = await trapFlavorTable.draw({displayChat: false});
    const result2 = table2Draw.results[0].getChatText();

    // Roll Trap Trigger
    const table3Draw = await trapTriggerTable.draw({displayChat: false});
    const result3 = table3Draw.results[0].getChatText();

    // Push roll results to arrays
    trapsTypes.push(result1);
    trapsFlavors.push(result2);
    trapsTriggers.push(result3);

};

// Create Chat Msg
await ChatMessage.create({
    content: `<br><h2>Random Traps</h2><br>
    <b><u>Trap Type • Trap Flavor • Trap Trigger</b></u>
    <br>
    <br>
    • ${trapsTypes[0]} • ${trapsFlavors[0]} • ${trapsTriggers[0]}<br>
    • ${trapsTypes[1]} • ${trapsFlavors[1]} • ${trapsTriggers[1]}<br>
    • ${trapsTypes[2]} • ${trapsFlavors[2]} • ${trapsTriggers[2]}<br>
    • ${trapsTypes[3]} • ${trapsFlavors[3]} • ${trapsTriggers[3]}<br>
    • ${trapsTypes[4]} • ${trapsFlavors[4]} • ${trapsTriggers[4]}<br>
    <br>`,

    whisper : ChatMessage.getWhisperRecipients("GM")
});