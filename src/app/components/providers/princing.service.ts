import { Injectable } from '@angular/core';

const currencyDollar = 575;
const priceMovie     = 300;

@Injectable ()
export class PricingService {
    getDolar (): number {
        return currencyDollar;
    }
    getPriceMovie (): number {
        return priceMovie;
    }
}
