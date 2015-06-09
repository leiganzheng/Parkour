/**
 * Created by qoocc03 on 15/6/9.
 */
var StatusLayer = cc.Layer.extend({
    ctor:function(){
        this._super()
        this.init()
    },
    init:function(){
        this._super()
        var winSize = cc.director.getWinSize()

        this.labelCoin = cc.LabelTTF.create("Coins:0", "Helvetica", 20);
        this.labelCoin.setColor(cc.color(0,0,0));//black color
        this.labelCoin.setPosition(cc.p(70, winSize.height - 20));
        this.addChild(this.labelCoin);

        this.labelMeter = cc.LabelTTF.create("0M", "Helvetica", 20);
        this.labelMeter.setPosition(cc.p(winSize.width - 70, winSize.height - 20));
        this.addChild(this.labelMeter);
    }
});