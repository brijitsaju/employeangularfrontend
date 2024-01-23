import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:"",component:LoginComponent,
},
{
  path:"dashboard",component:DashboardComponent,canActivate:[authGuard]
},
{
  path:"users",component:UsersComponent
},
{
  path:"employees",component:ListComponent,canActivate:[authGuard]
},
{
  path:"employee/add",component:AddComponent
},
{
  path:"employee/edit/:id",component:EditUserComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
