import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ChessAppComponent } from './pages/chess-app/chess-app.component';
import { ChessGuideComponent } from './pages/chess-guide/chess-guide.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ChessAppComponent,
    ChessGuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
