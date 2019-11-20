import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhyComponent } from './layout/why/why.component';
import { LittleComponent } from './layout/little/little.component';
import { HomeComponent } from './layout/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'why', component: WhyComponent},
  {path: 'littlething', component: LittleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
