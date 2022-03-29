import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
    {
        path: "user",
        component: UserComponent
    },
    {
        path: 'admin/:id',
        component: AdminComponent
    },
    {
        path: "**",
        component: UserComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
