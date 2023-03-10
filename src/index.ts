import Phaser from "phaser";

import * as scenes from "./scenes";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 400,
  height: 240,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    // width: 960,
    // height: 720,
  },
  backgroundColor: "#000000",
  parent: "phaser-vga",
  // physics: {
  //   default: "matter",
  //   matter: {
  //     debug: true,
  //     gravity: { x: 0, y: 0 },
  //   },
  // },
  pixelArt: true,
  scene: [scenes.BraveTimestep],
};

new Phaser.Game(config);
