

input.onButtonPressed(Button.A, function () {
    if(runningSequence == false){
        incrementCounter()
    }
    else
    {
         runningSequence = false;
        basic.showIcon(IconNames.No);
        music.stopAllSounds();
        pause(2000)
        
        setUp()
    }
})

input.onButtonPressed(Button.B, function () {
    if(runningSequence == false && currentNumber > 0){
    
        basic.showIcon(IconNames.Yes);
         if(currentNumber == 1)
        {
            music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
            
            pause(5000);

            runFunction1();

        }
        else if(currentNumber == 2)
        {
            music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
            basic.pause(5000);
            runFunction2()
        }
        else if(currentNumber == 3)
        {
            
        }
        else if(currentNumber == 4)
        {
            
        }
        else if(currentNumber == 5)
        {
            
        }
        
    }
    
})



function incrementCounter () {
    currentNumber += 1
    if (currentNumber > 5) {
        currentNumber = 1
    }
    basic.showNumber(currentNumber)
}

function setUp()
{
    // Start by showing a
    basic.showIcon(IconNames.Heart)
    currentNumber = 0;
   
    allLights.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
}

let moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)

let allLights = moveMotorZIP.range(0, 4)
let runningSequence = false;
let currentNumber = 0
let leftLineSensor = 0
let rightLineSensor = 0
let lineDifference = 0

setUp()

function runFunction1(){
runningSequence = true;
basic.showNumber(1)
    allLights.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Purple))
    
    while(runningSequence) {
    
    //
    
    
        leftLineSensor = Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Left)
        rightLineSensor = Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Right)
        lineDifference = Math.abs(leftLineSensor - rightLineSensor)
        if (lineDifference > 20 ) {
            if (leftLineSensor > rightLineSensor) {
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

function runFunction2()
{

runningSequence = true;
basic.showNumber(2)
    allLights.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
    while(runningSequence) {
music.playMelody("B B B B B", 200)
         basic.pause(1000)
    }
}




