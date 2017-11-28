// ||> Core
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// ||> Module
import { FullMovieModule } from '../3rd-party/fullmovie-module/fullmovie.module';

// ||> Components
import { MainComponent } from './main.component';
import { MovieComponent } from './components/modules/movie/movie.component';
import { MoviesComponent } from './components/modules/movies/movies.component';
import { PreviewComponent } from './components/modules/preview/preview.component';
import { LocationComponent} from './components/modules/location/location.component';
import { DownloadComponent } from './components/modules/download/download.component';
import { CalculatorComponent } from './components/modules/calculator/calculator.component';
import { InnerMovieComponent } from '../3rd-party/fullmovie-module/components/modules/movie/movie.component';
import { NotFoundComponent } from '../3rd-party/fullmovie-module/components/modules/notfound/notfound.component';

// ||> Providers
import { ConnService } from './components/providers/connection.service';
import { MoviesService } from './components/modules/movies/movies.service';
import { PricingService } from './components/providers/princing.service';


// ||> Directive
import { ArrivalDirective } from './components/modules/movie/movie.directive';

// ||> Pipes
import { MembershipPipe } from './components/pipes/membership.pipe';
import { NewArrivalsPipe } from './components/pipes/newArrivals.pipe';


const ROUTES: Routes = [
    { path: '',         component: MoviesComponent },
    { path: 'movie',    component: InnerMovieComponent },
    { path: '**',       component: NotFoundComponent }
];

const ROUNTING = RouterModule.forRoot (ROUTES);

@NgModule ({
    declarations: [
        MainComponent,
        MembershipPipe,
        MovieComponent,
        NewArrivalsPipe,
        MoviesComponent,
        ArrivalDirective,
        PreviewComponent,
        LocationComponent,
        DownloadComponent,
        CalculatorComponent
    ],
    providers:    [
        ConnService,
        MoviesService,
        PricingService
    ],
    imports:      [
        ROUNTING,
        FormsModule,
        BrowserModule,
        FullMovieModule,
        HttpClientModule
    ],
    bootstrap:    [ MainComponent ]
})
export class MainModule {

}
