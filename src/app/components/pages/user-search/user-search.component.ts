
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  users:User[];
  username:string='';

  constructor(private searchService:SearchService){ }

  ngOnInit(): void {
    
  }

  getUserInf () {
    let list = []
    this.searchService.getUserSearch(this.username).subscribe(data =>{
      list.push(data)
    })
    this.users=list
  }

}