import Phaser from 'phaser-ce'
import game from './main'

const mainState = {
  preload () {
    game.load.image('paddle', 'assets/paddle.png')
  },

  create () {
    game.stage.backgroundColor = '#3598db'
    game.physics.startSystem(Phaser.Physics.ARCADE)
    game.world.enableBody = true

    this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
    this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)

    this.paddle = game.add.sprite(200, 400, 'paddle')
    this.paddle.body.immovable = true
  },

  update () {
    if (this.left.isDown) this.paddle.body.velocity.x = -300
    else if (this.right.isDown) this.paddle.body.velocity.x = 300
    else this.paddle.body.velocity.x = 0
  }
}

export default mainState
