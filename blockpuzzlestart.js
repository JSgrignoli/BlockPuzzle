class BlockPuzzleStart extends Phaser.Scene {
    constructor() {
        super ({ key: 'BlockPuzzleStart' })
    }

preload(){

}

create(){
   let titleText = this.add.text(140, 200, 'Block Puzzle')
   let start = this.add.text(170, 230, 'Start')
   start.setInteractive();
   start.on('pointerup', () => {
    this.scene.stop('BlockPuzzleStart')
    this.scene.start('BlockPuzzle')
   })
   start.on('pointerover', () => {
    start.setFill('#ff0')
   })
   start.on('pointerout', () => {
    start.setFill('#fff')
   })

}


}