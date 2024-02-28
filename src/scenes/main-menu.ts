import { Scene } from 'phaser';
import { ImageAssets, SceneNames } from '../constants';

export class MainMenu extends Scene {
    constructor() {
        super(SceneNames.MAIN_MENU);
    }

    create() {
        this.add.image(512, 384, ImageAssets.background.label);

        this.add.image(512, 300, 'logo');

        this.add.text(512, 460, 'Main Menu', {
            align: 'center',
            color: '#ffffff',
            fontFamily: 'Arial Black',
            fontSize: 38,
            stroke: '#000000',
            strokeThickness: 8,
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {
            this.scene.start(SceneNames.GAME);
        });
    }
}
