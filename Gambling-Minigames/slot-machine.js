// Slot Machine Macro
// Created by: https://twitch.tv/CantFindGeorge
// More Families & Dragons: https://linktr.ee/familiesanddragons

/*-----------------------------------*/

// Assign Table Values
const slotsTable = await fromUuid('Compendium.world.roll-tables.RollTable.jkJKOGh7RNboNoGf');
const fTable = await fromUuid('Compendium.world.pc-roll-tables.RollTable.Tz02U34yXLaj7ste')

// Creates arrays to store stuff
let slots = [];


for (i=0;i<3;i++){
// Roll Table
const slotsDraw = await slotsTable.draw({displayChat: false});
const slotsResult = slotsDraw.results[0].getChatText();
// Store results in slots array
slots.push(slotsResult)
};

// Roll Table
const fDraw = await fTable.draw({displayChat: false});
const flavorText = fDraw.results[0].getChatText();

// Create Chat Msg
await ChatMessage.create({
    content: `<br>
    <h2>Slot Machine</h2><br>
    <b>${flavorText}..</b><br>
    <br>
    • ${slots[0]}<br>
    • ${slots[1]}<br>
    • ${slots[2]}<br>
    <br>`,
});
