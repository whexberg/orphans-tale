import { Scene } from 'phaser';
import { ImageAssets, SceneNames } from '../constants';

export class GameOver extends Scene {
    constructor() {
        super(SceneNames.GAME_OVER);
    }

    create() {
        this.cameras.main.setBackgroundColor(0xff0000);

        this.add.image(512, 384, ImageAssets.background.label).setAlpha(0.5);

        this.add.text(512, 384, 'Game Over', {
            align: 'center',
            color: '#ffffff',
            fontFamily: 'Arial Black',
            fontSize: 64,
            stroke: '#000000',
            strokeThickness: 8,
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {
            this.scene.start(SceneNames.MAIN_MENU);
        });
    }
}
