let blocks = [];
let block = [];
let blockArray = [];
let index = 0;
let index2 = 0;
let finder = 0;
let moves = 0;

class BlockPuzzle extends Phaser.Scene {
    constructor() {
        super ({ key: 'BlockPuzzle' })
    }

preload() {
    this.load.spritesheet('block', 'block.png', { frameWidth: 20, frameHeight: 20 })
   

}//preload closing bracket

create() {
    //adds title and game board
    this.add.text(175, 10, 'Block Puzzle', { fill: '#ffff' })
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
        if(gameObject.index % 20 === 0 
            && gameObject.index > 0 && gameObject.index < 280){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index+20)
            blockArray.push(gameObject.index-20)
            blockArray.push(gameObject.index+1)
            fill();
            moves++
        //logic for blocks around index 0
        }else if(gameObject.index === 0){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index+1)
            blockArray.push(gameObject.index+20)
            fill();
            moves++
        //logic for blocks around 280
        }else if(gameObject.index === 280){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index+1)
            blockArray.push(gameObject.index-20)
            fill();
            moves++
        }else if(gameObject.index === 19){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index-1)
            blockArray.push(gameObject.index+20)
            fill();
            moves++
        }else if(gameObject.index === 299){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index-1)
            blockArray.push(gameObject.index-20)
            fill();
            moves++
        //logic for the bottom row of the game board minus the corner
        }else if(gameObject.index === 39 || gameObject.index === 59 ||
            gameObject.index === 79 || gameObject.index === 99 ||
            gameObject.index === 119 || gameObject.index === 139 ||
            gameObject.index === 159 || gameObject.index === 179 || 
            gameObject.index === 199 || gameObject.index === 219 ||
            gameObject.index === 239 || gameObject.index === 259 ||
            gameObject.index === 279){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index-1)
            blockArray.push(gameObject.index-20)
            blockArray.push(gameObject.index+20);
            fill();
            moves++
        //logic for left side of the game board minus the corners
        }else if(gameObject.index > 0 && gameObject.index < 19){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index-1)
            blockArray.push(gameObject.index+1)
            blockArray.push(gameObject.index+20);
            fill();
            moves++
        //logic for right side of the game board minus the corners
        }else if(gameObject.index > 280 && gameObject.index < 299){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index-1)
            blockArray.push(gameObject.index+1)
            blockArray.push(gameObject.index-20);
            fill();moves++
        }else{
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index-1)
            blockArray.push(gameObject.index+1)
            blockArray.push(gameObject.index-20);
            blockArray.push(gameObject.index+20);
            fill();
            moves++
        }
        
        
        
    })
    
    //adds numbers to blocks as they are in the blocks array
    for(let num = 0; num < 15; num++) {
        for(let ber = 0; ber < 20; ber++) {
            this.add.text(40+num*25, 45+ber*25, `${finder}`, { font: '10px', fill: '#000' })
            finder++
    }
}
    

}//create closing bracket

update() {
    this.add.text(100, 550, `Number of moves taken : ${moves}`)

    
}//update closing bracket
createBoard() {
    for(let row=0; row < 15; row+=1){
        for(let col=0; col < 20; col+=1){
            block = this.add.sprite(50+row*25, 50+col*25, 'block').setInteractive();
            block.index = index;
            index++
            blocks.push(block)
        }
    }
}
}//scene closing bracket
 


const config = {
    type: Phaser.AUTO,
    width: 450,
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