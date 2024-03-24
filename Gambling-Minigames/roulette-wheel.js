// Slot Machine Macro
// Created by: https://twitch.tv/CantFindGeorge
// More Families & Dragons: https://linktr.ee/familiesanddragons

/*-----------------------------------*/


// Assign Table Values
const rTable = await fromUuid('Compendium.world.pc-roll-tables.RollTable.6NfSibRjRVcn4kdY');
const fTable = await fromUuid('Compendium.world.pc-roll-tables.RollTable.Tz02U34yXLaj7ste');


// Roll Table
const rDraw = await rTable.draw({displayChat: false});
const wheelResult = rDraw.results[0].getChatText();

// Roll Table
const fDraw = await fTable.draw({displayChat: false});
const flavorText = fDraw.results[0].getChatText();


// Create Chat Msg
await ChatMessage.create({
    content: `<br>
    <h2>Roulette Wheel</h2><br>
    <b>${flavorText}..</b><br>
    <br>
    • ${wheelResult}<br>
    <br>`,
});