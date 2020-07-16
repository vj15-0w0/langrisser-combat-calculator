var selectedParty = 'Chosen';
var selectedChar = 'Riana';
var selectedSkill = 'freeze-strike', selectedSoldier = 'miko';

function displaySkill(charName){
    var skills = document.getElementsByClassName(charName);
    for(var i=0; i<skills.length; i++){
        if(skills[i].classList.contains('skill')){
            skills[i].style = '';
        }
    }
};

function hideSkill(){
    var skills = document.getElementsByClassName('skill');
    for(var i=0; i<skills.length; i++){
        skills[i].style = 'display: none;';
    }
};

function selectSkill(skillName){
    // de-select old skill
    if(document.getElementById(selectedSkill).classList.contains('selected')){
        document.getElementById(selectedSkill).classList.remove('selected');
    }
    // select new skill
    document.getElementById(skillName).classList.add('selected');
    selectedSkill = skillName;
};

function displaySoldier(charName){
    var soldiers = document.getElementsByClassName(charName);
    for(var i=0; i<soldiers.length; i++){
        if(soldiers[i].classList.contains('soldier')){
            soldiers[i].style = '';
        }
    }
};

function hideSoldier(){
    var soldiers = document.getElementsByClassName('soldier');
    for(var i=0; i<soldiers.length; i++){
        soldiers[i].style = 'display: none;';
    }
};

function selectSoldier(soldierName){
    // de-select old soldier
    if(document.getElementById(selectedSoldier).classList.contains('selected')){
        document.getElementById(selectedSoldier).classList.remove('selected');
    }
    // select new soldier
    document.getElementById(soldierName).classList.add('selected');
    selectedSoldier = soldierName;
};

function displayChar(partyName){
    var chars = document.getElementsByClassName(partyName);
    for(var i=0; i<chars.length; i++){
        chars[i].style = '';
    }
};

function hideChar(){
    var chars = document.getElementsByClassName('character');
    for(var i=0; i<chars.length; i++){
        chars[i].style = 'display: none;'
    }
};

function selectChar(charName){
    // de-select old char
    if(document.getElementById(selectedChar).classList.contains('selected')){
        document.getElementById(selectedChar).classList.remove('selected');
    }
    // hide all soldiers and display soldiers in char
    hideSoldier();
    displaySoldier(charName);
    // hide all skills and display skills in char
    hideSkill();
    displaySkill(charName);
    // select new char & first skill / soldier
    document.getElementById(charName).classList.add('selected');
    selectedChar = charName;
    selectSkill(document.getElementsByClassName(charName+' skill')[0].id);
    selectSoldier(document.getElementsByClassName(charName+' soldier')[0].id);
};

function selectParty(partyName){
    // de-select old party
    if(document.getElementById(selectedParty).classList.contains('selected')){
        document.getElementById(selectedParty).classList.remove('selected');
    }
    // hide all chars and display all chars in party
    hideChar();
    displayChar(partyName);
    // select new party & first char
    document.getElementById(partyName).classList.add('selected');
    selectedParty = partyName;
    selectChar(document.getElementsByClassName(partyName)[0].id);
};

