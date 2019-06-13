import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ExpPageComponent } from './experiments/experiments.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ExpPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ParticlesModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }
      { path: 'experiments', component: ExpPageComponent}
    ])
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
