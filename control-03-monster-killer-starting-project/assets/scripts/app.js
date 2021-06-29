let initialTotalHealth = 100;
const HUMAN_ATTACK_POWER = 10;
const MONSTER_ATTACK_POWER = 15;
const STRONG_HUMAN_ATTACK_POWER = 17;
const HEAL_VALUE = 20;
initialTotalHealth = prompt("select the maximum value", "100");

let humanCurrentHealth = parseInt(initialTotalHealth);
let monsterCurrentHealth = parseInt(initialTotalHealth);

adjustHealthBars(initialTotalHealth);

attackBtn.addEventListener('click', attachHandler);
strongAttackBtn.addEventListener('click', strongAttachHandler);
healBtn.addEventListener('click', healHumanHandler);

function attachHandler(){
    attack(HUMAN_ATTACK_POWER);
}

function strongAttachHandler()
{
    attack(STRONG_HUMAN_ATTACK_POWER);
}

function attack(attackValue){
    const monsterDamage = dealMonsterDamage(attackValue);
    monsterCurrentHealth -= monsterDamage;
    endRound();
}

function endRound(){
    const humanDamage = dealPlayerDamage(MONSTER_ATTACK_POWER);
    humanCurrentHealth -= humanDamage;

    if(monsterCurrentHealth <= 0 && humanCurrentHealth > 0){
        alert("You Won");
    }else if(humanCurrentHealth <= 0 && monsterCurrentHealth > 0){
        alert("You Lost");
    }
    else if(humanCurrentHealth <= 0 && monsterCurrentHealth <= 0){
        alert("Its a draw");
    }
}

function healHumanHandler(){
    increasePlayerHealth(HEAL_VALUE);
    humanCurrentHealth += HEAL_VALUE;
    endRound();
}