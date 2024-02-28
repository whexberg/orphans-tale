import { Scene } from 'phaser';
import { ImageAssets, SceneNames } from '../constants';

export class Game extends Scene {
    constructor() {
        super(SceneNames.GAME);
    }

    create() {
        this.cameras.main.setBackgroundColor(0x00ff00);

        this.add.image(512, 384, ImageAssets.background.label).setAlpha(0.5);

        this.add.text(
            512,
            384,
            'Make something fun!\nand share it with us:\nsupport@phaser.io',
            {
                align: 'center',
                color: '#ffffff',
                fontFamily: 'Arial Black',
                fontSize: 38,
                stroke: '#000000',
                strokeThickness: 8,
            },
        ).setOrigin(0.5);

        this.input.once('pointerdown', () => {
            this.scene.start(SceneNames.GAME_OVER);
        });
    }
}
