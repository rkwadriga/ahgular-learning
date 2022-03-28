import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    itemImageUrl = 'http://localhost:3000/public/img/0015/15/e6f96024d40a3.jpeg';
    isSpecial = true;
    currentClasses = {};
    currentStyle = {};
    name = 'John Doe';

    ngOnInit() {
        this.setCurrentClasses();
        this.setCurrentStyle();
    }

    setCurrentClasses() {
        this.currentClasses = {
            saveable: true,
            modified: false,
            special: true
        };
    }

    setCurrentStyle() {
        this.currentStyle = {
            fontStyle: 'italic',
            fontWeight: 'bold'
        }
    }
}
