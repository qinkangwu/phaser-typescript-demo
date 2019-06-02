import "phaser";

import {GameScene} from './scenes/GameScene';

const config: GameConfig = {
  type: Phaser.AUTO,
  width : 800,
  height : 600,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
  },
  scene : [GameScene]
};

export class StarfallGame extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

window.onload = () => {
  var game = new StarfallGame(config);
};