import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
const appRoutes: Routes = [
  { path: '', redirectTo: 'body', pathMatch: 'full' },
  { path: 'home', component: BodyComponent }
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
