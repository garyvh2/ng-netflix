import { Pipe, PipeTransform } from '@angular/core';

// ||> Providers
import { PricingService } from '../providers/princing.service';

@Pipe ({
    name: 'membership'
})
export class MembershipPipe implements PipeTransform {
    moviePrice:     number;
    currencyDollar: number;

    constructor (private ps: PricingService) {
        this.moviePrice     = this.ps.getPriceMovie();
        this.currencyDollar = this.ps.getDolar();
    }
    transform (cantidad: number) {
        return (cantidad * this.moviePrice) / this.currencyDollar;
    }
}
