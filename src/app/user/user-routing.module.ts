import { UserComponent } from './user.component';
import { IndividualUserComponent } from './individual-user/individual-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: UserComponent},
  { path: 'users', component: UsersComponent},
  { path: ':id', component: IndividualUserComponent },
  { path: '**', redirectTo: '1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
