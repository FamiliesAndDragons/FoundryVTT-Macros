// Create a Random Trap
// Created By twitch.tv/CantFindGeorge

// Assigns table values
trapTypeTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.hKNG0BbJ8lmpuFk4');
trapFlavorTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.FBz3s3phe5kflM2k');
trapTriggerTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.2RkZRvqr1MSw00BU');


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
</style>`;



// Create a Table Header
const header = `
    <div class="margins">
        <h2>5 Random Traps</h2>
        <table>
            <thead>
                <th>Random Trap</th>
                <th>Type</th>
                <th>Flavor</th>
                <th>Trigger</th>
            </thead>
`;

// Creates a loop to create 5 traps in HTML format for chat msg
let n = 1
let finalTrap = [];
for(let i=0;i<5;i++){

    const table1Draw = await trapTypeTable.draw({displayChat: false});
    const trapsTypes = table1Draw.results[0].getChatText();

    // Roll Trap Flavor
    const table2Draw = await trapFlavorTable.draw({displayChat: false});
    const trapsFlavors = table2Draw.results[0].getChatText();

    // Roll Trap Trigger
    const table3Draw = await trapTriggerTable.draw({displayChat: false});
    const trapsTriggers = table3Draw.results[0].getChatText();


    // creates tr & td then saves html in finalTrap array
    generatedHTML = `
        <tr>
            <td class="center"><b>Trap ${n}</b></td>
            <td class="center">${trapsTypes}</td>
            <td class="center">${trapsFlavors}</td>
            <td class="center">${trapsTriggers}</td>
        </tr>
    `;
    n++;
    finalTrap.push(generatedHTML);

};


         
// Create a popup to display all tables to GM
new Dialog({
    title: "5 Random Traps",
   content: style + header + 
   finalTrap[0] + 
   finalTrap[1] + 
   finalTrap[2] + 
   finalTrap[3] + 
   finalTrap[4] + 
   `</table></div><br>`,

    buttons: {cls: {icon: "<i class='fas fa-check'></i>", label: "Close"}}

}, {id: "center"}).render(true, {hight:800, width: 600});