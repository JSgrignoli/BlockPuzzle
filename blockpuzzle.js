let blocks = [];
let block = [];
let blockArray = [];
let index = 0;
let finder = 0;
let moves = 0;
let text


class BlockPuzzle extends Phaser.Scene {
    constructor() {
        super ({ key: 'BlockPuzzle' })
    }

preload() {
    this.load.spritesheet('block', 'block.png', { frameWidth: 40, frameHeight: 40 })
   

}//preload closing bracket

create() {
    //adds title and game board
    this.add.text(160, 10, 'Block Puzzle', { fill: '#ffff', align: 'center' })
    text = this.add.text(160, 490, `Moves: 0`)
    this.createBoard();
    
    //test block
    // blocks[299].setAlpha(.4);

    //highlights block red when moused over and changes it back to white
    this.input.on('gameobjectover', function (pointer, gameObject) {
        gameObject.setTint('0xff0000')
    })
    this.input.on('gameobjectout', function (pointer, gameObject) {
        gameObject.clearTint();
    })
    //adds counter for number of moves
    
    this.input.on('gameobjectdown', function (pointer, gameObject) {
        //logic for handling the top row of blocks minus block 0 and 280
        if(gameObject.index % 10 === 0 
            && gameObject.index > 0 && gameObject.index < 70){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index+10)
            blockArray.push(gameObject.index-10)
            blockArray.push(gameObject.index+1)
            fill();
            moves++
        //logic for blocks around index 0
        }else if(gameObject.index === 0){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index+1)
            blockArray.push(gameObject.index+10)
            fill();
            moves++
        //logic for blocks around 280
        }else if(gameObject.index === 70){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index+1)
            blockArray.push(gameObject.index-10)
            fill();
            moves++
        }else if(gameObject.index === 9){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index-1)
            blockArray.push(gameObject.index+10)
            fill();
            moves++
        }else if(gameObject.index === 79){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index-1)
            blockArray.push(gameObject.index-10)
            fill();
            moves++
        //logic for the bottom row of the game board minus the corner
        }else if(gameObject.index === 19 || gameObject.index === 29 ||
            gameObject.index === 39 || gameObject.index === 49 ||
            gameObject.index === 59 || gameObject.index === 69 ||
            gameObject.index === 79){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index-1)
            blockArray.push(gameObject.index-10)
            blockArray.push(gameObject.index+10);
            fill();
            moves++
        //logic for left side of the game board minus the corners
        }else if(gameObject.index > 0 && gameObject.index < 9){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index-1)
            blockArray.push(gameObject.index+1)
            blockArray.push(gameObject.index+10);
            fill();
            moves++
        //logic for right side of the game board minus the corners
        }else if(gameObject.index > 70 && gameObject.index < 79){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index-1)
            blockArray.push(gameObject.index+1)
            blockArray.push(gameObject.index-10);
            fill();moves++
        }else{
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index-1)
            blockArray.push(gameObject.index+1)
            blockArray.push(gameObject.index-10);
            blockArray.push(gameObject.index+10);
            fill();
            moves++
        }
        
        
        
    })
    
    //adds numbers to blocks as they are in the blocks array
    for(let num = 0; num < 8; num++) {
        for(let ber = 0; ber < 10; ber++) {
            this.add.text(40+num*45, 45+ber*45, `${finder}`, { font: '10px', fill: '#000' })
            finder++
    }
}
    

}//create closing bracket

update() {
    text.setText('Moves: ' + moves)

    
}//update closing bracket
createBoard() {
    for(let row=0; row < 8; row+=1){
        for(let col=0; col < 10; col+=1){
            block = this.add.sprite(50+row*45, 50+col*45, 'block').setInteractive();
            block.index = index;
            index++
            blocks.push(block)
        }
    }
}
}//scene closing bracket
 


const config = {
    type: Phaser.AUTO,
    width: 415,
    height: 575,
    backgroundColor: "#000000",
    scene: [ BlockPuzzle ]
};

const game = new Phaser.Game(config);

function fill() {
    for(let i = 0; i < blockArray.length; i++) {
        if(blocks[blockArray[i]].alpha === 1){
            blocks[blockArray[i]].setAlpha(.4)
        }else {
            blocks[blockArray[i]].setAlpha(1)
        }
    }
}

function fillArray() {

}