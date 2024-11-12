import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';
import { UserCreateDto, UserPublic } from './User';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  currentUser!: UserPublic;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  isCodeValid(): boolean {
    return true;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);

      var user: UserCreateDto = {
        email : this.loginForm.value['email'],
        name : this.loginForm.value['name'],
        password : this.loginForm.value['password']
      }
   
      this.auth.createUser(user).subscribe(data => 
        this.currentUser = {
          name: data.name,
          email:  data.email,
    });

      console.log(this.currentUser);
    }
  }

}
