import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2CarouselamosModule} from 'ng2-carouselamos'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarocarouselComponent } from './carocarousel/carocarousel.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CarocarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
