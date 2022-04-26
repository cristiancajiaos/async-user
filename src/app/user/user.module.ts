import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UsersComponent } from './users/users.component';
import { IndividualUserComponent } from './individual-user/individual-user.component';
import { UserDetailComponent } from './individual-user/user-detail/user-detail.component';
import { AddressComponent } from './individual-user/address/address.component';
import { CompanyComponent } from './individual-user/company/company.component';


@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    IndividualUserComponent,
    UserDetailComponent,
    AddressComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
