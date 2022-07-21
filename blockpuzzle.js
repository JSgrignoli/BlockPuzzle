let blocks;
let block = [];

class BlockPuzzle extends Phaser.Scene {
    constructor() {
        super ({ key: 'BlockPuzzle' })
    }

preload() {
    this.load.spritesheet('block', 'block.png', { frameWidth: 20, frameHeight: 20 })
   

}//preload closing bracket

create() {
    this.createBoard();

    this.input.on('gameobjectup', function (pointer, gameObject) {
        if (gameObject.alpha === 1){
            gameObject.setAlpha(.4)
            console.log(gameObject)
        }else {
            gameObject.setAlpha(1)
        }
        
    }, this)
    

}//create closing bracket

update() {
    
   

    
}//update closing bracket
createBoard() {
    for(let row=0; row < 15; row+=1){
        for(let col=0; col < 20; col+=1){
            block = this.add.sprite(50+row*25, 50+col*25, 'block').setInteractive();
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