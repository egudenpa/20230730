input.onButtonPressed(Button.A, function () {
    KAITEN = 100
    led.plot(1, 0)
    servos.P1.run(KAITEN)
    basic.pause(5000)
    led.unplot(1, 0)
    servos.P1.stop()
})
input.onButtonPressed(Button.B, function () {
    if (FUTA == 0) {
        FUTA = 90
        led.plot(0, 0)
        servos.P0.setAngle(FUTA)
    } else {
        FUTA = 0
        led.unplot(0, 0)
        servos.P0.setAngle(FUTA)
    }
})
let KAITEN = 0
let FUTA = 0
FUTA = 0
KAITEN = 0
basic.forever(function () {
	
})
