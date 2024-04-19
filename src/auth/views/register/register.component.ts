import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {AbstractFormComponent} from "../../../common/components/abstract-form-component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends AbstractFormComponent {
  password: FormControl = new FormControl("", {validators: [Validators.required, Validators.minLength(8)]})
  confirmPassword: FormControl = new FormControl("", {validators: [this.mustMatch(this.password)]})

  form: FormGroup = new FormGroup<any>({
    id: new FormControl(0),
    username: new FormControl("", {validators: [Validators.required]}),
    email: new FormControl("", {validators: [Validators.email, Validators.required]}),
    password: this.password
  })

  constructor(private router: Router, private service: AuthService) {
    super();
  }

  onSubmit$() {
    this.service.register(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/auth/login'])
      }
    })
  }
}
