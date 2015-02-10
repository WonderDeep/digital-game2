var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create });



function preload () {
    game.load.image('school', 'assets/background2.jpg');
    game.load.image('mainmenu', 'assets/mainmenu.png');
    game.load.image('play', 'assets/play.png');
}

var background;
var play;

function create() {

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen and assign it to a variable
    
    background = game.add.sprite(0, 0, 'mainmenu');
    play = game.add.sprite(150,400, 'play');
  
    //  Enables all kind of input actions on this image (click, etc)
    play.inputEnabled = true;

    play.events.onInputDown.add(listener, this);

}

function listener () {

    background.loadTexture('school',0);
    play.destroy();
}
