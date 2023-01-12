let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . 2 . . 
    . 2 . 2 2 2 2 2 2 2 2 . . 2 . . 
    . 2 . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 8 8 8 . . . . . . . . 
    . . . . 8 8 8 8 8 . . . . . . . 
    . . . 8 8 8 8 8 8 8 . . . . . . 
    . . . 8 8 8 8 8 8 8 . . . . . . 
    . . . 8 8 8 8 8 8 8 . d d d 2 . 
    . . . 8 8 8 8 8 8 . . . e . . . 
    . . . . 8 8 8 8 . . . . e . . . 
    . . . . . . 8 . . . . . e . . . 
    . . . . . . 8 8 8 8 8 8 8 . . . 
    . . 8 8 8 8 8 . . . . . . . . . 
    . . . . . . 8 . . . . . . . . . 
    . . . . . . 8 . . . . . . . . . 
    . . . . . 8 8 8 . . . . . . . . 
    . . . . 8 8 . 8 8 . . . . . . . 
    . . . 8 8 . . . 8 8 . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
myEnemy.follow(mySprite, 75)
myEnemy.x = 0
game.onUpdate(function () {
    if (mySprite.overlapsWith(myEnemy)) {
        game.over(false)
    }
})
forever(function () {
    info.changeScoreBy(1)
})
