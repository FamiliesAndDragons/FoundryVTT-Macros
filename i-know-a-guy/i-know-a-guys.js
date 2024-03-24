// I know a guy house rule
// Created By twitch.tv/CantFindGeorge

// Orginal "I know a guy" concept by David Nett: https://threadreaderapp.com/thread/978657181229711360.html

// Assign Table Values
const plotHookTable = await fromUuid('Compendium.world.pc-roll-tables.RollTable.mvOy2lhG9us3l3e7');

// CSS Styling 
const style = `
<style>
    .center {
        text-align: center;
    }

    .margins {
        margin-left: 5px;
        margin-right: 5px;
    }
    .keyinfo {
        text-decoration: underline;
        font-weight: bold;
    }

</style>`;

// Create a Header
const header = `
    <div class="margins">
        <h2>I know a guy who...</h2>
        <br>
`;

//Create arrays to store generated things
let aGuy = [];

// Create a loop to generate 5 "I know a guy" statements
for(let i=0;i<5;i++){

    // Roll Plot Hook
    const plotHookDraw = await plotHookTable.draw({displayChat: false});
    const generatedPlotHook = plotHookDraw.results[0].getChatText();

    aGuy.push(generatedPlotHook);
};

// Create Public Chat Msg
await ChatMessage.create({
    content: style + header + `
    • ${aGuy[0]} <br>
    • ${aGuy[1]} <br>
    • ${aGuy[2]} <br>
    • ${aGuy[3]} <br>
    • ${aGuy[4]} <br></div>`,
});
