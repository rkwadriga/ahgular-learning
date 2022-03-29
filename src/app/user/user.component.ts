import {Component, OnInit, Input, Renderer2, ElementRef} from '@angular/core';
import {LogService} from "../log.service";

interface User {
    name: string,
    avatar: string
};

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    @Input() users: User[] = [];

    constructor(
        private readonly logger: LogService,
        private readonly renderer: Renderer2,
        private readonly host: ElementRef
    ) { }

    ngOnInit(): void {
        this.logger.log('Hello from user component');
        this.renderer.setStyle(this.host.nativeElement, 'color', 'blue');
    }
}
