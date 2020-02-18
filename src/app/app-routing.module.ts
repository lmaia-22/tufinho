import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhyComponent } from './layout/why/why.component';
import { LittleComponent } from './layout/little/little.component';
import { HomeComponent } from './layout/home/home.component';
import { KittyComponent } from './layout/kitty/kitty.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'why', component: WhyComponent},
  {path: 'love', component: LittleComponent},
  {path: 'kittys', component: KittyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
