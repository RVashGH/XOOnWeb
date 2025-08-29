const playMainButton = document.getElementById('play-btn');
const startStartButton = document.getElementById('start-new-start');
const skinsStartButton = document.getElementById('skins-start');
const backStartButton = document.getElementById('back-start');
const backSkinsButton = document.getElementById('back-skins');
const confirmVictoryButton = document.getElementById('confirm-btn-win');

const mainMenu = document.getElementById('main-menu');
const startMenu = document.getElementById('start-menu');
const gameMenu = document.getElementById('game');
const victoryPopup = document.getElementById('victory-screen');
const skinsMenu = document.getElementById('skin-menu');

const winImg = document.getElementById('win-img');

const cell1 = document.getElementById('cell1');
const cell2 = document.getElementById('cell2');
const cell3 = document.getElementById('cell3');
const cell4 = document.getElementById('cell4');
const cell5 = document.getElementById('cell5');
const cell6 = document.getElementById('cell6');
const cell7 = document.getElementById('cell7');
const cell8 = document.getElementById('cell8');
const cell9 = document.getElementById('cell9');

const cell1p = document.getElementById('cell1p');
const cell2p = document.getElementById('cell2p');
const cell3p = document.getElementById('cell3p');
const cell4p = document.getElementById('cell4p');
const cell5p = document.getElementById('cell5p');
const cell6p = document.getElementById('cell6p');
const cell7p = document.getElementById('cell7p');
const cell8p = document.getElementById('cell8p');
const cell9p = document.getElementById('cell9p');

const skin1 = document.getElementById('skin1');
const skin2 = document.getElementById('skin2');
const skin3 = document.getElementById('skin3');
const skin4 = document.getElementById('skin4');

const turnImg = document.getElementById('turn-img');
const winSound = document.getElementById('win-sound');
const skinSelector = document.getElementById('skin-select');
const victorySign = document.getElementById('victory-sign');


// const test = document.getElementById('test');
// console.log(winSound);
let state = "x";
let skin = 1;
let gameResult = "";

// test.addEventListener('click', function() {
//     winSound.currentTime = 0;
//     winSound.play();
// });

const winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

// * MAIN: PLAY BTN
playMainButton.addEventListener('click', function() {
    mainMenu.style.display = "none";
    startMenu.style.display = "flex";
});

// * START: START A NEW GAME
startStartButton.addEventListener('click', function() {
    startMenu.style.display = "none";
    gameMenu.style.display = "flex";
    turnImg.src = `x${skin}.png`;
});

// * START: SKINS
skinsStartButton.addEventListener('click', function(){
    startMenu.style.display = "none";
    skinsMenu.style.display = "flex";

    // if (skin == 1) {
    //     skin1.style.border = "border: 5px solid #00ae00;";
    //     skin3.style.border = "border: 5px solid #00ae00;";
    // } else if (skin == 2) {
    //     skin2.style.border = "border: 5px solid #00ae00;";
    //     skin4.style.border = "border: 5px solid #00ae00;";
    // };

    switch(skinSelector.value) {
        case "1":
            skin = "1";
            console.log("skin 1");
            break;
        case "2":
            skin = "2";
            console.log("skin 2");
            break;
        default:
            return;
    }
});

backSkinsButton.addEventListener('click', function() {
    skin = skinSelector.value;
    console.log("skin 2");
    skinsMenu.style.display = "none";
    startMenu.style.display = "flex";
})

// skin1.addEventListener('click', function() {
//     if (skin == 2) {
//         skin2.style.border = "border: 5px solid #00ae00;";
//         skin4.style.border = "border: 5px solid #00ae00;";

//         skin1.style.border = "border: 5px solid #757575;";
//         skin3.style.border = "border: 5px solid #757575;";
//         skin = 2;
//     }
// });

// skin4.addEventListener('click', function() {
//     if (skin == 1) {
//         skin1.style.border = "border: 5px solid #00ae00;";
//         skin3.style.border = "border: 5px solid #00ae00;";

//         skin2.style.border = "border: 5px solid #757575;";
//         skin4.style.border = "border: 5px solid #757575;";
//         skin = 1;
//     }
// });

// * START: BACK TO MAIN
backStartButton.addEventListener('click', function() {
    startMenu.style.display = "none";
    mainMenu.style.display = "flex";
    turnImg.src = `x${skin}.png`;
});

// * VICTORY: CONFIRM
confirmVictoryButton.addEventListener('click', function() {
    gameMenu.style.display = "none";
    victoryPopup.style.display = "none";
    startMenu.style.display = "flex";
})

function checkWin() {
    gameResult = "";
    for (let combo of winningCombos) {
        const [a, b, c] = combo;

        const cellA = document.getElementById("cell" + a + "p").innerHTML;
        const cellB = document.getElementById("cell" + b + "p").innerHTML;
        const cellC = document.getElementById("cell" + c + "p").innerHTML;

        if (cellA !== "" && cellA === cellB && cellA === cellC) {
            console.log("ура победа", cellA.includes(`x${skin}.png`) ? "X" : "O");
            return true;
            
        }
    }

    let allFilled = true;
    for (let i = 1; i <= 9; i++) {
        if (document.getElementById("cell" + i + "p").innerHTML === "") {
            allFilled = false;
            break;
        }
    }

    if (allFilled) {
        gameResult = "draw";
        return "draw";
    }

    return null;

}

function step(number) {
    cellNumber = "cell" + number;
    cellParagraph = "cell" + number + "p";
    // console.log(cellNumber);
    // console.log(cellParagraph);

    const cellParagraph2 = document.getElementById(cellParagraph);
    // console.log(cellParagraph2);
    if (cellParagraph2.innerHTML == "") {
        cellParagraph2.innerHTML = `<img src="${state}${skin}.png" alt="" id="cell-img">`;
        if (state == "x") {
            state = "o";
            turnImg.src = `o${skin}.png`
            

        } else {
            state = "x";
            turnImg.src = `x${skin}.png`
        }
    }
    if (checkWin()) {
        if (state == "x") {
            console.log("выиграл: o");
            winImg.src = `o${skin}.png`
        } else {
            console.log("выиграл: X");
            winImg.src = `x${skin}.png`
        }
        // console.log(winSound);
        
        victoryPopup.style.display = "flex";
        if (gameResult == "draw") {
            victorySign.src = "tie.png";
            winImg.src = "tie_logo.png"
        } else {
            winSound.currentTime = 2;
            winSound.play();
            victorySign.src = "victory.png";
        }
        
        state = "x";
        cell1p.innerHTML = ``;
        cell2p.innerHTML = ``;
        cell3p.innerHTML = ``;
        cell4p.innerHTML = ``;
        cell5p.innerHTML = ``;
        cell6p.innerHTML = ``;
        cell7p.innerHTML = ``;
        cell8p.innerHTML = ``;
        cell9p.innerHTML = ``;
        turnImg.src = `x${skin}.png`
    }
}

cell1.addEventListener('click', () => step(1));
cell2.addEventListener('click', () => step(2));
cell3.addEventListener('click', () => step(3));
cell4.addEventListener('click', () => step(4));
cell5.addEventListener('click', () => step(5));
cell6.addEventListener('click', () => step(6));
cell7.addEventListener('click', () => step(7));
cell8.addEventListener('click', () => step(8));
cell9.addEventListener('click', () => step(9));