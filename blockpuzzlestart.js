class BlockPuzzleStart extends Phaser.Scene {
    constructor() {
        super ({ key: 'BlockPuzzleStart' })
    }

preload(){

}

create(){
   let titleText = this.add.text(200, 200, 'Block Puzzle', { font: '30px bold'}).setOrigin(.5)
   let startEasy = this.add.text(200, 250, 'Easy').setOrigin(.5)
   let startHard = this.add.text(200, 300, 'Hard' ).setOrigin(.5)
   let startRules = this.add.text(200, 350, 'Rules').setOrigin(.5)
   startEasy.setInteractive();
   startHard.setInteractive();
   startRules.setInteractive();
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
   startRules.on('pointerup', () => {
    this.scene.stop('BlockPuzzleStart')
    this.scene.start('BlockPuzzleRules')
   })
   startRules.on('pointerover', () => {
    startRules.setFill('#ff0')
   })
   startRules.on('pointerout', () => {
    startRules.setFill('#fff')
   })


}


}