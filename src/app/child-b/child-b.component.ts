import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {LogService} from "../log.service";
import {DataService} from "./data.service";

@Component({
    selector: 'app-child-b',
    templateUrl: './child-b.component.html',
    styleUrls: ['./child-b.component.css']
})
export class ChildBComponent implements OnInit {

    constructor(
        private readonly route: ActivatedRoute,
        private readonly http: HttpClient,
        private readonly dataService: DataService
    ) { }

    async ngOnInit(): Promise<void> {
        const userID = this.route.snapshot.paramMap.get('id');
        this.dataService.getUser(userID).subscribe(result => {
            console.log(result);
        });
    }
}
