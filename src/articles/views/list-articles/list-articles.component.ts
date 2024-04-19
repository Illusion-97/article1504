import { Component } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Article} from "../../models/article";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-list-articles',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './list-articles.component.html',
  styleUrl: './list-articles.component.css'
})
export class ListArticlesComponent {

  articles!: Observable<Article[]>

  constructor(protected service: ArticleService) {
    this.getAll()
  }

  getAll() {
    this.articles = this.service.findAll()
  }

  delete(id: number) {
    this.service.delete(id).subscribe({
      next: () => this.getAll()
    })
  }
}
