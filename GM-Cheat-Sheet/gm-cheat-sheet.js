// Orginal Credit goes to @Zhell #
// Modified By twitch.tv/CantFindGeorge



// Folder that has party members inside of it

const folderId = "IK76XHM40GUShtw8";



// Table Styling 
const style = `
<style>
    .player-stats {
        text-align: center;
    }

    .margins {
        margin-left: 5px;
        margin-right: 5px;
    }
    
    .expertiseTrue {
        color: #FF7400;
        font-weight: bold;
        text-align: center;

    }

    .proficientTrue {
      color: #f67de5;
      font-weight: bold;
      text-align: center;
    }

    .normalTrue {
      font-weight: normal;
      text-align: center;
    }

</style>`;

// Gets the info below for each player and puts it in a table
// hp, ac, dc, passive perception/insight, and gold

const content = game.folders.get(folderId).contents.reduce((acc, actor) => {
    const hp = actor.system.attributes.hp;
    const sk = actor.system.skills;
    const dc = actor.system.attributes.spelldc;
    const ac = actor.system.attributes.ac;
    const gold = actor.system.currency.gp;
    return acc + `
    <tr>
      <td class="player-stats"><em>${actor.name.split(" ")[0]}</em></td>
      <td class="player-stats">${hp.value}/${hp.max}</td>
      <td class="player-stats">${ac.value}</td>
      <td class="player-stats">${dc}</td>
      <td class="player-stats">${sk.prc.passive}</td>
      <td class="player-stats">${sk.ins.passive}</td>
      <td class="player-stats">${gold}</td> 
    </tr>`;
  }, `
  <h1>PC Cheat Sheet</h1>
  <br>
  <div class="margins">
  <h2>Overview</h2>
  <table>
    <thead>
      <tr>
          <th>Name</th>
          <th>HP</th>
          <th>AC</th>
          <th>DC</th>
          <th>Prc</th>
          <th>Ins</th>
          <th>GP</th>
      </tr>
      
      <tr>
        <th class="player-stats"><i class="fas fa-user"></i></th>
        <th class="player-stats"><i class="fa-solid fa-heart-pulse"></i></th>
        <th class="player-stats"><i class="fas fa-shield-alt"></i></th>
        <th class="player-stats"><i class="fa-solid fa-wand-sparkles"></i></th>
        <th class="player-stats"><i class="fas fa-eye"></i></th>
        <th class="player-stats"><i class="fa-solid fa-comment-dots"></i></th>
        <th class="player-stats"><i class="fa-solid fa-dollar-sign"></i></th>
      </tr>
    </thead>
  <tbody>`) + "</tbody></table></div><br>";



// Gets the info below for each player and puts it in a table
// Mods for str, dex, con, int, wis, cha

  const content2 = game.folders.get(folderId).contents.reduce((acc, actor) => {
    const profBonus =  actor.system.attributes.prof;
    const hp = actor.system.attributes.hp;
    const ab = actor.system.abilities;
    return acc + `
    <tr>
      <td class="player-stats"><em>${actor.name.split(" ")[0]}</em></td>
      <td class="player-stats">+${profBonus}</td>
      <td class="player-stats">${ab.str.mod}</td>
      <td class="player-stats">${ab.dex.mod}</td>
      <td class="player-stats">${ab.con.mod}</td>
      <td class="player-stats">${ab.int.mod}</td>
      <td class="player-stats">${ab.wis.mod}</td>
      <td class="player-stats">${ab.cha.mod}</td>
    </tr>`;
  }, `
  <div class="margins">
  <h2>Abilities</h2>
  <table>
    <thead>
      <tr>
          <th>Name</th>
          <th>Prof</th>
          <th>Str</th>
          <th>Dex</th>
          <th>Con</th>
          <th>Int</th>
          <th>Wis</th>
          <th>Cha</th>
      </tr>
  
      <tr>
        <th class="player-stats"><i class="fas fa-user"></i></th>
        <th class="player-stats"><i class="fa-solid fa-dice-d20"></i></th>
        <th class="player-stats"><i class="fa-solid fa-hand-fist"></i></th>
        <th class="player-stats"><i class="fa-solid fa-person-walking"></i></th>
        <th class="player-stats"><i class="fa-solid fa-lungs"></i></th>
        <th class="player-stats"><i class="fa-regular fa-lightbulb"></i></th>
        <th class="player-stats"><i class="fa-solid fa-brain"></i></th>
        <th class="player-stats"><i class="fa-solid fa-bullhorn"></i></th>
  
      </tr>
    </thead>
  <tbody>`) + "</tbody></table></div><br>";





