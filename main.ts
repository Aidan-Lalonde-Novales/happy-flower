let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . f f f f f f f f . . . . 
    . . f f 2 2 2 2 2 2 2 2 f f . . 
    . f 2 2 2 4 4 4 4 4 4 2 2 2 f . 
    f 2 2 4 4 5 5 5 5 5 5 4 4 2 2 f 
    f 2 4 4 5 1 1 1 1 1 1 5 4 4 2 f 
    f 2 2 4 4 5 5 5 5 5 5 4 4 2 2 f 
    . f 2 2 2 4 4 4 4 4 4 2 2 2 f . 
    . . f f 2 2 2 2 2 2 2 2 f f . . 
    . . . . f f f f f f f f . . . . 
    . f f . . . f 7 7 f . . . f f . 
    f 7 7 f f . f 7 7 f . f f 7 7 f 
    f 7 7 7 7 f f 7 7 f f 7 7 7 7 f 
    f 7 7 7 7 7 f 7 7 f 7 7 7 7 7 f 
    . f 7 7 7 7 f 7 7 f 7 7 7 7 f . 
    . . f f 7 7 7 7 7 7 7 7 f f . . 
    . . . . f f f f f f f f . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . f . . . . 
        . . . . . . . . . . f . . . . . 
        . . . . . . . . f f f . . . f . 
        . . . . f f f f 5 5 5 f f . f . 
        . . . f f 5 f 5 f 5 5 5 5 f . . 
        . . f 5 f 5 f 5 f 5 f 5 f 5 f . 
        . . f 5 f 5 f 5 f 5 f 5 f 5 f . 
        f f 5 5 f 5 f 5 f 5 5 5 5 5 f . 
        . . f 5 f 5 f 5 f 5 5 5 5 f . . 
        . . . f f 5 f 5 5 f 5 f f . . . 
        . . . . f f f 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})
