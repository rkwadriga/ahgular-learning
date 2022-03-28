import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-app-sizer',
    templateUrl: './app-sizer.component.html',
    styleUrls: ['./app-sizer.component.css']
})
export class AppSizerComponent implements OnInit {
    @Input() size: number;
    @Output() sizeChange = new EventEmitter<number>();

    constructor() {
        this.size = 0;
    }

    ngOnInit(): void {
    }

    dec() {
        this.resize(-1);
    }

    inc() {
        this.resize(1);
    }

    private resize(delta: number) {
        if (this.size > 8 && this.size < 40) {
            this.size += delta;
        }
        this.sizeChange.emit(this.size);
    }
}
