import { Component, Input , Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'timer',
    templateUrl: './timer.html'
})


export class Timer {
    @Input() units: any;
    @Input() end: any;
    @Input() displayString: string = '';
    @Input() text: any;
    @Output() timerEnded: EventEmitter<any> = new EventEmitter();
    
    private hours;
    private minutes;
    private seconds;
    private interval;
    private now;
    private running;
    

    constructor() {
        this.interval = setInterval(() => this._displayString(), 1);
    }

    _displayString() {
        
        this.now = new Date().getTime();

        if (typeof this.units === 'string') {
            this.units = this.units.split('|');
        }
        
        if(this.end <= this.now){
            clearInterval(this.interval);
            this.timerEnded.emit(null);
            this.running = false;
        }else{
            this.running = true;
        }

        var dateDifference = Math.abs(this.end - new Date().getTime());
        var lastUnit = this.units[this.units.length - 1];
        
        
        this.seconds = this.twoDigits(Math.floor((dateDifference / 1000) % 60));
        this.minutes = this.twoDigits(Math.floor(dateDifference / 60000));
    }
    
    twoDigits(number){
        if(number >= 10){
           return number; 
        }
        return ('0' + number);
    }
}
