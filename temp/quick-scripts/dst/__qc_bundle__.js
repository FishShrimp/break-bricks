
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_v2.0.x_cc.Toggle_event');
require('./assets/scripts/Ball1');
require('./assets/scripts/Ball2');
require('./assets/scripts/Ball3');
require('./assets/scripts/board');
require('./assets/scripts/bricks');
require('./assets/scripts/firststart');
require('./assets/scripts/gameover');
require('./assets/scripts/main');
require('./assets/scripts/view');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Ball2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cddac13mk5Dkb3uKOvRGx43', 'Ball2');
// scripts/Ball2.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init(gameCtl) {
    this.gameCtl = gameCtl;
    this.node.position = cc.v2(910, -23); //初始化位置
    // let r1 = Math.random();
    // let r2=  Math.random();
    // let x=Math.sin(r1*Math.PI*2);
    // let y=Math.cos(r1*Math.PI*2);

    this.getComponent(cc.RigidBody).linearVelocity = cc.v2(-70, 500); //初始化速度
  },
  onBeginContact: function onBeginContact(contact, self, other) {
    //根据碰到的物体不同，触发不同的事件处理函数
    switch (other.tag) {
      case 1:
        this.gameCtl.onBallContactBrick(self.node, other.node); //砖块

        break;

      case 2:
        this.gameCtl.onBallContactGround(self.node, other.node); //地面

        break;

      case 3:
        this.gameCtl.onBallContactPaddle(self.node, other.node); //板子

        break;

      case 4:
        this.gameCtl.onBallContactWall(self.node, other.node); //墙

        break;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmFsbDIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImluaXQiLCJnYW1lQ3RsIiwibm9kZSIsInBvc2l0aW9uIiwidjIiLCJnZXRDb21wb25lbnQiLCJSaWdpZEJvZHkiLCJsaW5lYXJWZWxvY2l0eSIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGYiLCJvdGhlciIsInRhZyIsIm9uQmFsbENvbnRhY3RCcmljayIsIm9uQmFsbENvbnRhY3RHcm91bmQiLCJvbkJhbGxDb250YWN0UGFkZGxlIiwib25CYWxsQ29udGFjdFdhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLElBSEssZ0JBR0FDLE9BSEEsRUFHUztBQUNWLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsUUFBVixHQUFxQk4sRUFBRSxDQUFDTyxFQUFILENBQU0sR0FBTixFQUFVLENBQUMsRUFBWCxDQUFyQixDQUZVLENBRTBCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQUtDLFlBQUwsQ0FBa0JSLEVBQUUsQ0FBQ1MsU0FBckIsRUFBZ0NDLGNBQWhDLEdBQWlEVixFQUFFLENBQUNPLEVBQUgsQ0FBTSxDQUFDLEVBQVAsRUFBVSxHQUFWLENBQWpELENBUFUsQ0FPc0Q7QUFDbkUsR0FYSTtBQWFMSSxFQUFBQSxjQWJLLDBCQWFVQyxPQWJWLEVBYW1CQyxJQWJuQixFQWF5QkMsS0FiekIsRUFhZ0M7QUFDakM7QUFDQSxZQUFRQSxLQUFLLENBQUNDLEdBQWQ7QUFDSSxXQUFLLENBQUw7QUFDSSxhQUFLWCxPQUFMLENBQWFZLGtCQUFiLENBQWdDSCxJQUFJLENBQUNSLElBQXJDLEVBQTJDUyxLQUFLLENBQUNULElBQWpELEVBREosQ0FDMkQ7O0FBQ3ZEOztBQUNKLFdBQUssQ0FBTDtBQUNJLGFBQUtELE9BQUwsQ0FBYWEsbUJBQWIsQ0FBaUNKLElBQUksQ0FBQ1IsSUFBdEMsRUFBNENTLEtBQUssQ0FBQ1QsSUFBbEQsRUFESixDQUM0RDs7QUFDeEQ7O0FBQ0osV0FBSyxDQUFMO0FBQ0ksYUFBS0QsT0FBTCxDQUFhYyxtQkFBYixDQUFpQ0wsSUFBSSxDQUFDUixJQUF0QyxFQUE0Q1MsS0FBSyxDQUFDVCxJQUFsRCxFQURKLENBQzREOztBQUN4RDs7QUFDSixXQUFLLENBQUw7QUFDSSxhQUFLRCxPQUFMLENBQWFlLGlCQUFiLENBQStCTixJQUFJLENBQUNSLElBQXBDLEVBQTBDUyxLQUFLLENBQUNULElBQWhELEVBREosQ0FDMEQ7O0FBQ3REO0FBWlI7QUFjSDtBQTdCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgaW5pdChnYW1lQ3RsKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ3RsID0gZ2FtZUN0bDtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52Mig5MTAsLTIzKTsvL+WIneWni+WMluS9jee9rlxyXG4gICAgICAgIC8vIGxldCByMSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgLy8gbGV0IHIyPSAgTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAvLyBsZXQgeD1NYXRoLnNpbihyMSpNYXRoLlBJKjIpO1xyXG4gICAgICAgIC8vIGxldCB5PU1hdGguY29zKHIxKk1hdGguUEkqMik7XHJcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKC03MCw1MDApOy8v5Yid5aeL5YyW6YCf5bqmXHJcbiAgICB9LFxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgLy/moLnmja7norDliLDnmoTniankvZPkuI3lkIzvvIzop6blj5HkuI3lkIznmoTkuovku7blpITnkIblh73mlbBcclxuICAgICAgICBzd2l0Y2ggKG90aGVyLnRhZykge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDdGwub25CYWxsQ29udGFjdEJyaWNrKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7Ly/noJblnZdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDdGwub25CYWxsQ29udGFjdEdyb3VuZChzZWxmLm5vZGUsIG90aGVyLm5vZGUpOy8v5Zyw6Z2iXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ3RsLm9uQmFsbENvbnRhY3RQYWRkbGUoc2VsZi5ub2RlLCBvdGhlci5ub2RlKTsvL+adv+WtkFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUN0bC5vbkJhbGxDb250YWN0V2FsbChzZWxmLm5vZGUsIG90aGVyLm5vZGUpOy8v5aKZXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Ball3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a2983WNMIJKwrBsHTEXhdxh', 'Ball3');
// scripts/Ball3.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init(gameCtl) {
    this.gameCtl = gameCtl;
    this.node.position = cc.v2(50, -23); //初始化位置
    // let r1 = Math.random();
    // let r2=  Math.random();
    // let x=Math.sin(r1*Math.PI*2);
    // let y=Math.cos(r1*Math.PI*2);

    this.getComponent(cc.RigidBody).linearVelocity = cc.v2(85, 860); //初始化速度
  },
  onBeginContact: function onBeginContact(contact, self, other) {
    //根据碰到的物体不同，触发不同的事件处理函数
    switch (other.tag) {
      case 1:
        this.gameCtl.onBallContactBrick(self.node, other.node); //砖块

        break;

      case 2:
        this.gameCtl.onBallContactGround(self.node, other.node); //地面

        break;

      case 3:
        this.gameCtl.onBallContactPaddle(self.node, other.node); //板子

        break;

      case 4:
        this.gameCtl.onBallContactWall(self.node, other.node); //墙

        break;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmFsbDMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImluaXQiLCJnYW1lQ3RsIiwibm9kZSIsInBvc2l0aW9uIiwidjIiLCJnZXRDb21wb25lbnQiLCJSaWdpZEJvZHkiLCJsaW5lYXJWZWxvY2l0eSIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGYiLCJvdGhlciIsInRhZyIsIm9uQmFsbENvbnRhY3RCcmljayIsIm9uQmFsbENvbnRhY3RHcm91bmQiLCJvbkJhbGxDb250YWN0UGFkZGxlIiwib25CYWxsQ29udGFjdFdhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLElBSEssZ0JBR0FDLE9BSEEsRUFHUztBQUNWLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsUUFBVixHQUFxQk4sRUFBRSxDQUFDTyxFQUFILENBQU0sRUFBTixFQUFTLENBQUMsRUFBVixDQUFyQixDQUZVLENBRXlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQUtDLFlBQUwsQ0FBa0JSLEVBQUUsQ0FBQ1MsU0FBckIsRUFBZ0NDLGNBQWhDLEdBQWlEVixFQUFFLENBQUNPLEVBQUgsQ0FBTSxFQUFOLEVBQVMsR0FBVCxDQUFqRCxDQVBVLENBT3FEO0FBQ2xFLEdBWEk7QUFhTEksRUFBQUEsY0FiSywwQkFhVUMsT0FiVixFQWFtQkMsSUFibkIsRUFheUJDLEtBYnpCLEVBYWdDO0FBQ2pDO0FBQ0EsWUFBUUEsS0FBSyxDQUFDQyxHQUFkO0FBQ0ksV0FBSyxDQUFMO0FBQ0ksYUFBS1gsT0FBTCxDQUFhWSxrQkFBYixDQUFnQ0gsSUFBSSxDQUFDUixJQUFyQyxFQUEyQ1MsS0FBSyxDQUFDVCxJQUFqRCxFQURKLENBQzJEOztBQUN2RDs7QUFDSixXQUFLLENBQUw7QUFDSSxhQUFLRCxPQUFMLENBQWFhLG1CQUFiLENBQWlDSixJQUFJLENBQUNSLElBQXRDLEVBQTRDUyxLQUFLLENBQUNULElBQWxELEVBREosQ0FDNEQ7O0FBQ3hEOztBQUNKLFdBQUssQ0FBTDtBQUNJLGFBQUtELE9BQUwsQ0FBYWMsbUJBQWIsQ0FBaUNMLElBQUksQ0FBQ1IsSUFBdEMsRUFBNENTLEtBQUssQ0FBQ1QsSUFBbEQsRUFESixDQUM0RDs7QUFDeEQ7O0FBQ0osV0FBSyxDQUFMO0FBQ0ksYUFBS0QsT0FBTCxDQUFhZSxpQkFBYixDQUErQk4sSUFBSSxDQUFDUixJQUFwQyxFQUEwQ1MsS0FBSyxDQUFDVCxJQUFoRCxFQURKLENBQzBEOztBQUN0RDtBQVpSO0FBY0g7QUE3QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIGluaXQoZ2FtZUN0bCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUN0bCA9IGdhbWVDdGw7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjIoNTAsLTIzKTsvL+WIneWni+WMluS9jee9rlxyXG4gICAgICAgIC8vIGxldCByMSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgLy8gbGV0IHIyPSAgTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAvLyBsZXQgeD1NYXRoLnNpbihyMSpNYXRoLlBJKjIpO1xyXG4gICAgICAgIC8vIGxldCB5PU1hdGguY29zKHIxKk1hdGguUEkqMik7XHJcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDg1LDg2MCk7Ly/liJ3lp4vljJbpgJ/luqZcclxuICAgIH0sXHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICAvL+agueaNrueisOWIsOeahOeJqeS9k+S4jeWQjO+8jOinpuWPkeS4jeWQjOeahOS6i+S7tuWkhOeQhuWHveaVsFxyXG4gICAgICAgIHN3aXRjaCAob3RoZXIudGFnKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUN0bC5vbkJhbGxDb250YWN0QnJpY2soc2VsZi5ub2RlLCBvdGhlci5ub2RlKTsvL+egluWdl1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUN0bC5vbkJhbGxDb250YWN0R3JvdW5kKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7Ly/lnLDpnaJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDdGwub25CYWxsQ29udGFjdFBhZGRsZShzZWxmLm5vZGUsIG90aGVyLm5vZGUpOy8v5p2/5a2QXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ3RsLm9uQmFsbENvbnRhY3RXYWxsKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7Ly/loplcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/bricks.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '62398FSMJtHJ55jmSoqf4WF', 'bricks');
// scripts/bricks.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    padding: 0,
    spacing: 0,
    cols: 0,
    brickPrefab: cc.Prefab,
    bricksNumber: 0
  },
  init: function init(bricksNumber) {
    this.node.removeAllChildren();

    for (var i = 0; i < bricksNumber; i++) {
      //生成bricksNumber个小球
      var brickNode = cc.instantiate(this.brickPrefab); //生成新的节点

      brickNode.parent = this.node;
      brickNode.x = this.padding + i % this.cols * (brickNode.width + this.spacing) + brickNode.width / 2;
      brickNode.y = -this.padding - Math.floor(i / this.cols) * (brickNode.height + this.spacing) - brickNode.height / 2;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYnJpY2tzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGFkZGluZyIsInNwYWNpbmciLCJjb2xzIiwiYnJpY2tQcmVmYWIiLCJQcmVmYWIiLCJicmlja3NOdW1iZXIiLCJpbml0Iiwibm9kZSIsInJlbW92ZUFsbENoaWxkcmVuIiwiaSIsImJyaWNrTm9kZSIsImluc3RhbnRpYXRlIiwicGFyZW50IiwieCIsIndpZHRoIiwieSIsIk1hdGgiLCJmbG9vciIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE9BQU8sRUFBRSxDQUREO0FBRVJDLElBQUFBLE9BQU8sRUFBRSxDQUZEO0FBR1JDLElBQUFBLElBQUksRUFBRSxDQUhFO0FBSVJDLElBQUFBLFdBQVcsRUFBRVAsRUFBRSxDQUFDUSxNQUpSO0FBS1JDLElBQUFBLFlBQVksRUFBRTtBQUxOLEdBSFA7QUFXTEMsRUFBQUEsSUFYSyxnQkFXQUQsWUFYQSxFQVdjO0FBQ2YsU0FBS0UsSUFBTCxDQUFVQyxpQkFBVjs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdKLFlBQXBCLEVBQWtDSSxDQUFDLEVBQW5DLEVBQXVDO0FBQUM7QUFDcEMsVUFBSUMsU0FBUyxHQUFHZCxFQUFFLENBQUNlLFdBQUgsQ0FBZSxLQUFLUixXQUFwQixDQUFoQixDQURtQyxDQUNjOztBQUNqRE8sTUFBQUEsU0FBUyxDQUFDRSxNQUFWLEdBQW1CLEtBQUtMLElBQXhCO0FBQ0FHLE1BQUFBLFNBQVMsQ0FBQ0csQ0FBVixHQUFjLEtBQUtiLE9BQUwsR0FBZ0JTLENBQUMsR0FBRyxLQUFLUCxJQUFWLElBQW1CUSxTQUFTLENBQUNJLEtBQVYsR0FBa0IsS0FBS2IsT0FBMUMsQ0FBZixHQUFvRVMsU0FBUyxDQUFDSSxLQUFWLEdBQWtCLENBQXBHO0FBQ0FKLE1BQUFBLFNBQVMsQ0FBQ0ssQ0FBVixHQUFjLENBQUMsS0FBS2YsT0FBTixHQUFnQmdCLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixDQUFDLEdBQUcsS0FBS1AsSUFBcEIsS0FBNkJRLFNBQVMsQ0FBQ1EsTUFBVixHQUFtQixLQUFLakIsT0FBckQsQ0FBaEIsR0FBZ0ZTLFNBQVMsQ0FBQ1EsTUFBVixHQUFtQixDQUFqSDtBQUNIO0FBQ0o7QUFuQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIHNwYWNpbmc6IDAsXHJcbiAgICAgICAgY29sczogMCxcclxuICAgICAgICBicmlja1ByZWZhYjogY2MuUHJlZmFiLFxyXG4gICAgICAgIGJyaWNrc051bWJlcjogMCxcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdChicmlja3NOdW1iZXIpIHtcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJyaWNrc051bWJlcjsgaSsrKSB7Ly/nlJ/miJBicmlja3NOdW1iZXLkuKrlsI/nkINcclxuICAgICAgICAgICAgbGV0IGJyaWNrTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnJpY2tQcmVmYWIpOy8v55Sf5oiQ5paw55qE6IqC54K5XHJcbiAgICAgICAgICAgIGJyaWNrTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGJyaWNrTm9kZS54ID0gdGhpcy5wYWRkaW5nICsgKGkgJSB0aGlzLmNvbHMpICogKGJyaWNrTm9kZS53aWR0aCArIHRoaXMuc3BhY2luZykgKyBicmlja05vZGUud2lkdGggLyAyO1xyXG4gICAgICAgICAgICBicmlja05vZGUueSA9IC10aGlzLnBhZGRpbmcgLSBNYXRoLmZsb29yKGkgLyB0aGlzLmNvbHMpICogKGJyaWNrTm9kZS5oZWlnaHQgKyB0aGlzLnNwYWNpbmcpIC0gYnJpY2tOb2RlLmhlaWdodCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/board.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4dc82c1qO9KbZBsMZGbHlMV', 'board');
// scripts/board.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var _this = this;

    this.node.parent.on("mousemove", function (event) {
      ///使用事件名mousemove来注册鼠标事件
      _this.node.x = event.getLocation().x; //鼠标移动触发事件给Paddle的位置重新赋值
    });
  },
  init: function init() {
    this.node.x = 480;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYm9hcmQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsIm9uTG9hZCIsIm5vZGUiLCJwYXJlbnQiLCJvbiIsImV2ZW50IiwieCIsImdldExvY2F0aW9uIiwiaW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQUE7O0FBRWhCLFNBQUtDLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsRUFBakIsQ0FBb0IsV0FBcEIsRUFBaUMsVUFBQ0MsS0FBRCxFQUFXO0FBQUM7QUFDekMsTUFBQSxLQUFJLENBQUNILElBQUwsQ0FBVUksQ0FBVixHQUFjRCxLQUFLLENBQUNFLFdBQU4sR0FBb0JELENBQWxDLENBRHdDLENBQ0o7QUFDdkMsS0FGRDtBQUdILEdBUkk7QUFVTEUsRUFBQUEsSUFWSyxrQkFVQztBQUNGLFNBQUtOLElBQUwsQ0FBVUksQ0FBVixHQUFjLEdBQWQ7QUFDSDtBQVpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9uKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4gey8vL+S9v+eUqOS6i+S7tuWQjW1vdXNlbW92ZeadpeazqOWGjOm8oOagh+S6i+S7tlxyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IGV2ZW50LmdldExvY2F0aW9uKCkueDsvL+m8oOagh+enu+WKqOinpuWPkeS6i+S7tue7mVBhZGRsZeeahOS9jee9rumHjeaWsOi1i+WAvFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggPSA0ODA7XHJcbiAgICB9LFxyXG5cclxufSk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5827d5MIMBHppK1YDzTqvZI', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMC54X2NjLlRvZ2dsZV9ldmVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIlRvZ2dsZSIsIl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFZQSxJQUFJQSxFQUFFLENBQUNDLE1BQVAsRUFBZTtBQUNYO0FBQ0E7QUFDQUQsRUFBQUEsRUFBRSxDQUFDQyxNQUFILENBQVVDLDJCQUFWLEdBQXdDLElBQXhDO0FBQ0giLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoIHByb2plY3RzIHByaW9yIHRvIHYyLjEuMC5cclxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cclxuICogSWYgeW91IGRvbid0IHVzZSBjYy5Ub2dnbGUgaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cclxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cclxuICpcclxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMCDkuYvliY3niYjmnKznmoTlt6XnqIvvvIxcclxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXHJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBUb2dnbGXvvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5pyJ5omY566h5LqOIGdpdCDnrYnniYjmnKzlupPvvIzor7flsIbmraTohJrmnKzkuIDlubbkuIrkvKDjgIJcclxuICovXHJcblxyXG5pZiAoY2MuVG9nZ2xlKSB7XHJcbiAgICAvLyBXaGV0aGVyIHRoZSAndG9nZ2xlJyBhbmQgJ2NoZWNrRXZlbnRzJyBldmVudHMgYXJlIGZpcmVkIHdoZW4gJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScgaXMgY2FsbGVkIGluIHRoZSBjb2RlXHJcbiAgICAvLyDlnKjku6PnoIHkuK3osIPnlKggJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScg5pe25piv5ZCm6Kem5Y+RICd0b2dnbGUnIOS4jiAnY2hlY2tFdmVudHMnIOS6i+S7tlxyXG4gICAgY2MuVG9nZ2xlLl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayA9IHRydWU7XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/firststart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31d9fLSJV9JyIGQU2VrRyLx', 'firststart');
// scripts/firststart.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init(gameCtl) {
    this.gameCtl = gameCtl;
    this.node.active = false;
  },
  onBtnRestart: function onBtnRestart() {
    this.gameCtl.startGame();
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZmlyc3RzdGFydC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwiaW5pdCIsImdhbWVDdGwiLCJub2RlIiwiYWN0aXZlIiwib25CdG5SZXN0YXJ0Iiwic3RhcnRHYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUtMQyxFQUFBQSxJQUxLLGdCQUtBQyxPQUxBLEVBS1E7QUFDVCxTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBbUIsS0FBbkI7QUFDSCxHQVJJO0FBVUxDLEVBQUFBLFlBVkssMEJBVVM7QUFDVixTQUFLSCxPQUFMLENBQWFJLFNBQWI7QUFDSDtBQVpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiBcclxuXHJcbiAgICBpbml0KGdhbWVDdGwpe1xyXG4gICAgICAgIHRoaXMuZ2FtZUN0bCA9IGdhbWVDdGw7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkJ0blJlc3RhcnQoKXtcclxuICAgICAgICB0aGlzLmdhbWVDdGwuc3RhcnRHYW1lKCk7XHJcbiAgICB9XHJcbn0pOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameover.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZW92ZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJyZXN1bHRMYWJlbCIsIkxhYmVsIiwic2NvcmVMYWJlbCIsImZpcnN0c3RhcnRidG4iLCJOb2RlIiwiaW5pdCIsImdhbWVDdGwiLCJub2RlIiwiYWN0aXZlIiwic2hvdyIsInNjb3JlIiwiaXNXaW4iLCJzdHJpbmciLCJvbkJ0blJlc3RhcnQiLCJzdGFydEdhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxXQUFXLEVBQUNKLEVBQUUsQ0FBQ0ssS0FEUDtBQUVSQyxJQUFBQSxVQUFVLEVBQUNOLEVBQUUsQ0FBQ0ssS0FGTjtBQUdSRSxJQUFBQSxhQUFhLEVBQUNQLEVBQUUsQ0FBQ1E7QUFIVCxHQUhQO0FBU0xDLEVBQUFBLElBVEssZ0JBU0FDLE9BVEEsRUFTUTtBQUNULFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsTUFBVixHQUFtQixLQUFuQjtBQUNILEdBWkk7QUFjTEMsRUFBQUEsSUFkSyxnQkFjQUMsS0FkQSxFQWNNQyxLQWROLEVBY1k7QUFDYixTQUFLSixJQUFMLENBQVVDLE1BQVYsR0FBbUIsSUFBbkI7O0FBQ0EsUUFBR0csS0FBSCxFQUFTO0FBQ0wsV0FBS1gsV0FBTCxDQUFpQlksTUFBakIsR0FBMEIsVUFBMUI7QUFDSCxLQUZELE1BRUs7QUFDRCxXQUFLWixXQUFMLENBQWlCWSxNQUFqQixHQUEwQixXQUExQjtBQUNIOztBQUVELFNBQUtWLFVBQUwsQ0FBZ0JVLE1BQWhCLEdBQXdCLGtCQUFpQkYsS0FBekM7QUFDSCxHQXZCSTtBQXlCTEcsRUFBQUEsWUF6QkssMEJBeUJTO0FBQ1YsU0FBS1AsT0FBTCxDQUFhUSxTQUFiO0FBQ0EsU0FBS1gsYUFBTCxDQUFtQkssTUFBbkIsR0FBMEIsS0FBMUI7QUFDSDtBQTVCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHJlc3VsdExhYmVsOmNjLkxhYmVsLFxyXG4gICAgICAgIHNjb3JlTGFiZWw6Y2MuTGFiZWwsXHJcbiAgICAgICAgZmlyc3RzdGFydGJ0bjpjYy5Ob2RlLFxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0KGdhbWVDdGwpe1xyXG4gICAgICAgIHRoaXMuZ2FtZUN0bCA9IGdhbWVDdGw7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93KHNjb3JlLGlzV2luKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBpZihpc1dpbil7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0TGFiZWwuc3RyaW5nID0gJ1lPVSBXSU4hJztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHRMYWJlbC5zdHJpbmcgPSAnR0FNRSBPVkVSJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9J0ZpbmFsIFNjb3JlOiAnKyBzY29yZTtcclxuICAgIH0sXHJcblxyXG4gICAgb25CdG5SZXN0YXJ0KCl7XHJcbiAgICAgICAgdGhpcy5nYW1lQ3RsLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgIHRoaXMuZmlyc3RzdGFydGJ0bi5hY3RpdmU9ZmFsc2U7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a337308uxxJva7vh8G06q7Z', 'main');
// scripts/main.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    pause: cc.Label,
    gameView: require('view'),
    ball1: require('Ball1'),
    ball2: require('Ball2'),
    ball3: require('Ball3'),
    firststart: require('firststart'),
    paddle: require('board'),
    brickLayout: require('bricks'),
    overPanel: require('gameover'),
    score: 0,
    bricksNumber: 0
  },
  onLoad: function onLoad() {
    this.score = 0;
    this.bricksNumber = 50;
    this.physicsManager = cc.director.getPhysicsManager();
    this.physicsManager.enabled = true;
    this.gameView.init(this);
    this.paddle.init();
    this.overPanel.init(this);
    this.firststart.init(this);
  },
  startGame: function startGame() {
    this.bricksNumber = 50;
    this.score = 0;
    this.physicsManager.enabled = true;
    this.gameView.init(this);
    this.ball1.init(this);
    this.ball2.init(this);
    this.ball3.init(this);
    this.paddle.init();
    this.brickLayout.init(this.bricksNumber);
    this.overPanel.init(this);
  },
  stopGame: function stopGame() {
    this.physicsManager.enabled = false;
    this.overPanel.show(this.score, this.bricksNumber === 0);
  },
  onBallContactBrick: function onBallContactBrick(ballNode, brickNode) {
    brickNode.parent = null;
    this.addScore(1);
    this.minusBrick(1);
    this.gameView.updateScore(this.score);

    if (this.bricksNumber <= 0) {
      this.stopGame();
    }
  },
  onBallContactGround: function onBallContactGround(ballNode, groundNode) {
    this.stopGame();
  },
  onDestroy: function onDestroy() {
    this.physicsManager.enabled = false;
  },
  addScore: function addScore(score) {
    this.score += score;
  },
  minusBrick: function minusBrick(n) {
    this.bricksNumber -= n;
  },
  pause_: function pause_() {
    this.physicsManager.enabled = !this.physicsManager.enabled;
    if (this.physicsManager.enabled) this.pause.string = 'Pause';else this.pause.string = 'Continue';
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFpbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBhdXNlIiwiTGFiZWwiLCJnYW1lVmlldyIsInJlcXVpcmUiLCJiYWxsMSIsImJhbGwyIiwiYmFsbDMiLCJmaXJzdHN0YXJ0IiwicGFkZGxlIiwiYnJpY2tMYXlvdXQiLCJvdmVyUGFuZWwiLCJzY29yZSIsImJyaWNrc051bWJlciIsIm9uTG9hZCIsInBoeXNpY3NNYW5hZ2VyIiwiZGlyZWN0b3IiLCJnZXRQaHlzaWNzTWFuYWdlciIsImVuYWJsZWQiLCJpbml0Iiwic3RhcnRHYW1lIiwic3RvcEdhbWUiLCJzaG93Iiwib25CYWxsQ29udGFjdEJyaWNrIiwiYmFsbE5vZGUiLCJicmlja05vZGUiLCJwYXJlbnQiLCJhZGRTY29yZSIsIm1pbnVzQnJpY2siLCJ1cGRhdGVTY29yZSIsIm9uQmFsbENvbnRhY3RHcm91bmQiLCJncm91bmROb2RlIiwib25EZXN0cm95IiwibiIsInBhdXNlXyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRUosRUFBRSxDQUFDSyxLQURGO0FBRVJDLElBQUFBLFFBQVEsRUFBRUMsT0FBTyxDQUFDLE1BQUQsQ0FGVDtBQUdSQyxJQUFBQSxLQUFLLEVBQUVELE9BQU8sQ0FBQyxPQUFELENBSE47QUFJUkUsSUFBQUEsS0FBSyxFQUFFRixPQUFPLENBQUMsT0FBRCxDQUpOO0FBS1JHLElBQUFBLEtBQUssRUFBRUgsT0FBTyxDQUFDLE9BQUQsQ0FMTjtBQU1SSSxJQUFBQSxVQUFVLEVBQUVKLE9BQU8sQ0FBQyxZQUFELENBTlg7QUFPUkssSUFBQUEsTUFBTSxFQUFFTCxPQUFPLENBQUMsT0FBRCxDQVBQO0FB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Q0FBL0IsS0FDSyxLQUFLbEMsS0FBTCxDQUFXa0MsTUFBWCxHQUFrQixVQUFsQjtBQUNSO0FBaEZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHBhdXNlOiBjYy5MYWJlbCxcclxuICAgICAgICBnYW1lVmlldzogcmVxdWlyZSgndmlldycpLFxyXG4gICAgICAgIGJhbGwxOiByZXF1aXJlKCdCYWxsMScpLFxyXG4gICAgICAgIGJhbGwyOiByZXF1aXJlKCdCYWxsMicpLFxyXG4gICAgICAgIGJhbGwzOiByZXF1aXJlKCdCYWxsMycpLFxyXG4gICAgICAgIGZpcnN0c3RhcnQ6IHJlcXVpcmUoJ2ZpcnN0c3RhcnQnKSxcclxuICAgICAgICBwYWRkbGU6IHJlcXVpcmUoJ2JvYXJkJyksXHJcbiAgICAgICAgYnJpY2tMYXlvdXQ6IHJlcXVpcmUoJ2JyaWNrcycpLFxyXG4gICAgICAgIG92ZXJQYW5lbDogcmVxdWlyZSgnZ2FtZW92ZXInKSxcclxuICAgICAgICBzY29yZTowLFxyXG4gICAgICAgIGJyaWNrc051bWJlcjowLFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmJyaWNrc051bWJlciA9IDUwO1xyXG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nYW1lVmlldy5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMucGFkZGxlLmluaXQoKTtcclxuICAgICAgICB0aGlzLm92ZXJQYW5lbC5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZmlyc3RzdGFydC5pbml0KHRoaXMpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuYnJpY2tzTnVtYmVyID0gNTA7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhbWVWaWV3LmluaXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5iYWxsMS5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYmFsbDIuaW5pdCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJhbGwzLmluaXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5wYWRkbGUuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuYnJpY2tMYXlvdXQuaW5pdCh0aGlzLmJyaWNrc051bWJlcik7XHJcbiAgICAgICAgdGhpcy5vdmVyUGFuZWwuaW5pdCh0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RvcEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlci5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vdmVyUGFuZWwuc2hvdyh0aGlzLnNjb3JlLCB0aGlzLmJyaWNrc051bWJlciA9PT0gMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQmFsbENvbnRhY3RCcmljayhiYWxsTm9kZSwgYnJpY2tOb2RlKSB7XHJcbiAgICAgICAgYnJpY2tOb2RlLnBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hZGRTY29yZSgxKTtcclxuICAgICAgICB0aGlzLm1pbnVzQnJpY2soMSk7XHJcbiAgICAgICAgdGhpcy5nYW1lVmlldy51cGRhdGVTY29yZSh0aGlzLnNjb3JlKTtcclxuICAgICAgICBpZiAodGhpcy5icmlja3NOdW1iZXIgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BHYW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkJhbGxDb250YWN0R3JvdW5kKGJhbGxOb2RlLCBncm91bmROb2RlKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wR2FtZSgpO1xyXG4gICAgfSxcclxuXHJcblxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRkU2NvcmUoc2NvcmUpe1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gc2NvcmU7XHJcbiAgICB9LFxyXG5cclxuICAgIG1pbnVzQnJpY2sobil7XHJcbiAgICAgICAgdGhpcy5icmlja3NOdW1iZXIgLT0gbjtcclxuICAgIH0sXHJcblxyXG4gICAgcGF1c2VfKCl7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlci5lbmFibGVkID0gISh0aGlzLnBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQpO1xyXG4gICAgICAgIGlmKHRoaXMucGh5c2ljc01hbmFnZXIuZW5hYmxlZCl0aGlzLnBhdXNlLnN0cmluZz0nUGF1c2UnO1xyXG4gICAgICAgIGVsc2UgdGhpcy5wYXVzZS5zdHJpbmc9J0NvbnRpbnVlJ1xyXG4gICAgfVxyXG5cclxufSk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Ball1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4574auBLBVOtKn3wpewbEGW', 'Ball1');
// scripts/Ball1.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init(gameCtl) {
    this.gameCtl = gameCtl;
    this.node.position = cc.v2(-380, 580); //初始化位置

    this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0); //初始化速度
  },
  onBeginContact: function onBeginContact(contact, self, other) {
    switch (other.tag) {
      //碰到砖块
      case 1:
        this.gameCtl.onBallContactBrick(self.node, other.node);
        break;
      //碰到地面

      case 2:
        this.gameCtl.onBallContactGround(self.node, other.node);
        break;
      //碰到托盘

      case 3:
        this.gameCtl.onBallContactPaddle(self.node, other.node);
        break;
      //碰到墙

      case 4:
        this.gameCtl.onBallContactWall(self.node, other.node);
        break;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmFsbDEuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImluaXQiLCJnYW1lQ3RsIiwibm9kZSIsInBvc2l0aW9uIiwidjIiLCJnZXRDb21wb25lbnQiLCJSaWdpZEJvZHkiLCJsaW5lYXJWZWxvY2l0eSIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGYiLCJvdGhlciIsInRhZyIsIm9uQmFsbENvbnRhY3RCcmljayIsIm9uQmFsbENvbnRhY3RHcm91bmQiLCJvbkJhbGxDb250YWN0UGFkZGxlIiwib25CYWxsQ29udGFjdFdhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLElBSEssZ0JBR0FDLE9BSEEsRUFHUztBQUNWLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsUUFBVixHQUFxQk4sRUFBRSxDQUFDTyxFQUFILENBQU0sQ0FBQyxHQUFQLEVBQVcsR0FBWCxDQUFyQixDQUZVLENBRTJCOztBQUNyQyxTQUFLQyxZQUFMLENBQWtCUixFQUFFLENBQUNTLFNBQXJCLEVBQWdDQyxjQUFoQyxHQUFpRFYsRUFBRSxDQUFDTyxFQUFILENBQU0sQ0FBTixFQUFRLENBQVIsQ0FBakQsQ0FIVSxDQUdrRDtBQUMvRCxHQVBJO0FBU0xJLEVBQUFBLGNBVEssMEJBU1VDLE9BVFYsRUFTbUJDLElBVG5CLEVBU3lCQyxLQVR6QixFQVNnQztBQUNqQyxZQUFRQSxLQUFLLENBQUNDLEdBQWQ7QUFDSTtBQUNBLFdBQUssQ0FBTDtBQUNJLGFBQUtYLE9BQUwsQ0FBYVksa0JBQWIsQ0FBZ0NILElBQUksQ0FBQ1IsSUFBckMsRUFBMkNTLEtBQUssQ0FBQ1QsSUFBakQ7QUFDQTtBQUNKOztBQUNBLFdBQUssQ0FBTDtBQUNJLGFBQUtELE9BQUwsQ0FBYWEsbUJBQWIsQ0FBaUNKLElBQUksQ0FBQ1IsSUFBdEMsRUFBNENTLEtBQUssQ0FBQ1QsSUFBbEQ7QUFDQTtBQUNKOztBQUNBLFdBQUssQ0FBTDtBQUNJLGFBQUtELE9BQUwsQ0FBYWMsbUJBQWIsQ0FBaUNMLElBQUksQ0FBQ1IsSUFBdEMsRUFBNENTLEtBQUssQ0FBQ1QsSUFBbEQ7QUFDQTtBQUNKOztBQUNBLFdBQUssQ0FBTDtBQUNJLGFBQUtELE9BQUwsQ0FBYWUsaUJBQWIsQ0FBK0JOLElBQUksQ0FBQ1IsSUFBcEMsRUFBMENTLEtBQUssQ0FBQ1QsSUFBaEQ7QUFDQTtBQWhCUjtBQWtCSDtBQTVCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgaW5pdChnYW1lQ3RsKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ3RsID0gZ2FtZUN0bDtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MigtMzgwLDU4MCk7Ly/liJ3lp4vljJbkvY3nva5cclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwwKTsvL+WIneWni+WMlumAn+W6plxyXG4gICAgfSxcclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIHN3aXRjaCAob3RoZXIudGFnKSB7XHJcbiAgICAgICAgICAgIC8v56Kw5Yiw56CW5Z2XXHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUN0bC5vbkJhbGxDb250YWN0QnJpY2soc2VsZi5ub2RlLCBvdGhlci5ub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvL+eisOWIsOWcsOmdolxyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDdGwub25CYWxsQ29udGFjdEdyb3VuZChzZWxmLm5vZGUsIG90aGVyLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8v56Kw5Yiw5omY55uYXHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUN0bC5vbkJhbGxDb250YWN0UGFkZGxlKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy/norDliLDloplcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ3RsLm9uQmFsbENvbnRhY3RXYWxsKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/view.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4735UW3lFPMoW0rK22obsG', 'view');
// scripts/view.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    scoreLabel: cc.Label
  },
  init: function init(gameCtl) {
    this.gameCtl = gameCtl;
    this.scoreLabel.string = '0';
  },
  updateScore: function updateScore(score) {
    this.scoreLabel.string = score;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlldy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNjb3JlTGFiZWwiLCJMYWJlbCIsImluaXQiLCJnYW1lQ3RsIiwic3RyaW5nIiwidXBkYXRlU2NvcmUiLCJzY29yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBQ0osRUFBRSxDQUFDSztBQUROLEdBSFA7QUFPTEMsRUFBQUEsSUFQSyxnQkFPQUMsT0FQQSxFQU9RO0FBQ1QsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0gsVUFBTCxDQUFnQkksTUFBaEIsR0FBeUIsR0FBekI7QUFDSCxHQVZJO0FBWUxDLEVBQUFBLFdBWkssdUJBWU9DLEtBWlAsRUFZYTtBQUNkLFNBQUtOLFVBQUwsQ0FBZ0JJLE1BQWhCLEdBQXlCRSxLQUF6QjtBQUNIO0FBZEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzY29yZUxhYmVsOmNjLkxhYmVsLFxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0KGdhbWVDdGwpe1xyXG4gICAgICAgIHRoaXMuZ2FtZUN0bCA9IGdhbWVDdGw7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9ICcwJztcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlU2NvcmUoc2NvcmUpe1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBzY29yZTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
