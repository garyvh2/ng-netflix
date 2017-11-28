import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../../models/Movie';

@Pipe ({
    name: 'newArrivals'
})
export class NewArrivalsPipe implements PipeTransform {
    transform (movies: Movie[]) {
        return movies.filter ((movie) => {
            return movie.arrival;
        });
    }
}
