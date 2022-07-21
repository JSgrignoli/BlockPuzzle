let blocks;
let block = [];

class BlockPuzzle extends Phaser.Scene {
    constructor() {
        super ({ key: 'BlockPuzzle' })
    }

preload() {
    this.load.spritesheet('block', 'filledblock.png', { frameWidth: 14, frameHeight: 14 })
   

}//preload closing bracket

create() {
    this.add.image(150, 150, 'block')
    blocks = this.add.group();

    block = this.add.rectangle(50, 50, 15, 15, 0xffffff)
    blocks.add(block);
    
    // block.on('pointerup', () => {
    //     block.setAlpha(.4)
    // })

    this.createBoard();

    this.input.on('gameobjectdown', function (pointer, gameObject) {
        gameObject.setAlpha(.4)
    }, this)
    

}//create closing bracket

update() {
    
   

    
}//update closing bracket
createBoard() {
    for(let row=0; row < 20; row+=1){
        for(let col=0; col < 30; col+=1){
            block = this.add.sprite(100+row*16, 200+col*16, 'block').setInteractive();
        }
    }
}

}//scene closing bracket
 


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 900,
    backgroundColor: "#000000",
    scene: [ BlockPuzzle ]
};

const game = new Phaser.Game(config);