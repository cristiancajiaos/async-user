import { UserService } from './../user.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-individual-user',
  templateUrl: './individual-user.component.html',
  styleUrls: ['./individual-user.component.scss'],
})
export class IndividualUserComponent implements OnInit {
  id: string;
  user: Observable<User>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params?.subscribe((params) => {
      if (params) {
        this.id = params['id'];
        this.getUser();
      }
    });
  }

  getUser() {
    this.user = this.userService.getUser(this.id);
  }
}
