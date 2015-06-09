/**
 * Created by qoocc03 on 15/6/9.
 */
var BackgroundLayer = cc.Layer.extend({
    ctor:function(){
        this._super()
        this.init()
    },
    init:function(){
        this._super()
        var winSize = cc.director.getWinSize()
        var bg = cc.Sprite.create(res.PlayBG_png)
        bg.setPosition(cc.p(winSize.width / 2,winSize.height / 2))
        this.addChild(bg)
    }
});