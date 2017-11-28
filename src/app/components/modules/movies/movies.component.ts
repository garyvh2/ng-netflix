// ||> Core
import { Component, OnInit } from '@angular/core';

// ||> Providers
import { MoviesService } from './movies.service';

// ||> Models
import { Movie } from '../../../models/Movie';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    movies: Movie[];
    selectedMovie: Movie;

    constructor (private sm: MoviesService) {}

    ngOnInit () {
        this.sm.getMovies().subscribe ((movies: Movie[]) => {
            this.movies = movies;
        });
        this.sm.getMoviesRemote((err, data) => {
            if (err) { console.log (err.code, err.message || err.body); }
            console.log (data);
            // this.movies = data;
        });
    }

    setMovie (movie) {
        console.log (movie);
        this.selectedMovie = movie;
    }
}
