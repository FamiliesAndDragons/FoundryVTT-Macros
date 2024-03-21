// Random Sentient Magic Item
// Created By twitch.tv/CantFindGeorge

// Orginal "I know a guy" concept: 

// Assign Table Values
const locationTable = await fromUuid('');
const plotHookTable = await fromUuid('');



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
        <h2>I know a guy...</h2>
        <br>
        <ol>
`;

//Create arrays to store generated things
let iKnowAGuy = [];

// Create a loop to generate 5 "I know a guy" statements
for(let i=0;i<5;i++){
    
    // Roll Location
    const locationDraw = await locationTable.draw({displayChat: false});
    const generatedLocation = locationDraw.results[0].getChatText();

    // Roll Plot Hook
    const plotHookDraw = await plotHookTable.draw({displayChat: false});
    const generatedPlotHook = plotHookDraw.results[0].getChatText();
    
    // Creates ordered list item then saves html in iKnowAGuy array
    generatedHTML = `<li>Located <span class="keyinfo">${generatedLocation}</span>, who <span class="keyinfo">${generatedPlotHook}</span>.</li>`;
    iKnowAGuy.push(generatedHTML);
};

// Create Public Chat Msg
await ChatMessage.create({
    content: style + header + iKnowAGuy[0] +`<br>`+ iKnowAGuy[1] +`<br>`+ iKnowAGuy[2] +`<br>`+ iKnowAGuy[3] +`<br>`+ iKnowAGuy[4] + `</ol><br>`,
});
