// Generate Class Origins From Table
// Created By twitch.tv/CantFindGeorge



const myClass = "Barbarian";

const iChoseThisClassTable = await fromUuid('Compendium.world.class-origins.RollTable.CsDDtUQpQtdLOSdi');
const reason1Table = await fromUuid('Compendium.world.class-origins.RollTable.wCVVq4M0sKyzQ8Gm');
const reason2Table = await fromUuid('Compendium.world.class-origins.RollTable.21z63cgLClbZp9D8');
const reason3Table = await fromUuid('Compendium.world.class-origins.RollTable.lZmHr2BxN9kS9Z63');


// I chose thise class becuase...
const iChoseThisClassDraw = await iChoseThisClassTable.draw({displayChat: false});
const iChoseThisClass = iChoseThisClassDraw.results[0].getChatText();


// Creates Reason 1
const reason1Draw = await reason1Table.draw({displayChat: false});
const reason1 = reason1Draw.results[0].getChatText();


// Creates Reason 2
const reason2Draw = await reason2Table.draw({displayChat: false});
const reason2 = reason2Draw.results[0].getChatText();


// Creates Reason 3
const reason3Draw = await reason3Table.draw({displayChat: false});
const reason3 = reason3Draw.results[0].getChatText();


// Create Chat Msg
await ChatMessage.create({
    content: `<br><h2>${myClass} Origins</h2><br>
    • <b>I Chose this class because:</b> ${iChoseThisClass}<br>
    • <b>Personal Totems:</b> ${reason1}<br>
    • <b>Tattoos:</b> ${reason2}<br>
    • <b>Superstitions:</b> ${reason3}<br>
    <br>`,
    whisper: [game.user.id]
});