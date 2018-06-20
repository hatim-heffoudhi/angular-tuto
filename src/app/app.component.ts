import {Component, OnInit} from '@angular/core';
import {DefaultService, User} from './swagger/v1';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  users$: Observable<User[]>;

  constructor(private defaultService: DefaultService) {

  }

  ngOnInit() {

    this.users$ = this.defaultService.getUsers();
  }

}
