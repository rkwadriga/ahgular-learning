import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {AdminComponent} from "./admin/admin.component";
import {ChildAComponent} from "./child-a/child-a.component";
import {ChildBComponent} from "./child-b/child-b.component";

const routes: Routes = [
    {
        path: "user",
        component: UserComponent
    },
    {
        path: 'admin/:id',
        component: AdminComponent,
        children: [
            {
                path: "child-a",
                component: ChildAComponent
            },
            {
                path: "child-b",
                component: ChildBComponent
            }
        ]
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
