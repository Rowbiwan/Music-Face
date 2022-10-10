input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 G A F G E D C5 ", 132)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
})
music.playTone(262, music.beat(BeatFraction.Whole))
music.playTone(349, music.beat(BeatFraction.Whole))
music.playTone(392, music.beat(BeatFraction.Whole))
