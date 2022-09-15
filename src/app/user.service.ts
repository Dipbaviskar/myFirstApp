import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/";

  constructor( private http:HttpClient) 
  { }
  getuser(){
   return this.http.get<UserInterface>(this.url +"users.json") 
  }
  getUserDetails()
  {
    return this.http.get<UserInterface>(this.url +"user-profile.json")
  }
}
