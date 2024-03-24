// Createn 5 Names from Syllable Tables from the GM Scrren
// Created By twitch.tv/CantFindGeorge


// Change these Syllable Table IDs
const prefixTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.fcQEFOukAGG9h4tK');
const middleTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.BFVF5aXgGdzvAeEV');
const suffixTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.boDm1TcOTwqzfQ6Y');


// Creates an array to store stuff
let npcName = [];

// Create a loop to generate 5 names
for(let i=0;i<5;i++){
    // Roll Name Preffix
    const prefixNameDraw = await prefixTable.draw({displayChat: false});
    const prefix = prefixNameDraw.results[0].getChatText();
    // Roll Name Middle
    const middleNameDraw = await middleTable.draw({displayChat: false});
    const middle = middleNameDraw.results[0].getChatText();
    // Roll Name Suffix
    const suffixNameDraw = await suffixTable.draw({displayChat: false});
    const suffix = suffixNameDraw.results[0].getChatText();
    // Combines rolls and stores new value in the npcName array
    const generatedName = prefix + middle + suffix;
    npcName.push(generatedName);

};
// Create Chat Msg
await ChatMessage.create({
    content: `<br><h2>Random Syllable Names</h2>
    <br>• ${npcName[0]}
    <br>• ${npcName[1]}
    <br>• ${npcName[2]}
    <br>• ${npcName[3]}
    <br>• ${npcName[4]}
    <br><br>`,

    whisper : ChatMessage.getWhisperRecipients("GM")
});