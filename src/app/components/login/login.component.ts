import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  formLogin!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }


  ngAfterViewInit(): void {
    const iconEye: HTMLElement | null = document.querySelector('.icon-eye');
    const passwordInput: HTMLInputElement | null = iconEye?.nextElementSibling as HTMLInputElement;
  
    iconEye?.addEventListener('click', () => {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        iconEye.querySelector("i")?.classList.replace("fa-eye-slash", "fa-eye");
      } else {
        passwordInput.type = "password";
        iconEye.querySelector("i")?.classList.replace("fa-eye", "fa-eye-slash");
      }
    });
  }
  

  validate() {

  }
}
