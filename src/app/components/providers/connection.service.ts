import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ConnService {
    private source = new Subject ();
    observable = this.source.asObservable();

    sendNotification (saludo: string) {
        this.source.next (saludo);
    }
}
