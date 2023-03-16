class Clock {
    constructor(hours, minutes, seconds) {
        this.hours = hours || 0;
        this.minutes = minutes || 0;
        this.seconds = seconds || 0;
      }
    
      tick() {
        if (this.seconds === 60) {
          if (this.minutes === 60) {
            if (this.hours === 24) {
              
              return false;
            }
            this.hours++;
            this.minutes = 0;
            this.seconds = 0;
          } else {
            this.minutes++;
            this.seconds = 0;
          }
        } else {
          this.seconds++;
        }
        return true;
      }
    
      getTime() {
        return `${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`;
      }
    
      start() {
        return new Promise((resolve) => {
          const interval = setInterval(() => {
            const isRunning = this.tick();
            console.clear();
            console.log(this.getTime());
    
            if (!isRunning) {
              clearInterval(interval);
             
              resolve();
            }
            
          }, 1000);
        });
      }
    }
    
    const clock = new Clock(14, 25, 32);
    
    
    clock.start().then(() => {
     
    });
    clock.setAlert(14, 25, 25).then((result) => {
        console.log("Zartnel");
     },Errorstart);
     






