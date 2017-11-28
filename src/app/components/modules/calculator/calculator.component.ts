// ||> Core
import { Component, OnInit } from '@angular/core';
import { ConnService } from '../../providers/connection.service';


@Component ({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.componenet.css']
})
export class CalculatorComponent implements OnInit{
    cantidad: number = 0;

    constructor (private conn: ConnService) {}

    ngOnInit() {
        this.conn.observable.subscribe ((msj) => {
        });
    }
}
