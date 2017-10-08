import Phaser from 'phaser-ce'
import game from './main'

const mainState = {
  preload () {
    game.load.image('paddle', 'assets/paddle.png')
<<<<<<< 01a7ec5329ba663af69619f4c127391dca6ccab2
<<<<<<< 29db218457f6382d280b8d4e0633925a088006c7
    game.load.image('brick', 'assets/box.png')
=======
>>>>>>> adds paddle with controls
=======
    game.load.image('brick', 'assets/box.png')
>>>>>>> add bricks
  },

  create () {
    game.stage.backgroundColor = '#3598db'
    game.physics.startSystem(Phaser.Physics.ARCADE)
    game.world.enableBody = true
<<<<<<< 29db218457f6382d280b8d4e0633925a088006c7

    this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
    this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)

    this.paddle = game.add.sprite(200, 400, 'paddle')
    this.paddle.body.immovable = true

    this.bricks = game.add.group()

    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        const x = (i * 60) + 55
        const y = (j * 35) + 55
        const brick = game.add.sprite(x, y, 'brick')
        brick.body.immovable = true
        this.bricks.add(brick)
      }
    }
<<<<<<< 01a7ec5329ba663af69619f4c127391dca6ccab2
=======

    this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
    this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)

    this.paddle = game.add.sprite(200, 400, 'paddle')
    this.paddle.body.immovable = true
>>>>>>> adds paddle with controls
=======
>>>>>>> add bricks
  },

  update () {
    if (this.left.isDown) this.paddle.body.velocity.x = -300
    else if (this.right.isDown) this.paddle.body.velocity.x = 300
    else this.paddle.body.velocity.x = 0
  }
}

export default mainState
