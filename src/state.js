import Phaser from 'phaser-ce'
import game from './main'

const mainState = {
  preload () {
    game.load.image('paddle', 'assets/paddle.png')
    game.load.image('brick', 'assets/box.png')
    game.load.image('ball', 'assets/ball.png')
  },

  create () {
    game.stage.backgroundColor = '#3598db'
    game.physics.startSystem(Phaser.Physics.ARCADE)
    game.world.enableBody = true

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

    this.ball = game.add.sprite(200, 200, 'ball')

    this.ball.body.velocity.x = 200
    this.ball.body.velocity.y = 200

    this.ball.body.bounce.setTo(1)
    this.ball.body.collideWorldBounds = true
  },

  update () {
    if (this.left.isDown) this.paddle.body.velocity.x = -300
    else if (this.right.isDown) this.paddle.body.velocity.x = 300
    else this.paddle.body.velocity.x = 0
  }
}

export default mainState
