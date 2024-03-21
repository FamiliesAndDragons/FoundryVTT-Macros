// Generate Class Origins From Table
// Created By twitch.tv/CantFindGeorge


const myClass = "Fighter";

const iChoseThisClassTable = await fromUuid('Compendium.world.class-origins.RollTable.ETi6aPd4oDcT0QRg');
const reason1Table = await fromUuid('Compendium.world.class-origins.RollTable.lzxaPxnqceDOqzQO');
const reason2Table = await fromUuid('Compendium.world.class-origins.RollTable.1C90DG2yZIOdmncW');
const reason3Table = await fromUuid('Compendium.world.class-origins.RollTable.tTRh84f0Q6DRgoiP');


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
    • <b>Heraldic Sign:</b> ${reason1}<br>
    • <b>Instructor:</b> ${reason2}<br>
    • <b>Signature Style:</b> ${reason3}<br>
    <br>`,
    whisper: [game.user.id]
});