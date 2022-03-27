import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'Hello world!';

    intervalSub: any;

    public ngOnInit(): void {
        this.intervalSub = setInterval(() => {
            console.log('Hello from hell!');
        }, 1000);
    }

    public ngOnDestroy(): void {
        if (this.intervalSub) {
            clearInterval(this.intervalSub);
        }
    }

    public getMin(a: number, b: number): number {
        return a < b ? a : b;
    }
}
