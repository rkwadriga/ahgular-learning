import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ImgSizeDirective } from './user/img-size.directive';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';

@NgModule({
declarations: [
        AppComponent,
        ImgSizeDirective,
        UserComponent,
        AdminComponent,
        ChildAComponent,
        ChildBComponent,
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
