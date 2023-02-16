import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit{

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

}
