import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

readonly url =  'https://localhost:5001/Book';

formData: Book;

  constructor(private _http: HttpClient) { }

  getBooks(pageNumber: number = 1, pageSize: number = 5, searchString?: string, orderBy?: string, sortDirection?: 'asc' | 'desc') {

    let params = new HttpParams();
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());

    let headers = new HttpHeaders();

    if(orderBy) params = params.append('orderBy', orderBy?.toString());
    if(sortDirection) params = params.append('sortDirection', sortDirection?.toString());
    if(searchString) params = params.append('searchString', searchString);

    return this._http.get<Book []>(`${this.url}/GetAll`, { observe: 'response', params });
  }

  getBook(id) {
    return this._http.get(`${this.url}/Get/${id}`);
  }
  
  createBook(formData: Book) {
    return this._http.post(`${this.url}/Create`, formData);
  }

  deleteBook(id) {
    return this._http.delete(`${this.url}/Delete/${id}`);
  }

  updateBook(formData: Book) {
    return this._http.put(this.url + '/Update', formData);
  }
  
}
