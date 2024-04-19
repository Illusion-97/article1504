import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class AbstractService<T> {

  abstract END_POINT: string;

  protected constructor(protected http: HttpClient) { }

  findAll(): Observable<T[]> {
    return this.http.get<T[]>(this.END_POINT)
  }

  findById(id: number) {
    return this.http.get<T>(`${this.END_POINT}/${id}`)
  }

  save(entity: T) : Observable<T> {
    return this.http.post<T>(this.END_POINT,entity)
  }

  update(entity: T) : Observable<T>  {
    return this.http.put<T>(this.END_POINT,entity)
  }

  delete(id: number) {
    return this.http.delete<never>(`${this.END_POINT}/${id}`)
  }
}
