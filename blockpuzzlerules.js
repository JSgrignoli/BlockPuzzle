class BlockPuzzleRules extends Phaser.Scene {
    constructor() {
        super ({ key: 'BlockPuzzleRules' })
    }

    create() {
        this.make.text({
            x: 50,
            y: 50,
            text: 'The goal of Block Puzzle is to change all the white blocks to gray.',
            style: {
                fill: 'white',
                wordWrap: { width: 315, useAdvanceWrap: true }
            }
        });


        this.add.rectangle(170, 140, 30, 30, '0x808080');
        this.add.rectangle(205, 140, 30, 30, '0x808080');
        this.add.rectangle(240, 140, 30, 30, '0x808080');
        this.add.rectangle(170, 175, 30, 30, '0x808080');
        this.add.rectangle(205, 175, 30, 30, '0x808080');
        this.add.rectangle(240, 175, 30, 30, '0x808080');
        this.add.rectangle(170, 210, 30, 30, '0x808080');
        this.add.rectangle(205, 210, 30, 30, '0x808080');
        this.add.rectangle(240, 210, 30, 30, '0x808080');

        this.make.text({
            x: 50,
            y: 250,
            text: 'The block you click will change it and the blocks to the left, right, top and bottom to the oppsite color, turning gray blocks white, white blocks gray.',
            style: {
                fill: 'white',
                wordWrap: { width: 315, useAdvanceWrap: true }
            }
        });
    
        this.add.rectangle(170, 360, 30, 30, '0xffffff');
        this.add.rectangle(205, 360, 30, 30, '0x808080');
        this.add.rectangle(240, 360, 30, 30, '0xffffff');
        this.add.rectangle(170, 395, 30, 30, '0x808080');
        this.add.rectangle(205, 395, 30, 30, '0x808080');
        this.add.rectangle(240, 395, 30, 30, '0x808080');
        this.add.rectangle(170, 430, 30, 30, '0xffffff');
        this.add.rectangle(205, 430, 30, 30, '0x808080');
        this.add.rectangle(240, 430, 30, 30, '0xffffff');

        const back = this.add.text(175, 480, 'Back', { font: '25px bold'})

        back.setInteractive();
        back.on('pointerup', () => {
            this.scene.stop('BlockPuzzleRules')
            this.scene.start('BlockPuzzleStart')
           })
           back.on('pointerover', () => {
            back.setFill('#ff0')
           })
           back.on('pointerout', () => {
            back.setFill('#fff')
           })
    
    
    
    }
}