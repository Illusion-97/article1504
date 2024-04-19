import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ArticleService} from "../../services/article.service";
import {Observable, of, switchMap} from "rxjs";
import {AbstractFormComponent} from "../../../common/components/abstract-form-component";

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent extends AbstractFormComponent {
  form: FormGroup = new FormGroup<any>({
    id: new FormControl(0),
    src: new FormControl(""),
    alt: new FormControl("", {validators: [Validators.required]}),
    titre: new FormControl("", {validators: [Validators.required]}),
    description: new FormControl("", {validators: [Validators.required]}),
    lien: new FormControl("", {validators: [Validators.required]})
  })

  constructor(route: ActivatedRoute, private service: ArticleService, private router: Router) {
    super();
    route.paramMap.pipe(switchMap(map => {
      const id: number = +(map.get('id') ?? "0");
      if(id) return this.service.findById(id)
      return of(undefined)
    })).subscribe({
      next: article => {
        if(article) this.form.patchValue(article)
      },
      error: () => {
        this.router.navigate(['/editor/0'])
      }
    })
  }

  onSubmit$() {
    (this.form.value.id ? this.service.update(this.form.value) : this.service.save(this.form.value)).subscribe({
      next: value => { // Indique quoi faire quand tout se passe bien et qu'on récupère le résultat attendu
        this.router.navigate(['/'])
      },
      error: err => { // Indiquer quoi faire s'il y a un problème à la récupération de la réponse
        console.log("Error", err)
      }
    })
  }
}
