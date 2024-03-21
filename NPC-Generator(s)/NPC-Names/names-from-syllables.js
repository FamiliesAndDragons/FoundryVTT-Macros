// Createn 5 Names from Syllable Tables from the GM Scrren
// Created By twitch.tv/CantFindGeorge

// More FoundryVTT Macros available at: 


// Change these Syllable Table IDs
const prefixTable = await fromUuid('Compendium.world.roll-tables.RollTable.fcQEFOukAGG9h4tK');
const middleTable = await fromUuid('Compendium.world.roll-tables.RollTable.BFVF5aXgGdzvAeEV');
const suffixTable = await fromUuid('Compendium.world.roll-tables.RollTable.boDm1TcOTwqzfQ6Y');


// Roll Name 1
const prefixNameDraw1 = await prefixTable.draw({displayChat: false});
const prefix1 = prefixNameDraw1.results[0].getChatText();

const middleNameDraw1 = await middleTable.draw({displayChat: false});
const middle1 = middleNameDraw1.results[0].getChatText();

const suffixNameDraw1 = await suffixTable.draw({displayChat: false});
const suffix1 = suffixNameDraw1.results[0].getChatText();

// Roll Name 2
const prefixNameDraw2 = await prefixTable.draw({displayChat: false});
const prefix2 = prefixNameDraw2.results[0].getChatText();

const middleNameDraw2 = await middleTable.draw({displayChat: false});
const middle2 = middleNameDraw2.results[0].getChatText();

const suffixNameDraw2 = await suffixTable.draw({displayChat: false});
const suffix2 = suffixNameDraw2.results[0].getChatText();

// Roll Name 3
const prefixNameDraw3 = await prefixTable.draw({displayChat: false});
const prefix3 = prefixNameDraw3.results[0].getChatText();

const middleNameDraw3 = await middleTable.draw({displayChat: false});
const middle3 = middleNameDraw3.results[0].getChatText();

const suffixNameDraw3 = await suffixTable.draw({displayChat: false});
const suffix3 = suffixNameDraw3.results[0].getChatText();


// Roll Name 4
const prefixNameDraw4 = await prefixTable.draw({displayChat: false});
const prefix4 = prefixNameDraw4.results[0].getChatText();

const middleNameDraw4 = await middleTable.draw({displayChat: false});
const middle4 = middleNameDraw4.results[0].getChatText();

const suffixNameDraw4 = await suffixTable.draw({displayChat: false});
const suffix4 = suffixNameDraw4.results[0].getChatText();


// Roll Name 5
const prefixNameDraw5 = await prefixTable.draw({displayChat: false});
const prefix5 = prefixNameDraw5.results[0].getChatText();

const middleNameDraw5 = await middleTable.draw({displayChat: false});
const middle5 = middleNameDraw5.results[0].getChatText();

const suffixNameDraw5 = await suffixTable.draw({displayChat: false});
const suffix5 = suffixNameDraw5.results[0].getChatText();


// Create Chat Msg
await ChatMessage.create({
    content: `<br><h2>Random Syllable Names</h2><br>• ${prefix1}${middle1}${suffix1}<br>• ${prefix2}${middle2}${suffix2}<br>• ${prefix3}${middle3}${suffix3}<br>• ${prefix4}${middle4}${suffix4}<br>• ${prefix5}${middle5}${suffix5}<br><br>`,

    whisper : ChatMessage.getWhisperRecipients("GM")
});