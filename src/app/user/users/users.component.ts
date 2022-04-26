import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Observable<User[]>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

}
