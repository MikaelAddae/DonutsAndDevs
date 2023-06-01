import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts.component';
import { DonutDetailsComponent } from './donut-details/donut-details.component';

const routes: Routes = [
  {path: 'donuts', component:DonutsComponent},
  {path: 'donutDetails', component:DonutDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
