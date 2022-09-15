import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
   private userservice:UserService
  ) { }
    userDetails:any

  ngOnInit(): void {
    this.userservice.getUserDetails().subscribe((data)=>{
      this.userDetails=data;
      console.log(data);
      
    })
  }
}
