// Shop Name Generator by CantFindGeorge

const prefixTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.dsNA2INfgBwMNbiO');
const suffixTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.NK0R2kjK5OqPPOyI');

// Creates an array to store stuff
let shopName = []; 

// Loop to roll shops and push to array
for(let i=0;i<5;i++){

    // Roll Prefix
    const prefix1Draw = await prefixTable.draw({displayChat: false});
    const shopPrefix = prefix1Draw.results[0].getChatText();
    // Roll Suffix
    const suffix1Draw = await suffixTable.draw({displayChat: false});
    const shopSuffix = suffix1Draw.results[0].getChatText();
    // Stores rolls in temp var and pushes info to shopName
    let generatedShop = shopPrefix + ' ' + shopSuffix;
    shopName.push(generatedShop);
};


// Create Chat Msg
await ChatMessage.create({
    content: `<br><h2>Random Shop Names</h2><br>
    • ${shopName[0]}<br>
    • ${shopName[1]}<br>
    • ${shopName[2]}<br>
    • ${shopName[3]}<br>
    • ${shopName[4]}<br>
    <br>`,

    whisper : ChatMessage.getWhisperRecipients("GM")
});