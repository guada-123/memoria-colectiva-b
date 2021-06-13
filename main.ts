input.onButtonPressed(Button.A, function () {
    basic.showNumber(5 + 1)
    basic.pause(500)
    music.playTone(131, music.beat(BeatFraction.Double))
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(5 * 1)
    basic.pause(100)
    music.playTone(523, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(5 - 1)
    basic.pause(100)
    music.playTone(247, music.beat(BeatFraction.Whole))
})
