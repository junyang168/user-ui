import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';
import { NgxSpinnerService } from "ngx-spinner";  



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  name_filter: string = "";
  age_filter: string = "";

  users: User[] = [];

  sorter: any;

  constructor(
    public rest: UserService,
    private SpinnerService: NgxSpinnerService    
  ) { 

    this.sorter = this;
  }


  ngOnInit(): void {
    this.searchUser();
  }

  sortUsers(field :string , order :string): void {
    this.SpinnerService.show(); 
    this.rest.getUsers(this.name_filter, this.age_filter, field, order).subscribe((resp: any) => {
      this.users = resp;
//      console.log(this.users);
      this.SpinnerService.hide(); 
    });

  }


  searchUser(): void {
//    this.SpinnerService.show(); 
    this.rest.getUsers(this.name_filter, this.age_filter, "", "").subscribe((resp: any) => {
      this.users = resp;
//      console.log(this.users);
      this.SpinnerService.hide(); 
    });
};
}
