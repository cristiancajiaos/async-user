import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UsersComponent } from './users/users.component';
import { IndividualUserComponent } from './individual-user/individual-user.component';


@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    IndividualUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
