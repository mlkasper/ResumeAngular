import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'projects', component: ProjectComponent },
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ComingSoonComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
