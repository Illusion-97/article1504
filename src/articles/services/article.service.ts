import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AbstractService} from "../../common/services/abstract.service";
import {Article} from "../models/article";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends AbstractService<Article> {

  END_POINT = `${environment.API_URL}/articles`

  constructor(http: HttpClient) {
    super(http)
  }

  override update(article: Article) : Observable<Article>  {
    return this.http.put<Article>(`${this.END_POINT}/${article.id}`,article)
  }

}
