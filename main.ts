let wait = 0;
let time: number = 0;
let waitontime = 0;
let z: number;
let mil:number = 0;
let mil2:number = 0;
let milsum: number;
let ligt:number;
while (true) {

   if (input.logoIsPressed()) {
        for (let x = 3; x >= 1; x--) {
            basic.showNumber(x)
            basic.pause(500)  
        }
        
        basic.showIcon(IconNames.Heart)

        basic.pause(randint(2000, 8000))
       music.play(music.tonePlayable(Note.C, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
       basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
       mil = control.millis()
       ligt = input.lightLevel()
       
       }
    if (input.buttonIsPressed(Button.A)) {
        mil2 = control.millis()
        milsum = mil2 - mil
        if (milsum < 2000) {
            basic.showNumber(milsum)
            }
    }
       
}
    

 
   











