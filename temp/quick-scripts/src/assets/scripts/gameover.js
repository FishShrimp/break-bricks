"use strict";
cc._RF.push(module, '60425zRIQ5LNIZ6KmZ5p/LN', 'gameover');
// scripts/gameover.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    resultLabel: cc.Label,
    scoreLabel: cc.Label,
    firststartbtn: cc.Node
  },
  init: function init(gameCtl) {
    this.gameCtl = gameCtl;
    this.node.active = false;
  },
  show: function show(score, isWin) {
    this.node.active = true;

    if (isWin) {
      this.resultLabel.string = 'YOU WIN!';
    } else {
      this.resultLabel.string = 'GAME OVER';
    }

    this.scoreLabel.string = 'Final Score: ' + score;
  },
  onBtnRestart: function onBtnRestart() {
    this.gameCtl.startGame();
    this.firststartbtn.active = false;
  }
});

cc._RF.pop();