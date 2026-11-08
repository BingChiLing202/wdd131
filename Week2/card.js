const aCharacter = {
    Class: "Swamp Beast Diplomat",
    Level: 0,
    Health: 100,
}

document.querySelector('#levelup').addEventListener('click',(e) => {
    aCharacter.Level += 1;
    console.log(aCharacter.Level)
    renderLevelSections();
})

function renderLevelSections(){
    let level = document.querySelector('#level');
    level.textContent = "level: " + aCharacter.Level;
}

document.querySelector('#attack').addEventListener('click', (e) => {
    aCharacter.Health -= 20;
    console.log(aCharacter.Health);
    renderAttackSections();
    ziJie();
})

function renderAttackSections(){
    let attack = document.querySelector('#health');
    attack.textContent = "Health: " + aCharacter.Health;
}

function ziJie(){
    if(aCharacter.Health == 0){
        alert('The character is died')
    }
}