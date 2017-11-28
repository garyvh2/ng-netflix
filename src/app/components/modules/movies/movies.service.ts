import { Injectable } from '@angular/core';
import { Movie } from '../../../models/Movie';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';
import { ConnService } from '../../providers/connection.service';

const movies: Movie[] = [
    new Movie (1, 'IT1', 'Lorem Ipsum', 'assets/movie1.webp', 'assets/bg1.webp', true),
    new Movie (2, 'IT2', 'Lorem Ipsum', 'assets/movie2.webp', 'assets/bg2.webp', false),
    new Movie (3, 'IT3', 'Lorem Ipsum', 'assets/movie3.webp', 'assets/bg3.webp', true),
    new Movie (4, 'IT4', 'Lorem Ipsum', 'assets/movie4.webp', 'assets/bg4.webp', false),
    new Movie (5, 'IT5', 'Lorem Ipsum', 'assets/movie5.webp', 'assets/bg5.webp', false)
];

@Injectable ()
export class MoviesService {
    private source = new Subject ();
    observable = this.source.asObservable();
    movies: Movie[];

    constructor (private http: HttpClient) {}

    getMovies () {
        this.http.get ('http://la404.com/api/?movies').subscribe ((data: Array<any>) => {
            this.movies = data.map (movie => {
                return new Movie (movie[0], movie[1], movie[2], movie[3], movie[4], movie[5]);
            });
            this.source.next(this.movies);
        });
        return this.observable;
    }
    getMoviesRemote (cb): any {
        this.http.get ('http://la404.com/api/?movies').subscribe ((data) => {
            console.log (data);
            document['movie'] = Movie;
            for (const el in data ) {
                if (data.hasOwnProperty (el)) {
                    const movie = Movie.bind.apply (Movie, data[el]);
                    movies.push(new movie);
                }
            }
            return cb (null, movies);
        }, err => {
            return cb (err);
        });
    }
}
