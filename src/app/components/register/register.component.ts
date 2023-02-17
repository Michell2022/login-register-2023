import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  formRegister!:FormGroup;

  constructor(private userServices:UserService, private router:Router){
    this.formRegister = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  ngOnInit(): void {
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

  onSubmit(){
    this.userServices.registerUser(this.formRegister.value)
    .then(response => {
      console.log(response)
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }

}
