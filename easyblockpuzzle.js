class EasyBlockPuzzle extends Phaser.Scene {
    constructor() {
        super ({ key: 'EasyBlockPuzzle' })
    }

preload() {
    this.load.spritesheet('block', 'block.png', { frameWidth: 40, frameHeight: 40 })
   

}//preload closing bracket

create() {
    //adds title and game board and a move counter
    this.add.text(160, 10, 'Block Puzzle', { fill: '#ffff', align: 'center' })
    text = this.add.text(160, 490, `Moves: 0`)
    this.createBoard();
    
    //adds solution blocks
    blocks[2].setAlpha(.4);
    blocks[3].setAlpha(.4);
    blocks[22].setAlpha(.4);
    blocks[23].setAlpha(.4);
    // blocks[79].setAlpha(.4);

    //highlights block red when moused over and changes it back to white
    this.input.on('gameobjectover', function (pointer, gameObject) {
        gameObject.setTint('0xff0000')
    })
    this.input.on('gameobjectout', function (pointer, gameObject) {
        gameObject.clearTint();
    })
    //game play logic on user input (mouse click)
    this.input.on('gameobjectdown', function (pointer, gameObject) {
        //logic for handling the top row of blocks minus block 0 and 20
        if(gameObject.index % 5 === 0 
            && gameObject.index > 0 && gameObject.index < 20){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index+5)
            blockArray.push(gameObject.index-5)
            blockArray.push(gameObject.index+1)
            fill();
            moves++
        //logic for top left corner
        }else if(gameObject.index === 0){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index+1)
            blockArray.push(gameObject.index+5)
            fill();
            moves++
        //logic for top right corner
        }else if(gameObject.index === 20){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index+1)
            blockArray.push(gameObject.index-5)
            fill();
            moves++
        //logic for bottom left corner
        }else if(gameObject.index === 4){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index-1)
            blockArray.push(gameObject.index+5)
            fill();
            moves++
        //logic for bottom right corner
        }else if(gameObject.index === 24){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index-1)
            blockArray.push(gameObject.index-5)
            fill();
            moves++
        //logic for the bottom row of the game board minus the corner
        }else if(gameObject.index === 9 || gameObject.index === 14 ||
            gameObject.index === 19 ){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index-1)
            blockArray.push(gameObject.index-5)
            blockArray.push(gameObject.index+5);
            fill();
            moves++
        //logic for left side of the game board minus the corners
        }else if(gameObject.index > 0 && gameObject.index < 4){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index-1)
            blockArray.push(gameObject.index+1)
            blockArray.push(gameObject.index+5);
            fill();
            moves++
        //logic for right side of the game board minus the corners
        }else if(gameObject.index > 20 && gameObject.index < 24){
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index-1)
            blockArray.push(gameObject.index+1)
            blockArray.push(gameObject.index-5);
            fill();moves++
        }else{
            blockArray = [];
            blockArray.push(gameObject.index);
            blockArray.push(gameObject.index-1)
            blockArray.push(gameObject.index+1)
            blockArray.push(gameObject.index-5);
            blockArray.push(gameObject.index+5);
            fill();
            moves++
        }
    })//closing braket for game input logic

    //adds numbers to blocks as they are in the blocks array
    for(let num = 0; num < 5; num++) {
        for(let ber = 0; ber < 5; ber++) {
            this.add.text(110+num*45, 45+ber*45, `${finder}`, { font: '10px', fill: '#000' })
            finder++
    }
}
}//create closing bracket

update() {
    //updates move counter
    text.setText('Moves: ' + moves)

    //checks win condition and displays win screen
    checkWin();
    if(win){
        this.add.rectangle(415/2, 200, 300, 100, 0xffffff).setOrigin(0.5)
        this.add.text(170, 190, 'YOU WIN!', { fill: '#000', fontSize: '18px bold' } )
    }

    
}//update closing bracket
createBoard() {
    for(let row=0; row < 5; row+=1){
        for(let col=0; col < 5; col+=1){
            block = this.add.sprite(120+row*45, 50+col*45, 'block').setInteractive()
            block.index = index;
            index++
            blocks.push(block)
        }
    }
}
}//scene closing bracket