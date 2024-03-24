// Random Sentient Magic Item
// Created By twitch.tv/CantFindGeorge


// Assign Table Values
const communicationTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.QzXRBcswJ1MaPSCm');
const sensesTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.8FS4U9TgcXaztjJu');
const alignmentTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.8vYB8zKnGZH7coAw');
const specialPurposeTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.Lti1coReR6hGHKOF');

// Roll Table 1
const table1Draw = await communicationTable.draw({displayChat: false});
const result1 = table1Draw.results[0].getChatText();

// Roll Table 2
const table2Draw = await sensesTable.draw({displayChat: false});
const result2 = table2Draw.results[0].getChatText();

// Roll Table 3
const table3Draw = await alignmentTable.draw({displayChat: false});
const result3 = table3Draw.results[0].getChatText();

// Roll Table 4
const table4Draw = await specialPurposeTable.draw({displayChat: false});
const result4 = table4Draw.results[0].getChatText();


// Create Chat Msg
await ChatMessage.create({
    content: `<br><h2>Random Sentient Item</h2><br>
    • <b>Communication:</b> ${result1}<br>
    • <b>Senses:</b> ${result2}<br>
    • <b>Alignment:</b> ${result3}<br>
    • <b>Special Purpose:</b> ${result4}<br>
    <br>`,

    whisper : ChatMessage.getWhisperRecipients("GM")
});

