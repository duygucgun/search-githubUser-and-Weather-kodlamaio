import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-github-users-list',
  templateUrl: './github-users-list.component.html',
  styleUrls: ['./github-users-list.component.css']
})
export class GithubUsersListComponent implements OnInit {
  users:User[];



  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUserInf();
  }

  getUserInf () {
    this.userService.getUsers().subscribe(data =>{
      this.users = data
    })
  }

}
