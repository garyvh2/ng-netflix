// ||> Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ||> Components
import { NotFoundComponent } from './components/modules/notfound/notfound.component';
import { InnerMovieComponent } from './components/modules/movie/movie.component';


@NgModule ({
    declarations: [
        NotFoundComponent,
        InnerMovieComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        NotFoundComponent, InnerMovieComponent
    ]
})
export class FullMovieModule {

}
