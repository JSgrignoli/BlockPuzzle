let blocks = [];
let block = [];
let index = 0;
let index2 = 0;
let finder = 0;

class BlockPuzzle extends Phaser.Scene {
    constructor() {
        super ({ key: 'BlockPuzzle' })
    }

preload() {
    this.load.spritesheet('block', 'block.png', { frameWidth: 20, frameHeight: 20 })
   

}//preload closing bracket

create() {
    let style = { font: '16px', fill: '0xff0000' };
    this.add.text(175, 10, 'Block Puzzle', { fill: '#ffff' })
    this.createBoard();
    

    blocks[299].setAlpha(.4);

    this.input.on('gameobjectover', function (pointer, gameObject) {
        gameObject.setTint('0xff0000')
    })
    this.input.on('gameobjectout', function (pointer, gameObject) {
        gameObject.clearTint();
    })


    this.input.on('gameobjectdown', function (pointer, gameObject) {
        if(gameObject.index % 20 === 0 && blocks[gameObject.index].alpha === 1){
            blocks[gameObject.index].setAlpha(.4)
    
        }else {
            blocks[gameObject.index].setAlpha(1);
        }
        
    })
    for(let num = 0; num < 15; num++) {
        for(let ber = 0; ber < 20; ber++) {
            this.add.text(40+num*25, 45+ber*25, `${finder}`, { font: '10px', fill: '#000' })
            finder++
    }
}
    

}//create closing bracket

update() {
    
   

    
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

fill() {
    if(gameObject.index % 20 === 0){
        block[gameObject.index].setAlpha(.4)

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