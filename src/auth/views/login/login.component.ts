import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router, RouterLink} from "@angular/router";
//import {HotToastService} from "@ngneat/hot-toast";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
  imports: [ReactiveFormsModule, FormsModule, RouterLink],
    standalone: true,
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    form: FormGroup = new FormGroup({
        email: new FormControl(""),
        password: new FormControl("")
    })

    constructor(protected service: AuthService, private router: Router, /*private toast: HotToastService*/) {
    }

    handleSubmit() {
        if (this.form.valid) {
            this.service.login(this.form.value)
                .subscribe({
                  next: () => {
                    this.router.navigate(['/'])
                  },
                    error: () => {
                      //this.toast.error("Connexion refusée.\nVérifiez vos identifiants")
                    }
                })
        }
    }

  setRemember(event: Event) {
    this.service.remember = (event.target as HTMLInputElement).checked;
  }
}
