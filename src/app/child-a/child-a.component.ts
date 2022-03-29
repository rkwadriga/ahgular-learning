import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-child-a',
    templateUrl: './child-a.component.html',
    styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit {
    nameInput = '';
    validationForm = new FormGroup({
        name: new FormControl(this.nameInput, [
            Validators.required,
            Validators.minLength(4)
        ])
    });

    constructor() { }

    ngOnInit(): void {
    }

    get name() {
        return this.validationForm.get('name');
    }
}
