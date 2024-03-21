// Shop Name Generator by CantFindGeorge

const prefixTable = await fromUuid('Compendium.world.roll-tables.RollTable.dsNA2INfgBwMNbiO');
const suffixTable = await fromUuid('Compendium.world.roll-tables.RollTable.NK0R2kjK5OqPPOyI');


// Roll Name 1
const prefix1Draw = await prefixTable.draw({displayChat: false});
const prefix1 = prefix1Draw.results[0].getChatText();

const suffix1Draw = await suffixTable.draw({displayChat: false});
const suffix1 = suffix1Draw.results[0].getChatText();


// Roll Name 2
const prefix2Draw = await prefixTable.draw({displayChat: false});
const prefix2 = prefix2Draw.results[0].getChatText();

const suffix2Draw = await suffixTable.draw({displayChat: false});
const suffix2 = suffix2Draw.results[0].getChatText();


// Roll Name 3
const prefix3Draw = await prefixTable.draw({displayChat: false});
const prefix3 = prefix3Draw.results[0].getChatText();

const suffix3Draw = await suffixTable.draw({displayChat: false});
const suffix3 = suffix3Draw.results[0].getChatText();


// Roll Name 4
const prefix4Draw = await prefixTable.draw({displayChat: false});
const prefix4 = prefix4Draw.results[0].getChatText();

const suffix4Draw = await suffixTable.draw({displayChat: false});
const suffix4 = suffix4Draw.results[0].getChatText();


// Roll Name 5
const prefix5Draw = await prefixTable.draw({displayChat: false});
const prefix5 = prefix5Draw.results[0].getChatText();

const suffix5Draw = await suffixTable.draw({displayChat: false});
const suffix5 = suffix5Draw.results[0].getChatText();


// Create Chat Msg
await ChatMessage.create({
    content: `<br><h2>Random Shop Names</h2><br>
    • ${prefix1}${suffix1}<br>
    • ${prefix2}${suffix2}<br>
    • ${prefix3}${suffix3}<br>
    • ${prefix4}${suffix4}<br>
    • ${prefix5}${suffix5}<br>
    <br>`,

    whisper : ChatMessage.getWhisperRecipients("GM")
});