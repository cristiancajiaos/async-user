import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  id: string;
  user: Observable<User>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params?.subscribe(params => {
      if (params) {
        this.id = params["id"];
        this.getUser();
      }
    });
  }

  getUser() {
    this.user = this.userService.getUser(this.id);
  }

}
