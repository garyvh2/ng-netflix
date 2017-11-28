import { Component, Input, ViewChild } from '@angular/core';
import { DownloadComponent } from '../download/download.component';
import { Movie } from '../../../models/Movie';

import { ConnService } from '../../providers/connection.service';



@Component({
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
    @Input()
    selected: Movie;

    //You can invoke the functions through the ID selector too
    @ViewChild(DownloadComponent)
    down: DownloadComponent;

    constructor (private conn: ConnService) {}

    addMovie () {
        this.conn.sendNotification ('Hola');
    }
    seeMovie () {
        
    }

}
