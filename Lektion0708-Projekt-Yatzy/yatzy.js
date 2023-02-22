// Yatzy mini projekt i DIP - Kasper Bergholdt Bryder

let dice1 = {face: 1, locked: false, pic: "Dice_1.png"};
let dice2 = {face: 2, locked: false, pic: "Dice_2.png"};
let dice3 = {face: 3, locked: false, pic: "Dice_3.png"};
let dice4 = {face: 4, locked: false, pic: "Dice_4.png"};
let dice5 = {face: 5, locked: false, pic: "Dice_5.png"};

const diceList = [dice1,dice2,dice3,dice4,dice5];
let diePicture = ["Dice_1.png","Dice_2.png","Dice_3.png","Dice_4.png","Dice_5.png","Dice_6.png"];
let turn = 0;
let score = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let counter = 0;


// Ruller terningerne og sætter billeder tilsvarende de tegn der vises
function rollDice(diceList) {
    for (let die of diceList) {
        if (die.locked === false) {
            die.face = Math.floor(Math.random() * 6 + 1);

            switch (die.face) {
                case 1:
                    die.pic = diePicture[0];
                    break;
                case 2:
                    die.pic = diePicture[1];
                    break;
                case 3:
                    die.pic = diePicture[2];
                    break;
                case 4:
                    die.pic = diePicture[3];
                    break;
                case 5:
                    die.pic = diePicture[4];
                    break;
                case 6:
                    die.pic = diePicture[5];
                    break;
            }
        }
    }
}

function updateGame() {
    if (turn < 3) {
        rollDice(diceList);
        turn++;
        let dices = document.body.querySelectorAll("td");
        let t = document.getElementById("turn");
        t.innerText = "Turn " + turn;
        for (let i = 0; i < dices.length; i++) {
            document.body.querySelector("#dice" + (i + 1)).firstChild.src = diceList[i].pic;
        }
    }
    updateScoreBoard();
    updateSum();
}

function updateScoreBoard() {
    /**
     * Funktion som returner frekvensen af terningsværdierne hvor index er hovedet på terningen
     * @returns {Array}
     */
    function frequency() {
        let freq = [0,0,0,0,0,0,0];
        for (let e of diceList) {
            freq[e.face]++;
        }
        return freq;
    }
    // Same value points
    function sameValuePoints(value) {
        return frequency()[value]*value;
    }
    // One pair
    function onePair() {
        let arr = frequency();
        for (let i = 6; i > 0; i--) {
            if (arr[i] >= 2) {
                return 2 * i;
            }
        }
        return 0;
    }
    // Two pair
    function twoPairs() {
        let pair = 0;
        let arr = frequency();
        for (let i = 6; i > 0; i--) {
            if (arr[i] >= 2 && pair === 0) {
                pair = 2 * i;
            } else if (arr[i] >= 2) {
                return pair + 2 * i;
            }
        }
        return 0;
    }
    // Three same
    function threeSame() {
        let arr = frequency();
        for (let i = 6; i > 0; i--) {
            if (arr[i] >= 3) {
                return 3 * i;
            }
        }
        return 0;
    }
    // Four same
    function fourSame() {
        let arr = frequency();
        for (let i = 6; i > 0; i--) {
            if (arr[i] >= 4) {
                return 4 * i;
            }
        }
        return 0;
    }
    // Full house
    function fullHouse() {
        let pair = 0;
        let three = 0;
        let arr = frequency();
        for (let i = 6; i > 0; i--) {
            if (arr[i] >= 3 && three === 0) {
                three = 3 * i;
            } else if (arr[i] >= 2 && pair === 0) {
                pair = 2 * i;
            }
        }
        if (three !== 0 && pair !== 0) {
            return pair + three;
        }
        return 0;
    }
    // Small straight
    function smallStraight() {
        let arr = frequency();
        for (let i = 1; i < 6; i++) {
            if (arr[i] !== 1) {
                return 0;
            }
        }
        return 15;
    }
    // Large straight
    function largeStraight() {
        let arr = frequency();
        for (let i = 2; i < 7; i++) {
            if (arr[i] !== 1) {
                return 0;
            }
        }
        return 20;
    }
    // Chance
    function chance() {
        let points = 0;
        for (let e of diceList) {
            points += e.face;
        }
        return points;
    }
    // Yatzy
    function yatzy() {
        let arr = frequency();
        for (let i = 6; i > 0; i--) {
            if (arr[i] >= 5) {
                return 50;
            }
        }
        return 0;
    }

    // Score
    for (let i = 0; i < 6; i++) {
        score[i] = sameValuePoints(i + 1);
    }
    score[6] = onePair();
    score[7] = twoPairs();
    score[8] = threeSame();
    score[9] = fourSame();
    score[10] = fullHouse();
    score[11] = smallStraight();
    score[12] = largeStraight();
    score[13] = chance();
    score[14] = yatzy();

    for (let i = 0; i < scoreList.length; i++) {
        if (!scoreList[i].disabled) {
            scoreList[i].value = score[i];
        }
    }
}

function reset() {
    for (let i = 0; i < scoreList.length; i++) {
        if (!scoreList[i].disabled) {
            scoreList[i].value = 0;
        }  
    }
}

function updateSum() {
    let sum = 0;
    let bonus = 0;
    for (let i = 0; i < 6; i++) {
        if (scoreList[i].disabled) {
            sum += parseInt(scoreList[i].value);
        }
    }
    let s = document.getElementById("sum");
    let b = document.getElementById("bonus");
    s.innerText = sum;
    if (sum >= 63) {
        bonus = 50;
    } 
    b.innerText = bonus;
    
    let totalSum = 0;
    for (let i = 0; i < scoreList.length; i++) {
        if (scoreList[i].disabled) {
            totalSum += parseInt(scoreList[i].value);
        }
    }
    let total = document.getElementById("total");
    total.innerText = totalSum + bonus;
}

let scoreList = [];
let checkPad = [];

onload = () => {
    let knap = document.getElementById("roll");
    knap.onclick = updateGame;
    let inputs = document.body.querySelectorAll("input");
    inputs.forEach(e => scoreList.push(e));
    for (let i = 0; i < 5; i++) {
        scoreList.shift();
        checkPad.push(inputs[i]);
    }
    for (let i = 0; i < checkPad.length; i++) {
        checkPad[i].onclick = () => {
            diceList[i].locked = !diceList[i].locked;
        };
    }
    for (let i = 0; i < scoreList.length; i++) {
        scoreList[i].onclick = () => {
            if (turn !== 0) {
                scoreList[i].disabled = true;
                turn = 0;
                let t = document.getElementById("turn");
                t.innerText = "Turn " + turn;
                for (let e of checkPad) {
                    e.disabled = false;
                    e.checked = false;
                }
                for (let e of diceList) {
                    e.locked = false;
                }
                counter++;
                updateSum();
                reset();
            } else {
                alert("Du kan ikke vælge felt før du har rullet!");
                reset();
            }
            if (counter === 15) {
                alert("Nyt spil");
                for (let e of scoreList) {
                    e.disabled = false;
                    e.value = 0;
                }
                updateSum();
            }
        }
    }
}