/*-----------------------------------
Name: Kaylie Lepley
Endless Runner: "No Poon!"
Project time: 35 Hours
*------------------------------------

/*---------------------------------------
//CREATIVE TILT//
This is the first 'official' game that I have made completley on my own and I'm quite content with how it turned out,
especially because I had no prior experience with JavaScript and or Phaser whatsoever. I had a lot of fun making the assets
for my game but should probably work on my art a bit more. The main part of my creative tilt is showcased in the insspiration
behind my game. The fish, "Poon", is based off my youngest sister "Paris" who is a year old and resembles the Studio Ghibli character
quite closely (hence her nickname Ponyo). She has a weird obsession with stealing my granndma's phone and so the game basically
mirrors my younger sister running away from my grandma (who in this game is "Grandma Shark"). The waves of enemy fish, or the
"grand fish" represent my other two siblings, as well as myself. We also, often find our phones getting stolen from baby Ponyo.

The game itself is a basic "avoid the obstacles and survive for as long as you can" type game and I inputted a lot of cool sounds
and a randomly generated terrain of obstacles. The game even has my younger sister's real laugh that plays as a sound effect
everytime the player loses, which I find cute. I do plan on making this game better even after this class is over with. I also want
to learn how to properly use prefabs so that I can clean up my code a bit and possibly even use this project within my resume.

I believe I properly implemented all of the required elements for the assignment in my endless runner and got a lot
of the documentation from Phaser's offcial page itself, as well as from Professor Nathan's git and examples. I'm also
especially pround of the Zigzag swimming pattern I gave to the Grandma Shark Character. Lastly, I would
also like to give a thanks to both TA's as they were also incredibly helpful within the process. 
------------------------------------------*/

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [Menu, SceneStart1, Level1, SceneStart2, Level2, BossStart, BossLevel, GameOver ]
}

let cursors
let game = new Phaser.Game(config);

let { height, width } = game.config

// setting UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3
