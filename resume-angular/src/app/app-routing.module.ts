import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  //order matters DOM Will not complile correctly if in the wrong order. 
  { path: 'projects', component: ProjectComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full'} , //redirects homepage to our coming soon router
  { path: 'home', component: ComingSoonComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
