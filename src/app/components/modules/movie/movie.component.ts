// ||> Core
import { Component, Input } from '@angular/core';

// ||> Providers
import { Movie } from '../../../models/Movie';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
})
export class MovieComponent {
    @Input()
    mv: Movie;

    @Output()
    selectMovie = new EventEmitter();

    pickMovie(movie) {
        this.selectMovie.emit(movie);
    }

}
