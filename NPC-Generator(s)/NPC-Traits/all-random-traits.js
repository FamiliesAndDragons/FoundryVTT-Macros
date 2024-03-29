


// Assigns Tables
const breathTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.SRdtdvwdMHWdCPIQ');
const cadTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.IBx5KNBnddjc2Zzx');
const endTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.ZXYIKE3PRVy4oPKs');
const envTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.gOmsPu0cQFTfC4ui');
const genderTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.W6fQr3m0jWtZxIOJ');
const habbTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.TzgFg9u0ICIifI5h');
const presTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.ahmECBg5GuqUz1x4');
const raceTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.U0tcNLSUVy9Xv1we');
const tnaTable = await fromUuid('Compendium.world.gm-roll-tables.RollTable.mczJQjmjWpsddRoS');

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


// Roll Breath Control
const bDraw = await breathTable.draw({displayChat: false});
const breath = bDraw.results[0].getChatText();

// Roll Cadence
const cDraw = await cadTable.draw({displayChat: false});
const cadence = cDraw.results[0].getChatText();

// Roll Enunciation & Diction
const endDraw = await endTable.draw({displayChat: false});
const eNd = endDraw.results[0].getChatText();

// Roll Enviornment
const envDraw = await envTable.draw({displayChat: false});
const environment = envDraw.results[0].getChatText();

// Roll Gender
const genderDraw = await genderTable.draw({displayChat: false});
const gender = genderDraw.results[0].getChatText();

// Roll Habbits
const hDraw = await habbTable.draw({displayChat: false});
const habbits = hDraw.results[0].getChatText();

// Roll Presentation
const pDraw = await presTable.draw({displayChat: false});
const presentation = pDraw.results[0].getChatText();

// Roll Race
const rDraw = await raceTable.draw({displayChat: false});
const race = rDraw.results[0].text;

// Roll Tone & Accent
const tnaDraw = await tnaTable.draw({displayChat: false});
const tna = tnaDraw.results[0].getChatText();


// Create a Table Header
const header = `
    <div class="margins">
        <h2>Random NPC Traits</h2>
        <table>
            <thead>
                <th>TraitRandom Trap</th>
                <th>Result</th>
            </thead>
`;



// Create a popup to display all tables to GM
new Dialog({
    title: "Random NPC Traits",
    content: style + header + `
        <tr>
            <td class="center"><b>Gender:</b></td>
            <td class="center">${gender}</td>
        </tr>
        <tr>
            <td class="center"><b>Race:</b></td>
            <td class="center">${race}</td>
        </tr>
        <tr>
            <td class="center"><b>Breath Control:</b></td>
            <td class="center">${breath}</td>
        </tr>
        <tr>
            <td class="center"><b>Cadence:</b></td>
            <td class="center">${cadence}</td>
        </tr>
        <tr>
            <td class="center"><b>Eninciation & Diction:</b></td>
            <td class="center">${eNd}</td>
        </tr>
        <tr>
            <td class="center"><b>Tone & Accent:</b></td>
            <td class="center">${tna}</td>
        </tr>
        <tr>
            <td class="center"><b>Presentation:</b></td>
            <td class="center">${presentation}</td>
        </tr>
        <tr>
            <td class="center"><b>Habbits:</b></td>
            <td class="center">${habbits}</td>
        </tr>
        <tr>
            <td class="center"><b>Enviornment:</b></td>
            <td class="center">${environment}</td>
        </tr>
        </table>
        </div>
        <br>`,

    buttons: {cls: {icon: "<i class='fas fa-check'></i>", label: "Close"}}

}, {id: "center"}).render(true, {hight:800, width: 600});