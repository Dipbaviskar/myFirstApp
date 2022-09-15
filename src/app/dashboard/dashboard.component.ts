import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userservice:UserService) { }
  users:any
  ngOnInit(): void {
    this.userservice.getuser().subscribe((data)=>{
      this.users=data;
    })
  }

}
