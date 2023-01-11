import * as assets from "../asset-meta";

enum CONST {
  headingOffsetY = -8,
  valuesOffsetY = 16,
}

export class BraveTimestep extends Phaser.Scene {
  private _previous: number;
  private _tickCount: number = 0;
  private _tickCount_expected: number = 0;

  private _valueBmp: Phaser.GameObjects.BitmapText;

  constructor() {
    super("BraveTimestep");
  }

  init() {}

  preload() {
    this.load.bitmapFont(assets.AtariFont.key, assets.AtariFont.url, assets.AtariFont.meta);
  }

  create() {
    const { centerX: x, centerY: y } = this.cameras.main;

    this.add
      .bitmapText(x, y + CONST.headingOffsetY, assets.AtariFont.key, "Brave (Windows): delta is 50% of actual elapsed.", 8)
      .setCenterAlign()
      .setOrigin(0.5, 0.5);

    this._valueBmp = this.add
      .bitmapText(x, y + CONST.valuesOffsetY, assets.AtariFont.key, getValueDisplay(0, 0), 8)
      .setCenterAlign()
      .setOrigin(0.5, 0.5);
  }

  update(time: number, delta: number): void {
    const elapsed = time - this._previous;
    this._previous = time;

    // console.log(`Elapsed since last frame: ${Math.round(elapsed)} - delta: ${Math.round(delta)}`);
    this._valueBmp.setText(getValueDisplay(elapsed, delta));
  }
}

function getValueDisplay(elapsed: number, delta: number): string {
  return `elapsed: ${Math.round(elapsed)} / delta: ${Math.round(delta)}`;
}
