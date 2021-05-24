import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessAppComponent } from './pages/chess-app/chess-app.component';
import { ChessGuideComponent } from './pages/chess-guide/chess-guide.component';

const routes: Routes = [
  { path: 'guide', component: ChessGuideComponent },
  { path: '', component: ChessAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
