import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private http: HttpClient) {}

  BASE_URL = environment.BASE_URL;

  getAllMovies(): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'movies');
  }

  deleteMovie(id_pelicula: number): Observable<any> {
    return this.http.delete<any>(this.BASE_URL + 'movies/' + id_pelicula);
  }

  createMovie(movie: any): Observable<any> {
    return this.http.post<any>(this.BASE_URL + 'movies/', movie);
  }

  getMovieById(id_pelicula: number): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'movies/' + id_pelicula);
  }

  updateMovie(id_pelicula: number, movie: any): Observable<any> {
    return this.http.put<any>(this.BASE_URL + 'movies/' + id_pelicula, movie);
  }
}
