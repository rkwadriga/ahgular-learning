import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-child-a',
    templateUrl: './child-a.component.html',
    styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit {
    name = new FormControl();

    constructor() { }

    ngOnInit(): void {
    }

    updateName() {
        this.name.setValue('Nancy');
    }
}
