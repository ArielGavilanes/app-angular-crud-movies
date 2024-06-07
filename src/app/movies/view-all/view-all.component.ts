import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css'],
})
export class ViewAllComponent implements OnInit {
  constructor(private databaseService: DatabaseService) {}

  movies: any[] = [];
  movie: any = {};
  visibleCreate: boolean = false;
  visibleViewOne: boolean = false;
  visibleUpdate: boolean = false;

  getAllMovies() {
    return this.databaseService.getAllMovies().subscribe(
      (response) => {
        console.log(response);
        this.movies = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteMovie(id_pelicula: number) {
    return this.databaseService.deleteMovie(id_pelicula).subscribe();
  }

  createMovie() {
    this.visibleCreate = false;
    console.log(this.movie);
    return this.databaseService.createMovie(this.movie).subscribe();
  }

  showDialogCreate() {
    this.visibleCreate = true;
  }

  showDialogViewOne(id_pelicula: number) {
    this.visibleViewOne = true;
    return this.databaseService.getMovieById(id_pelicula).subscribe(
      (response) => {
        this.movie = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  showDialogUpdate(id_pelicula: number) {
    this.visibleUpdate = true;
    return this.databaseService.getMovieById(id_pelicula).subscribe(
      (response) => {
        this.movie = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateMovie(id_pelicula: number) {
    this.visibleUpdate = false;
    const movie = this.movie;
    return this.databaseService.updateMovie(id_pelicula, movie).subscribe();
  }

  ngOnInit(): void {
    this.getAllMovies();
  }
}
