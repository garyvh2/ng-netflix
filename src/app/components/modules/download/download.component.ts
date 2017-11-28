// ||> Core
import { Component, Input } from '@angular/core';

// ||> Providers
import { Movie } from '../../../models/Movie';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-download',
    template: `
        <div>
            <div class="barra" [style.width]="progress_percent"></div>
            <p (click)="init()" *ngIf="state">Descargando ...</p>
        </div>
    `,
    styles: [`
        .barra {
            height: 10px;
            width: 10%;
            background: #e50914;
        }
    `]
})
export class DownloadComponent {
    state:            boolean;
    progress:         number;
    progress_percent: String     = '0%';
    /*stepper:          Generator  = (function* () {
        yield* Array(100).fill(1).map ((_, i) => _ + i);
    })();*/

    init () {
        /*const self = this;
        while (self.progress !== undefined) {
            console.log (self.progress);
            self.progress = self.stepper.next().value;
            self.progress_percent = self.progress + '%';
        }*/
        this.progress = 0;
        const si = setInterval (() => {
            if (this.progress <= 100) {
                this.state = true;
                this.progress_percent = this.progress++ + '%';
            } else {
                this.state = false;
                clearInterval (si);
                console.log (this.progress);
            }
        }, 10);
    }

}
