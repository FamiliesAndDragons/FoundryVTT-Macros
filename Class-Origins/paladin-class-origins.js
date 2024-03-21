// Generate Class Origins From Table
// Created By twitch.tv/CantFindGeorge

const myClass = "Paladin";

const iChoseThisClassTable = await fromUuid('Compendium.world.class-origins.RollTable.GiQw9E7O4Ttaba37');
const reason1Table = await fromUuid('Compendium.world.class-origins.RollTable.dMRTFaEg3m4K7f1N');
const reason2Table = await fromUuid('Compendium.world.class-origins.RollTable.iLpYGYMZkejtXcps');
const reason3Table = await fromUuid('Compendium.world.class-origins.RollTable.DBGiRPLcwGgUcIjT');
const reason4Table = await fromUuid('Compendium.world.class-origins.RollTable.K4MZUmNS4l584QUo');


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


// Creates Reason 4
const reason4Draw = await reason4Table.draw({displayChat: false});
const reason4 = reason4Draw.results[0].getChatText();


// Create Chat Msg
await ChatMessage.create({
    content: `<br><h2>${myClass} Origins</h2><br>
    • <b>I Chose this class because:</b> ${iChoseThisClass}<br>
    • <b>Personal Goal:</b> ${reason1}<br>
    • <b>Symbol:</b> ${reason2}<br>
    • <b>Nemesis:</b> ${reason3}<br>
    • <b>Temptation:</b> ${reason4}<br>
    <br>`,
    whisper: [game.user.id]
});