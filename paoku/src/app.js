
var MenuLayer = cc.Layer.extend({
    ctor : function(){
        //1. call super class's ctor function
        this._super();
    },
    init:function(){
        //call super class's super function
        this._super();

        //2. get the screen size of your game canvas
        var winsize = cc.director.getWinSize();

        //3. calculate the center point
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

        //4. create a background image and set it's position at the center of the screen
        var spritebg = cc.Sprite.create(res.helloBG_png);
        spritebg.setPosition(centerpos);
        this.addChild(spritebg);

        //5.
        cc.MenuItemFont.setFontSize(60);

        //6.create a menu and assign onPlay event callback to it

        var menuItemPlay = new cc.MenuItemToggle(
            new cc.MenuItemImage(res.start_n_png), // normal state image
            new cc.MenuItemImage(res.start_s_png), //select state image
            this.onPlay, this);

        var menu = new cc.Menu(menuItemPlay);  //7. create the menu
        menu.setPosition(centerpos);
        this.addChild(menu);
    },

    onPlay : function(){
        cc.log("==onplay clicked");
        //var transitionTime = 0.5;
        //var nextScene = new PlayScene();
        //var transitionScene = new cc.TransitionProgressInOut(transitionTime, nextScene);
        //cc.director.runScene(transitionScene);
        cc.director.pushScene(new PlayScene())
    }
});

var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MenuLayer();
        layer.init();
        this.addChild(layer);
    }
});

