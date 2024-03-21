
// Created by twitch.tv/CantFindGeorge

const traitTable = await fromUuid('Compendium.world.roll-tables.RollTable.TzgFg9u0ICIifI5h');
const trait = "Habbits"

const table1Draw = await traitTable.draw({displayChat: false});
const result1 = table1Draw.results[0].getChatText();

//Create Chat Message
await ChatMessage.create({
    content: `<br><h2>Random ${trait}</h2><br>
    • <b>Type:</b> ${result1}<br>
    <br>`,
    whisper : ChatMessage.getWhisperRecipients("GM")
});
