import { Scene } from 'phaser';
import { ImageAssets, SceneNames } from '../constants';

export class Boot extends Scene {
    constructor() {
        super(SceneNames.BOOT);
    }

    preload() {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.image(
            ImageAssets.background.label,
            ImageAssets.background.path,
        );
    }

    create() {
        this.scene.start(SceneNames.PRELOADER);
    }
}
