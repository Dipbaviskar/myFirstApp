import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public myForm!: FormGroup;

  ngOnInit(): void {
   this.myForm = new FormGroup({
      'name' : new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'phone' : new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
        ]),
      'gender' : new FormControl(null, [Validators.required]),
      'Password' : new FormControl(null, [Validators.required])
    });
    }
  
    clicksub() {
      console.log(this.myForm.value);
      this.myForm.reset();
    }
    get name() {
      return this.myForm.get('name');
    }
    get email() {
      return this.myForm.get('email');
    }
    get phone() {
      return this.myForm.get('phone');
    }
    get gender() {
      return this.myForm.get('gender');
    }
    get Password() {
      return this.myForm.get('Password');
    }
  
  }
