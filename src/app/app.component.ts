import { Component, OnInit } from '@angular/core';
import {Pet} from './pet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    species = ['dog', 'cat', 'woman'];
    model = new Pet(1, 'Goldie', this.species[2]);
    submitted = false;

    ngOnInit() {

    }

    onSubmit() {
        this.submitted = true;
        console.log(this.model);
    }
}
