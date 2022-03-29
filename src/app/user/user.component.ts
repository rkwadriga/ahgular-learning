import {Component, OnInit} from '@angular/core';
import {LogService} from "../log.service";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    users = [
        {
            name: 'Monika',
            avatar: 'http://localhost:3000/public/img/0015/15/e6f96024d40a3.jpeg'
        },
        {
            name: 'Sonika',
            avatar: 'http://localhost:3000/public/img/0017/17/4d257364618b7.jpeg'
        },
        {
            name: 'Ebonika',
            avatar: 'http://localhost:3000/public/img/0018/18/e1841c53b871e.jpeg'
        }
    ];

    constructor(
        private readonly logger: LogService
    ) { }

    ngOnInit(): void {
        this.logger.log('Hello from user component');
    }
}
