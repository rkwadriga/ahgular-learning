import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { GreetingsPipe } from './greetings.pipe';
import { ItemComponent } from './item/item.component';
import { AppSizerComponent } from './app-sizer/app-sizer.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
declarations: [
        AppComponent,
        ParentComponent,
        ChildComponent,
        GreetingsPipe,
        ItemComponent,
        AppSizerComponent,
        HighlightDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
