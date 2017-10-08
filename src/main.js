import Phaser from 'phaser-ce'
import mainState from './state'

const game = new Phaser.Game(400, 450)
game.state.add('main', mainState)
game.state.start('main')
