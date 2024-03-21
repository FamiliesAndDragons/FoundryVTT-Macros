// Generate Class Origins From Table
// Created By twitch.tv/CantFindGeorge


const myClass = "Ranger";

const iChoseThisClassTable = await fromUuid('Compendium.world.class-origins.RollTable.vOWgoArV1ORqohSe');
const reason1Table = await fromUuid('Compendium.world.class-origins.RollTable.wQm2g6LgvxOsTXQg');
const reason2Table = await fromUuid('Compendium.world.class-origins.RollTable.6p3M6MNgvLl3GKLs');
const reason3Table = await fromUuid('Compendium.world.class-origins.RollTable.hmge2byjZtR0bSox');


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
    • <b>View of the World:</b> ${reason1}<br>
    • <b>Homeland:</b> ${reason2}<br>
    • <b>Sworn Enemy:</b> ${reason3}<br>
    <br>`,
    whisper: [game.user.id]
});