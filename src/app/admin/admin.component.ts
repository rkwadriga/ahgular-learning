import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    constructor(
        private readonly route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        console.log(this.route.snapshot.paramMap.get('id'));
    }
}
