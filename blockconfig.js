let blocks = [];
let block = [];
let blockArray = [];
let index = 0;
let finder = 0;
let moves = 0;
let text;
let win = false;

function fill() {
    for(let i = 0; i < blockArray.length; i++) {
        if(blocks[blockArray[i]].alpha === 1){
            blocks[blockArray[i]].setAlpha(.4)
        }else {
            blocks[blockArray[i]].setAlpha(1)
        }
    }
}

function checkWin(array) {
    for(let blockCheck = 0; blockCheck < blocks.length; blockCheck++){
        if(blocks[blockCheck].alpha === 1){
            win = false;
            break
        }else{
            win = true;
        }
    }
    return win;
}

const config = {
    type: Phaser.AUTO,
    width: 415,
    height: 575,
    backgroundColor: "#000000",
    scene: [ BlockPuzzleStart, BlockPuzzle ]
};

const game = new Phaser.Game(config);