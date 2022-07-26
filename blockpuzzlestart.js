class BlockPuzzleStart extends Phaser.Scene {
    constructor() {
        super ({ key: 'BlockPuzzleStart' })
    }

preload(){

}

create(){
   let titleText = this.add.text(140, 200, 'Block Puzzle')
   let startEasy = this.add.text(170, 230, 'Easy')
   let startHard = this.add.text(170, 260, 'Hard' )
   startEasy.setInteractive();
   startHard.setInteractive();
   startEasy.on('pointerup', () => {
    this.scene.stop('BlockPuzzleStart')
    this.scene.start('EasyBlockPuzzle')
   })
   startEasy.on('pointerover', () => {
    startEasy.setFill('#ff0')
   })
   startEasy.on('pointerout', () => {
    startEasy.setFill('#fff')
   })

   startHard.on('pointerup', () => {
    this.scene.stop('BlockPuzzleStart')
    this.scene.start('BlockPuzzle')
   })
   startHard.on('pointerover', () => {
    startHard.setFill('#ff0')
   })
   startHard.on('pointerout', () => {
    startHard.setFill('#fff')
   })


}


}