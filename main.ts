function setUp () {
    // Start by showing a
    basic.showIcon(IconNames.Heart)
    currentNumber = 0
    allLights.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
}
input.onButtonPressed(Button.A, function () {
    if (runningSequence == false) {
        incrementCounter()
    } else {
        runningSequence = false
        basic.showIcon(IconNames.No)
        music.stopAllSounds()
        pause(2000)
setUp()
    }
})
function runFunction1 () {
    runningSequence = true
    basic.showNumber(1)
    allLights.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Purple))
    while (runningSequence) {
        lLS = Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Left)
        rLS = Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Right)
        lDiff = Math.abs(lLS - rLS)
        if (lDiff > 20) {
            if (lLS > rLS) {
                Kitronik_Move_Motor.motorOff(Kitronik_Move_Motor.Motors.MotorRight)
                Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, 1)
                pause(5)
            } else {
                Kitronik_Move_Motor.motorOff(Kitronik_Move_Motor.Motors.MotorLeft)
                Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, 1)
                pause(5)
            }
        } else {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 1)
            pause(5)
        }
    }
}
function runFunction3 () {
    runningSequence = true
    basic.showNumber(3)
    allLights.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Indigo))
    Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
    while (runningSequence) {
        dS2 = Kitronik_Move_Motor.measure()
        if (dS2 >= 5) {
            rnd4 = Math.floor(Math.random() * 4)
            Kitronik_Move_Motor.stop()
            basic.showNumber(rnd4)
            if (rnd4 == 0) {
                Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 60)
                pause(1000);
            } else if (rnd4 == 1) {
                Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 60)
                pause(1000);
            } else if (rnd4 == 2) {
                Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 80)
                rndLS = Math.floor(Math.random() * (2000 - 100)) + 100
                pause(rndLS)
            } else if (rnd4 == 3) {
                Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 80)
                rndLS = Math.floor(Math.random() * (2000 - 100)) + 100
                pause(rndLS)
            }
        } else {
            Kitronik_Move_Motor.stop()
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 80)
            pause(500);
            
        }
    }
}
input.onButtonPressed(Button.B, function () {
    if (runningSequence == false && currentNumber > 0) {
        
        if (currentNumber == 1) {
            music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
            pause(5000);
runFunction1()
        } else if (currentNumber == 2) {
            //music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
            basic.pause(5000)
            runFunction2()
        } else if (currentNumber == 3) {
            music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
            basic.pause(5000)
            runFunction3()
        }
    }
})
function incrementCounter () {
    currentNumber += 1
    if (currentNumber > 3) {
        currentNumber = 1
    }
    basic.showNumber(currentNumber)
}
function runFunction2 () {
    runningSequence = true
    basic.showNumber(2)
    allLights.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Purple))
    Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
    while (runningSequence) {
        distance = Kitronik_Move_Motor.measure()
        if (distance >= 3) {
            // then we are far enough away
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 40)
        } else {
            Kitronik_Move_Motor.stop()
            // lets go random
            random = Math.floor(Math.random() * 2)
            // Beep horn!!
            Kitronik_Move_Motor.beepHorn()
            Kitronik_Move_Motor.beepHorn()
            allLights.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
            // Should change direction.Go back first a bit! - go back 30
            while (distance <= 15) {
                Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 40)
                distance = Kitronik_Move_Motor.measure()
            }
            // go left
            if (random == 0) {
                Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, 40)
            } else {
                // go right
                Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, 40)
            }
            rnd2 = Math.floor(Math.random() * (1000 - 300)) + 300
            pause(rnd2)
Kitronik_Move_Motor.stop()
            allLights.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Purple))
        }
    }
}
let distance = 0
let rnd4 = 0
let dS2 = 0
let lDiff = 0
let rLS = 0
let lLS = 0
let runningSequence = false
let currentNumber = 0
let allLights: Kitronik_Move_Motor.MoveMotorZIP = null
let rndRS = 0
let rndLS = 0
let bckRnd = 0
let random = 0
let rnd2 = 0
let rnd3 = 0
let fRnd = 0
let mMZ = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
allLights = mMZ.range(0, 4)
setUp()
