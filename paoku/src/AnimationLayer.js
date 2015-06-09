/**
 * Created by qoocc03 on 15/6/9.
 */
var AnimationLayer = cc.Layer.extend({
    ctor:function(){
        this._super()
        this.init()
    },
    init:function(){
        this._super()
        var winSize = cc.director.getWinSize()
        var runner = cc.Sprite.create(res.runner_png)
        runner.attr(
            {
                x: 80,
                y: 85
            }
        )
        var actionTo = cc.MoveTo.create(2,cc.p(300,85))
        runner.runAction(actionTo)
        this.addChild(runner)

    }
});