const content3 = game.folders.get(folderId).contents.reduce((acc, actor) => {
  const sk = actor.system.skills;

  //Loop to cheack each skills prof status and assign a css class
  var getProfStatus = (skill) => {
    let profvalue = sk[skill].proficient;
    if (profvalue == 2) {
      return "expertiseTrue";
        } else if (profvalue == 1) {
        return "proficientTrue";
      } else {
        return "normalTrue";
      }

    }

// Table to show all bonuses for a character's skills
  return acc + `
  <tr>
    <td class="normalTrue"><em>${actor.name.split(" ")[0]}</em></td>
    <td class="${getProfStatus("acr")}">${sk.acr.mod} </td>
    <td class="${getProfStatus("ani")}">${sk.ani.mod} </td>
    <td class="${getProfStatus("arc")}">${sk.arc.mod} </td>
    <td class="${getProfStatus("ath")}">${sk.ath.mod} </td>
    <td class="${getProfStatus("dec")}">${sk.dec.mod} </td>
    <td class="${getProfStatus("his")}">${sk.his.mod} </td>
    <td class="${getProfStatus("ins")}">${sk.ins.mod} </td>
    <td class="${getProfStatus("itm")}">${sk.itm.mod} </td>
    <td class="${getProfStatus("inv")}">${sk.inv.mod} </td>
    <td class="${getProfStatus("med")}">${sk.med.mod} </td>
    <td class="${getProfStatus("nat")}">${sk.nat.mod} </td>
    <td class="${getProfStatus("prc")}">${sk.prc.mod} </td>
    <td class="${getProfStatus("prf")}">${sk.prf.mod} </td>
    <td class="${getProfStatus("per")}">${sk.per.mod} </td>
    <td class="${getProfStatus("rel")}">${sk.rel.mod} </td>
    <td class="${getProfStatus("slt")}">${sk.slt.mod} </td>
    <td class="${getProfStatus("ste")}">${sk.ste.mod} </td>
    <td class="${getProfStatus("sur")}">${sk.sur.mod} </td>
  </tr>`; 
}, `
<div class="margins">
<h2>Skills</h2> 
<small>Color Key: None, </small><small class="proficientTrue">Proficient, </small><small class="expertiseTrue">Expertise</small>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Acr</th>
      <th>Ani</th>
      <th>Arc</th>
      <th>Ath</th>
      <th>Dec</th>
      <th>His</th>
      <th>Ins</th>
      <th>Itm</th>
      <th>Inv</th>
      <th>Med</th>
      <th>Nat</th>
      <th>Prc</th>
      <th>Prf</th>
      <th>Per</th>
      <th>Rel</th>
      <th>Slt</th>
      <th>Ste</th>
      <th>Sur</th>
    </tr>
    
    <tr>
      <th class="player-stats"><i class="fas fa-user"></i></th>
      <th class="player-stats"><i class="fa-solid fa-person-running"></i></th>
      <th class="player-stats"><i class="fa-solid fa-hippo"></i></th>
      <th class="player-stats"><i class="fa-solid fa-hat-wizard"></i></th>
      <th class="player-stats"><i class="fa-solid fa-dumbbell"></i></th>
      <th class="player-stats"><i class="fa-solid fa-user-secret"></i></th>
      <th class="player-stats"><i class="fa-solid fa-landmark"></i></th>
      <th class="player-stats"><i class="fa-solid fa-comment-dots"></i></th>
      <th class="player-stats"><i class="fa-solid fa-exclamation"></i></th>
      <th class="player-stats"><i class="fa-solid fa-magnifying-glass"></i></th>
      <th class="player-stats"><i class="fa-solid fa-prescription"></i></th>
      <th class="player-stats"><i class="fa-solid fa-leaf"></i></th>
      <th class="player-stats"><i class="fas fa-eye"></i></th>
      <th class="player-stats"><i class="fa-solid fa-music"></i></th>
      <th class="player-stats"><i class="fa-solid fa-champagne-glasses"></i></th>
      <th class="player-stats"><i class="fa-solid fa-cross"></i></th>
      <th class="player-stats"><i class="fa-solid fa-handcuffs"></i></th>
      <th class="player-stats"><i class="fa-solid fa-mask"></i></th>
      <th class="player-stats"><i class="fa-solid fa-person-hiking"></i></th>
    </tr>
  </thead>
<tbody>`) + "</tbody></table></div><br>";


// Create a popup to display all tables to GM
new Dialog({
  title: "Player Stats",
 content: style + content + content2 + content3,
  buttons: {cls: {icon: "<i class='fas fa-check'></i>", label: "Close"}}
}, {id: "player-stats"}).render(true, {hight:1010, width: 1000});